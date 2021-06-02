import react from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path='/home'>Home Component</Route>{" "}
      <Route path='/projects'>Projets Component</Route>{" "}
      <Route path='/explore'>Explore Component</Route>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
};

export default Routes;
