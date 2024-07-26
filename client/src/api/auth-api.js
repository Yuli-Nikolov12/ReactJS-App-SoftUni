import * as request from "./requester"

const BASE_URL = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${BASE_URL}/login`, {email, password});

export const register = (email, password, username) => request.post(`${BASE_URL}/register`, {email, password, username});

export const logout = () => request.post(`${BASE_URL}/logout`);