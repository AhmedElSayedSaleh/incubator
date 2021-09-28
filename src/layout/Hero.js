import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Interns } from "../pages";

const Hero = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/interns">
        <Interns />
      </Route>
    </Switch>
  );
};

export default Hero;
