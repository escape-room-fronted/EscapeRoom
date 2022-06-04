import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [questions, setQuestions] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState();
  const [numberSectionLogic, setNumberSectionLogic] = useState();

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
