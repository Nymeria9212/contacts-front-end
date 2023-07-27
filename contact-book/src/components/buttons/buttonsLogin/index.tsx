import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";

export const ButtonsLogin = () => {
  const { setLogin, setRegister } = useContext(LoginContext);
  return (
    <div>
      <button onClick={() => setLogin(true)}>Entrar</button>
      <button onClick={() => setRegister(true)}>Cadastrar</button>
    </div>
  );
};
