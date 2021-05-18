import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summoner from "./features/summoner/Summoner";
import Main from "./features/main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/summoner/userName=:userName" component={Summoner} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
