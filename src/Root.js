import React from "react";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import App from "./modules/App";
import About from "./modules/About";
import Home from "./modules/Home";

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

/*
function Root(props) {
  this.name = this.name || "pizda";
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  );
}

const MyRoot = Root.bind({ name: "suka" });

class Root extends React.Component {
  render = () => (
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  );
}
*/

export default Root;
