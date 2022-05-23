import { useState } from "react";
import useAuth from "./useAuth";

export function useAuthLogin() {
  const { auth, setAuth } = useAuth();

  //   console.log(isLogin);
  const loginDataPersistent = () => {
    if (localStorage.getItem("user") && Object.keys(auth).length === 0) {
      const data = JSON.parse(localStorage.getItem("user"));
      setAuth(data);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth({});
  };

  const isUserLogin = () => {
    return isLogin;
  };

  return { loginDataPersistent, logout, isUserLogin };
}
