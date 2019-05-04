import React from "react";


import movie from "../routes/movie.js"
import show from "../routes/show";
import search from "../routes/search";


import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const router = () => (

    <Router>
        <Switch>
            <Route path ="/" exact component={movie} />
            <Route path ="/show" exact component={show} />
            <Route path ="/search" exact component={search} />
            <Redirect from = "*" to ="/"/>
        </Switch>
    </Router>

);


export default router;

