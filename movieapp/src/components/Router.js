import React from "react";
import movie from "../routes/movie";
import show from "../routes/show";
import search from "../routes/search";
import detail from "../routes/detail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";

const router = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={movie} />
        <Route path="/show" exact component={show} />
        <Route path="/search" exact component={search} />
        <Route path="/movie/:id" exact component={detail} />
        <Route path="/show/:id" exact component={detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default router;
