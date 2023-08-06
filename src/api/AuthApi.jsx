import { BASE_URL } from "./base";

export const register = (data) => {
    return BASE_URL.post('users/', data);
  };

export const login = (data) => {
  return BASE_URL.post('login-user/', data)
}
