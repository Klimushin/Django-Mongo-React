import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {PatientsPage} from './pages/PatientsPage'
import {PersonalinfoPage} from "./pages/PersonalinfoPage";
import {AuthPage} from "./pages/AuthPage";
import {SearchPage} from "./pages/SearchPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/patients" exact>
                    <PatientsPage/>
                </Route>
                <Route path="/search" exact>
                    <SearchPage/>
                </Route>
                <Route path="/detail/:id">
                    <PersonalinfoPage/>
                </Route>
                <Redirect to="/patients"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}