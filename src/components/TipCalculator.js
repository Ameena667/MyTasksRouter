import React from "react";
//import Unknown from './Unknown'

class TipCalculator extends React.Component {
  state = {
    billAmount: "0",
    tipAmount: "0",
    peopleShare: "0",
  };

  calculate = () => {
    var billAmt = parseInt(document.getElementById("bill").value);
    var service = parseFloat(document.getElementById("serviceQual").value);
    var noOfPeople = parseInt(document.getElementById("peopleCount").value);
    console.log(billAmt, service, noOfPeople);
    //console.log(typeof(billAmt))String
    //console.log(typeof(parseInt(billAmt)))
    var extraPay = billAmt * service;
    //console.log(extraPay)
    this.setState({
      billAmount: billAmt + extraPay,
      tipAmount: extraPay,
      peopleShare: (billAmt + extraPay) / noOfPeople,
    });
    //console.log(this.state.billAmount , this.state.tipAmount , this.state.peopleShare)
  };
  componentDidUpdate() {
    console.log("component updated");
    return <h1>hello</h1>;
  }
  render() {
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <p>How much was your bill? </p>
        Rupees : <input id="bill" placeholder="Bill amount" />
        <p>How was our service?</p>
        <select id="serviceQual">
          <option disabled selected value="0">
            -- Choose an Option --
          </option>
          <option value="0.3">30% - Outstanding</option>
          <option value="0.2">20% - Good</option>
          <option value="0.15">15% - OK</option>
          <option value="0.1">10% - Bad</option>
          <option value="0.05">5% - Terrible</option>
        </select>
        <p>How many people are sharing the bill?</p>
        <input id="peopleCount" placeholder="Number of people" /> people
        <br />
        <br />
        <button onClick={this.calculate}>Calculate</button>
        <Unknown values={this.state} />
      </div>
    );
  }
}
const Unknown = (props) => {
  return (
    <div>
      <h2>Total bill : {props.values.billAmount}</h2>
      <h3>Total tip : {props.values.tipAmount}</h3>
      <h3>Bill per person :{props.values.peopleShare}</h3>
    </div>
  );
};
export default TipCalculator;
