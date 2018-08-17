import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/Home-page/Components/Layout/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
