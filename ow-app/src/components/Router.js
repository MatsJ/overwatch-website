import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import App from "./App";
import Owl from "./OWL";
import Patchnotes from "./Patchnotes";
import Stats from "./Stats";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/heroes" component={App} />
      <Route exact path="/owl" component={Owl} />
      <Route exact path="/patchnotes" component={Patchnotes} />
      <Route exact path="/stats" component={Stats} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
