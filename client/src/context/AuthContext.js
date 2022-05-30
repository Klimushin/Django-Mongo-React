import {createContext} from 'react';

function noop() {
}

export const AuthContext = createContext({
    access: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})