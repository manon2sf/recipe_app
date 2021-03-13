/**
 *  components/App/App.js - Main App Component
 */

/* Modules and components imports */
import React from "react";
import Homepage from "../Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Style import */
import "./style.scss";

/* App component */
function App(props) {
  return (
    <Router>
      {/* Main Container */}
      <div id="mainContainer">
        {/* Main Switch */}
        <Switch>
          {/* Home Page */}
          <Route path="/" component={Homepage} />
        </Switch>
      </div>{" "}
    </Router>
  );
}

export default App;
