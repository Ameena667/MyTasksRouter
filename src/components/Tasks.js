import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

const Tasks = () => {
  return (
    <Router>
      <div>
        <ul id="taskslist">
          <NavLink to="/Tasks/Counter" activeStyle={{ color: "green" }}>
            <li>Counter Color Change</li>
          </NavLink>
          <NavLink to="/Tasks/TaxCalculator" activeStyle={{ color: "green" }}>
            <li>Tax Calculator</li>
          </NavLink>
          <NavLink to="/Tasks/TempConverter" activeStyle={{ color: "green" }}>
            <li>Temperature Converter</li>
          </NavLink>
          <NavLink to="/Tasks/TodoMatic" activeStyle={{ color: "green" }}>
            <li>Todo Matic</li>
          </NavLink>
          <NavLink to="/Tasks/ExpenseTracker" activeStyle={{ color: "green" }}>
            <li>Expense Tracker</li>
          </NavLink>
          <NavLink to="/Tasks/CovidStatus" activeStyle={{ color: "green" }}>
            <li>Covid Status</li>
          </NavLink>
        </ul>
        <Route
          path="/Tasks/Counter"
          exact
          strict
          render={() => {
            return <h1>Welcome to counter color change output</h1>;
          }}
        />
        <Route
          path="/Tasks/TaxCalculator"
          exact
          strict
          render={() => {
            return <h1>Welcome to Tax calculator output</h1>;
          }}
        />
        <Route
          path="/Tasks/TempConverter"
          exact
          strict
          render={() => {
            return <h1>welcome to temparature converter output</h1>;
          }}
        />
        <Route
          path="/Tasks/TodoMatic"
          exact
          strict
          render={() => {
            return <h1>welcome to todo matic output</h1>;
          }}
        />
        <Route
          path="/Tasks/ExpenseTracker"
          exact
          strict
          render={() => {
            return <h1>welcome to expense tracker output</h1>;
          }}
        />
        <Route
          path="/Tasks/CovidStatus"
          exact
          strict
          render={() => {
            return <h1>welcome to covid status output</h1>;
          }}
        />
      </div>
    </Router>
  );
};

export default Tasks;
