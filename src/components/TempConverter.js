import React from "react";

class TempConverter extends React.Component {
  state = {
    result: "------",
    symbol: "-",
  };
  //function for performing temparature conversion
  calculate = () => {
    var degreeTemp = parseFloat(document.getElementById("degrees").value);
    var toconvert = document.getElementById("toconvert").value;
    //console.log(toconvert)
    //if given fahrenheit then convert to celsius
    if (toconvert === "F") {
      //console.log('F')
      var res = parseFloat((degreeTemp - 32) * (5 / 9)).toFixed(4);
      this.setState({
        result: res,
        symbol: "C",
      });
    }
    //if given celsius then convert to fahrenheit
    else if (toconvert === "C") {
      //console.log('C')
      //console.log(res.toString() , typeof(res) , typeof(res.toString())
      var res1 = parseFloat((9 * degreeTemp) / 5 + 32).toFixed(4);
      this.setState({
        result: res1,
        symbol: "F",
      });
    }
  };
  render() {
    return (
      //this division for displaying UI
      <div className="App">
        <h1>Temperature Converter</h1>
        <p>
          Degrees : <input id="degrees" />{" "}
        </p>
        <p>
          Type :
          <select style={{ width: "170px" }} id="toconvert">
            <option value="F">Fahrenheit</option>
            <option value="C">Celsius</option>
          </select>
        </p>
        <button onClick={this.calculate}>Convert</button>
        <h2>
          {this.state.result} &#176;{this.state.symbol}
        </h2>
      </div>
    );
  }
}

export default TempConverter;
