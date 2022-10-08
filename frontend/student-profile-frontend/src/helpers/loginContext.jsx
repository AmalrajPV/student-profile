import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext(false);

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")) || false);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("login")));
    }, []);
    const login = (token) =>{
        setUser(true);
        localStorage.setItem("login", true);
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("refresh_token", token.refresh_token);
    }

    const logout = () =>{
        setUser(false);
        localStorage.removeItem("login", false);
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("access_token");
    }

    return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}
