import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
const DashBoard = () => {
  return (
    <div>
      <h2>DashBoard</h2>
    </div>
  );
};
export default App;
