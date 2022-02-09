import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const appParent = lazy(
    () => import("../Component/App")
);

const Router = () => {

    return (
        <Switch>
            <Route path="/" exact={true} component={appParent} />
        </Switch>
    );
};

export default Router;
