import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import List from "./list/index";
import Detail from "./detail/index";

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/index/list" component={List} />
        <Route path="/index/detail" component={Detail} />
        <Redirect path="/index" to="/index/list" />
      </Switch>
    </div>
  );
};
