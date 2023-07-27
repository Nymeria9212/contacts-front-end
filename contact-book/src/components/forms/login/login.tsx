import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";

export const FormLogin = () => {
  const { setLogin } = useContext(LoginContext);
  return (
    <div>
      <button onClick={() => setLogin(false)}>X</button>
      <form>
        <label htmlFor="full_name">Nome completo:</label>
        <input type="text" id="full_name" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />

        <label htmlFor="telephone">Telefone</label>
        <input type="text" id="telephone" />

        <button>Entrar</button>
      </form>
    </div>
  );
};
