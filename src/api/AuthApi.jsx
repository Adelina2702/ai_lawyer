import { BASE_URL } from "./base";

export const register = (data) => {
    return BASE_URL.post('users/', data);
  };