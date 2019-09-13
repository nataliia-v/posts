import React from "react";
import { Switch, Redirect } from "react-router";

import routes from "../routes";

function Main() {
  return (
      <div>
        <Switch>
          {routes}

          <Redirect from="" to="/posts" />
        </Switch>
      </div>
  );
}

export default Main;