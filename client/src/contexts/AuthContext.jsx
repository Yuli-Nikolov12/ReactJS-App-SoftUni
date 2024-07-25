import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin, useRegister } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const login = useLogin();
    const register = useRegister();
    
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

    const onRegister = async ({email, password, confPassword}) => {
        let newUser = {};
        try {
            if (confPassword !== password) {
                throw new Error ("Passwords don't match!")
            };

            newUser = await register(email, password);
            
        } catch (error) {
            return alert(error.message);
        }
        setUser(newUser);
        navigate('/');
    };

    const authContextValues = {
        onLogin,
        onRegister,
        email: user.email,
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