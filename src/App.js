import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "views/home/index";
import Target from "views/target/index";
import Dmand from "views/demand/index";
import Discover from "views/discover/index";
import My from "views/my/index";
import Login from "views/login/index";
import Demo from "views/demo/index";


export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/target" component={Target} />
          <Route path="/dmand" component={Dmand} />
          <Route path="/discover" component={Discover} />
          <Route path="/my" component={My} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={Demo} />

          {/* 重定向路由，一般放在重定向到的路由的后面 */}
          <Redirect path="/" to="/index" />
        </Switch>
      </Router>
    </div>
  );
}
