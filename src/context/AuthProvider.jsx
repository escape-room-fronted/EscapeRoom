import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [questions, setQuestions] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth, questions, setQuestions, numberQuestion, setNumberQuestion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
