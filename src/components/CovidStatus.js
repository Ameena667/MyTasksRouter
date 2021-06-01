import React from "react";
import SearchResults from "./SearchResults";

class CovidStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      temp_task: "",
      temp_search: "",
    };
  }
  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    // await used to wait until loading of data completes
    //waiting until the completion of asynchronus fecth function complete
    const response = await fetch(url);
    //after fetching we are getting json data
    const data = await response.json();
    console.log(this.state.data);
    this.setState({
      loading: false,
      data: data.Countries,
    });
    console.log(data);
  }
  //str.split("").reverse().join("");
  dateFormat(date) {
    var year = date.slice(0, 4);
    var month = date.slice(4, 7);
    var day = date.slice(8, 10);
    return day + month + "-" + year;
  }
  search = (e) => {
    this.setState({
      temp_search: e.target.value,
    });
  };

  sortArray = (e) => {
    //list.sort((a, b) => (a.NewConfirmed > b.NewConfirmed ? 1 : -1));
    //console.log(list);
    //const list = Object.assign([], this.state.data);
    //console.log(e.target.value, this.state.temp_order);
    this.setState({
      temp_task: e.target.value,
    });
  };

  order = (e) => {
    const list = Object.assign([], this.state.data);
    //if string can be converted into variable name it will completed
    //with in few lined rather than this ...................
    if (e.target.value === "A") {
      switch (this.state.temp_task) {
        case "NewConfirmed":
          list.sort((a, b) => (a.NewConfirmed > b.NewConfirmed ? 1 : -1));
          break;
        case "NewRecovered":
          list.sort((a, b) => (a.NewRecovered > b.NewRecovered ? 1 : -1));
          break;
        case "NewDeaths":
          list.sort((a, b) => (a.NewDeaths > b.NewDeaths ? 1 : -1));
          break;
        case "TotalConfirmed":
          list.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? 1 : -1));
          break;
        case "TotalRecovered":
          list.sort((a, b) => (a.TotalRecovered > b.TotalRecovered ? 1 : -1));
          break;
        case "TotalDeaths":
          list.sort((a, b) => (a.TotalDeaths > b.TotalDeaths ? 1 : -1));
          break;
        default:
          console.log("...........");
          break;
      }
    } else if (e.target.value === "D") {
      switch (this.state.temp_task) {
        case "NewConfirmed":
          list.sort((a, b) => (a.NewConfirmed > b.NewConfirmed ? -1 : 1));
          break;
        case "NewRecovered":
          list.sort((a, b) => (a.NewRecovered > b.NewRecovered ? -1 : 1));
          break;
        case "NewDeaths":
          list.sort((a, b) => (a.NewDeaths > b.NewDeaths ? -1 : 1));
          break;
        case "TotalConfirmed":
          list.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? -1 : 1));
          break;
        case "TotalRecovered":
          list.sort((a, b) => (a.TotalRecovered > b.TotalRecovered ? -1 : 1));
          break;
        case "TotalDeaths":
          list.sort((a, b) => (a.TotalDeaths > b.TotalDeaths ? -1 : 1));
          break;
        default:
          console.log("...........");
          break;
      }
    }
    this.setState({
      data: list,
    });
  };
  temp_search = (e) => {
    this.setState({
      temp_search: e.target.value,
    });
  };

  render() {
    //console.log(this.state.temp_search);
    return (
      <div className="App">
        {this.state.loading === true ? (
          <h2>loading.....</h2>
        ) : (
          <div>
            <h1>Recent Covid-19 Status</h1>
            <h3>
              choose your sort by attribute and order of sorting to get the
              results
            </h3>
            <br />
            <label id="labels">
              Sort By :-
              <select onChange={this.sortArray}>
                <option disabled selected value="">
                  -- Choose sortBy attribute --
                </option>
                <option value="NewConfirmed">NewConfirmed</option>
                <option value="NewRecovered">NewRecovered</option>
                <option value="NewDeaths">NewDeaths</option>
                <option value="TotalConfirmed">TotalConfirmed</option>
                <option value="TotalRecovered">TotalRecovered</option>
                <option value="TotalDeaths">TotalDeaths</option>
              </select>
            </label>
            <label id="labels">
              Order :-
              <select onChange={this.order}>
                <option disabled selected value="">
                  -- Choose Order --
                </option>
                <option value="A">Ascending</option>
                <option value="D">Decending</option>
              </select>
            </label>

            <label id="labels">
              Search:-
              <input
                placeholder="Search by country name"
                onChange={this.temp_search}
              />
            </label>
            <br />

            <SearchResults
              temp_search={this.state.temp_search}
              temp_click={this.state.temp_click}
              data={this.state.data}
            />

            {/*<p>{this.state.temp_search}</p>*/}

            {/* related to table display part*/}
            <table id="countries">
              <thead>
                <tr>
                  <td>Country</td>
                  <td>CountyCode</td>
                  <td>Date</td>
                  <td>NewConfirmed</td>
                  <td>NewDeaths</td>
                  <td>NewRecovered</td>
                  {/*<td>Slug</td>*/}
                  <td>TotalConfirmed</td>
                  <td>TotalRecovered</td>
                  <td>TotalDeaths</td>
                </tr>
              </thead>
              {this.state.data.map((d) => (
                <>
                  {/*{d.Slug === "afghanistan" ? <h1>afgan</h1> : <h2>no data</h2>}*/}

                  <tr key={d.ID}>
                    <td>{d.Country}</td>
                    <td>{d.CountryCode}</td>
                    <td>{this.dateFormat(d.Date)}</td>
                    <td>{d.NewConfirmed}</td>
                    <td>{d.NewDeaths}</td>
                    <td>{d.NewRecovered}</td>
                    {/*<td>{d.Slug}</td> */}
                    <td>{d.TotalConfirmed}</td>
                    <td>{d.TotalRecovered}</td>
                    <td>{d.TotalDeaths}</td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CovidStatus;
