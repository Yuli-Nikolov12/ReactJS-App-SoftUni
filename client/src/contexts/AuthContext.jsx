import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from '../hooks/useAuth';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const login = useLogin();
    
    const onLogin = async ({email, password}) => {
        let newUser = {};
        try {
            newUser = await login(email,password)
        }
        catch(err) {
            console.log(err.massage)
        }
        setUser(newUser);
        navigate('/');
    };

    const authContextValues = {
        onLogin,
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