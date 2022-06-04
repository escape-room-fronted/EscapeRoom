import useAuth from "./useAuth";

export function useAuthLogin() {
  const { auth, setAuth, setNumberQuestion, setNumberSectionLogic } = useAuth();

  //   console.log(isLogin);
  const loginDataPersistent = () => {
    if (localStorage.getItem("user") && Object.keys(auth).length === 0) {
      const data = JSON.parse(localStorage.getItem("user"));
      setAuth(data);
      setNumberQuestion(JSON.parse(localStorage.getItem("dataNumberQuestion")));
      setNumberSectionLogic(
        JSON.parse(localStorage.getItem("dataNumberSection"))
      );
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuth({});
    setNumberQuestion(0);
    setNumberSectionLogic(1);
  };

  const isUserLogin = () => {
    return isLogin;
  };

  return { loginDataPersistent, logout, isUserLogin };
}
