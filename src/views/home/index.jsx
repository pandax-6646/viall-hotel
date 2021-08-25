import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import List from "./list/index";
import Detail from "./detail/index";

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/index/list" component={List} />
        <Route path="/index/detail/:id" component={Detail} />
        <Redirect path="/" to="/index/list" />
      </Switch>
    </div>
  );
};
