import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [questions, setQuestions] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState();
  const [numberSectionLogic, setNumberSectionLogic] = useState();
  const [timeCounter, setTimeCounter] = useState();

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        questions,
        setQuestions,
        numberQuestion,
        setNumberQuestion,
        numberSectionLogic,
        setNumberSectionLogic,
        timeCounter,
        setTimeCounter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
