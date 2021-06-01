import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import TempConverter from "./components/TempConverter";
import TipCalculator from "./components/TipCalculator";
import TodoMatic from "./components/TodoMatic/TodoMatic";
import ExpenseTracker from "./components/ExpenseTracker";
import CovidStatus from "./components/CovidStatus";

const Tasks = () => {
  return (
    <Router>
      <div>
        <ul id="taskslist">
          <NavLink to="/Tasks/TaxCalculator" activeStyle={{ color: "green" }}>
            <li>Tip Calculator</li>
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
          path="/Tasks/TaxCalculator"
          exact
          strict
          component={TipCalculator}
        />
        <Route
          path="/Tasks/TempConverter"
          exact
          strict
          component={TempConverter}
        />
        <Route path="/Tasks/TodoMatic" exact strict component={TodoMatic} />
        <Route
          path="/Tasks/ExpenseTracker"
          exact
          strict
          component={ExpenseTracker}
        />
        <Route path="/Tasks/CovidStatus" exact strict component={CovidStatus} />
      </div>
    </Router>
  );
};

export default Tasks;
