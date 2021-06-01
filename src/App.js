import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Router>
      <div className="App">
        <span>
          <ul id="navigation">
            <li>
              <NavLink to="/" exact strict activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                exact
                strict
                activeStyle={{ color: "green" }}
              >
                {" "}
                My Taks
              </NavLink>
            </li>
          </ul>
        </span>
        <Route
          path="/"
          exact
          strict
          render={() => {
            return <h1>welcome home</h1>;
          }}
        />
        <Route path="/tasks" exact strict component={Tasks} />
      </div>
    </Router>
  );
}

export default App;
