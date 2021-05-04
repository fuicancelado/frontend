import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Twitter } from "../pages/Twitter";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Twitter" exact component={Twitter}/>
            <Route component={NotFound}/>
        </Switch>
    )
}