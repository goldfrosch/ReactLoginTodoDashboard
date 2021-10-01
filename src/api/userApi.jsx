import axios from "./defaultClient";

export const login = (userinfo) => {
  return axios.post("/auth/login", userinfo, { withCredentials: true });
};

export const logout = () => {
  return axios.post("/logout", {}, { withCredentials: true });
};

export const getUserInfo = () => {
  return axios.get("/profile", { withCredentials: true });
};
