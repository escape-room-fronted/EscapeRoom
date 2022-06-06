import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [questions, setQuestions] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [numberSectionLogic, setNumberSectionLogic] = useState(1);
  const [timeCounter, setTimeCounter] = useState({
    minutes: 0,
    seg: 0,
  });

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
