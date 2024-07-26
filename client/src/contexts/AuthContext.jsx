import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin, useRegister, useLogout } from '../hooks/useAuth';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage("user",{});
    const login = useLogin();
    const register = useRegister();
    const logout = useLogout();
    
    const onLogin = async ({email, password}) => {
        let newUser = {};
        try {
            newUser = await login(email,password)
        }
        catch(err) {
            return alert(err.massage)
        }
        setUser(newUser);
        navigate('/');
    };

    const onRegister = async ({email, password, confPassword, username}) => {
        let newUser = {};
        try {
            if (confPassword !== password) {
                throw new Error ("Passwords don't match!")
            };

            newUser = await register(email, password, username);
            
        } catch (error) {
            return alert(error.message);
        }
        setUser(newUser);
        navigate('/');
    };

    const onLogout = async () => {
        try {
            await logout();
        } catch (error) {
        }
        setUser({});
        localStorage.clear();
    };

    const authContextValues = {
        onLogin,
        onRegister,
        onLogout,
        email: user.email,
        productOwner: user._id,
        userName: user.username,
        token: user.accessToken,
        isAuthenticated: !!user.accessToken,
    }
    
    return (
        <>
            <AuthContext.Provider value={authContextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}