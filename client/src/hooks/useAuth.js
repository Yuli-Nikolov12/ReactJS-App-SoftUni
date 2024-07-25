import { login, register } from "../api/auth-api"

export const useLogin = () => {
    const loginHandler = async (email, password) => await login(email, password);

    return loginHandler;
}

export const useRegister = () => {
    const registerHandler = async (email, password) => await register(email, password);

    return registerHandler;
}