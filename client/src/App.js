import React from 'react';
import {BrowserRouter} from "react-router-dom";
import 'materialize-css';
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from './context/AuthContext';
import {Loader} from "./components/Loader";
import {Navbar} from "./components/Navbar";


function App() {
    const {access, login, logout, ready} = useAuth()
    const isAuthenticated = !!access
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            access, login, logout, isAuthenticated
        }}>
            <BrowserRouter>
                {isAuthenticated && <Navbar />}
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
