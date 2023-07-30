import { createContext } from "react";
import { useState } from "react";
import { Children } from "../interfaces/children";
import { IContextLogin } from "../interfaces/loginContextInterface";
import { TLogin } from "../components/forms/login/schemaLogin";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
export const LoginContext = createContext({} as IContextLogin);

export const LoginProvider = ({ children }: Children) => {
  const [login, setLogin] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIn = async (data: TLogin) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginContext.Provider
      value={{ setLogin, login, register, setRegister, signIn }}
    >
      {children}
    </LoginContext.Provider>
  );
};
