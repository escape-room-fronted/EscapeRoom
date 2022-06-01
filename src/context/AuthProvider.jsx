import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const [questions, setQuestions] = useState([]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, questions, setQuestions }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
