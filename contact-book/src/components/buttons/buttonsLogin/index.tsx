import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";

export const ButtonsLogin = () => {
  const { setLogin, setRegister } = useContext(LoginContext);
  return (
    <div>
      <button
        onClick={() => {
          setLogin(true);
          setRegister(false);
        }}
      >
        Entrar
      </button>
      <button
        onClick={() => {
          setRegister(true);
          setLogin(false);
        }}
      >
        Cadastrar
      </button>
    </div>
  );
};
