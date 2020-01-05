import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivatesRouter from "./PrivatesRouter";
import Login from "../views/authentication/Login";
import SignUp from "../views/authentication/SignUp";

const MainRouter: React.FunctionComponent<{}> = props => {


    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={PrivatesRouter} />
            </Switch>
        </>
    )
}

export default MainRouter;