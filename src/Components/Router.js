import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Script from "Routes/Script";
import Career from "Routes/Career";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default() => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/script" exact component={Script} />
                <Route path="/career" exact component={Career} />
                <Route path="/search" exact component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);