import { createContext } from "react";
import { useState } from "react";
import { Children } from "../interfaces/children";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }: Children) => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <LoginContext.Provider value={{ setLogin, login, register, setRegister }}>
      {children}
    </LoginContext.Provider>
  );
};
