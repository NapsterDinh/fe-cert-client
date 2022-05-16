import { _get, _post, _delete, _put } from "./apis";

// APIS
export const getAllUsers = (data) => {
  return _get("/api/v1/user");
};

export const login = (data) => {
  return _post("/api/v1/user/login", data);
};

export const loginByGoogle = (data) => {
  return _post("/api/v1/user/google_login", data);
};

export const loginByFacebook = (data) => {
  return _post("/api/v1/user/facebook_login", data);
};

export const register = (data) => {
  return _post("/api/v1/user/register", data);
};

export const logout = (data) => {
  return _post("/api/v1/user/logout", data);
};

export const forgotPass = (data) => {
  return _post("/api/v1/user/forgot-password", data);
};

export const resetPass = (data) => {
  return _post("/api/v1/user/reset-password", data);
};

export const deleteUser = (data) => {
  return _delete("/api/v1/user");
};