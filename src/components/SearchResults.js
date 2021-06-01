const SearchResults = (props) => {
  //console.log(props.values);
  //<h1>hi</h1>
  // <h2>{props.values}</h2>
  // <h1>hi</h1>
  const dateFormat = (date) => {
    var year = date.slice(0, 4);
    var month = date.slice(4, 7);
    var day = date.slice(8, 10);
    return day + month + "-" + year;
  };
  return (
    <div style={{ width: "100%" }}>
      {props.data.map((d) => (
        <>
          {/* for flexible access of data --- toLowerCase */}
          {d.Country.toLowerCase() === props.temp_search.toLowerCase() ? (
            <table id="countries">
              <thead>
                <tr>
                  <td>Country</td>
                  <td>CountyCode</td>
                  <td>Date</td>
                  <td>NewConfirmed</td>
                  <td>NewDeaths</td>
                  <td>NewRecovered</td>
                  <td>Slug</td>
                  <td>TotalConfirmed</td>
                  <td>TotalRecovered</td>
                  <td>TotalDeaths</td>
                </tr>
              </thead>

              <tr key={d.ID}>
                <td>{d.Country}</td>
                <td>{d.CountryCode}</td>
                <td>{dateFormat(d.Date)}</td>
                <td>{d.NewConfirmed}</td>
                <td>{d.NewDeaths}</td>
                <td>{d.NewRecovered}</td>
                <td>{d.Slug}</td>
                <td>{d.TotalConfirmed}</td>
                <td>{d.TotalRecovered}</td>
                <td>{d.TotalDeaths}</td>
              </tr>
            </table>
          ) : null}
        </>
      ))}
      <br />
      <br />
    </div>
  );
};
export default SearchResults;

/*
  
  return props.data.map((d) => (
      <div>
        <h1>
          {" "}
          {props.temp_search} {props.temp_click} {d.Country}
        </h1>
      </div>
    ));
   */
