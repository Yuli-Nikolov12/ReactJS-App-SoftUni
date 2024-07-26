import { login, register, logout } from "../api/auth-api"

export const useLogin = () => {
    const loginHandler = async (email, password) => await login(email, password);

    return loginHandler;
}

export const useRegister = () => {
    const registerHandler = async (email, password, username) => await register(email, password, username);

    return registerHandler;
}

export const useLogout = () => {
    const logoutHandler = async () => await logout();

    return logoutHandler;
}