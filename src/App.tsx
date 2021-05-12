import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summoner from "./features/summoner/Summoner";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/summoner/userName=:userName" component={Summoner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
