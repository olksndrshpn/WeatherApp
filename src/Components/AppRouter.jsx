import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
    const {isLoading} = useContext(AuthContext);
    console.log(isLoading)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isLoading
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;
