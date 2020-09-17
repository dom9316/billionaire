import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import Navigator from "Components/Navigator";

export default () => (
    <Router>
        <>
            <Header />
            <Navigator />
            <Switch>
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)