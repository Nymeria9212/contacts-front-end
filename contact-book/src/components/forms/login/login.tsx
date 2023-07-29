import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ModalLogin } from "./style";
import { useForm } from "react-hook-form";
import { TLogin, schemaLogin } from "./schemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormLogin = () => {
  const { setLogin, setRegister, signIn } = useContext(LoginContext);
  const { handleSubmit, register } = useForm<TLogin>({
    resolver: zodResolver(schemaLogin),
  });

  const formUserLogin = (data: TLogin) => {
    signIn(data);
  };
  return (
    <ModalLogin>
      <div>
        <button
          className="closeModal"
          onClick={() => {
            setLogin(false);
          }}
        >
          X
        </button>
        <form onSubmit={handleSubmit(formUserLogin)}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register("password")} />

          <p
            onClick={() => {
              setLogin(false);
              setRegister(true);
            }}
          >
            Ainda não tem cadastro?Cadastre-se aqui!
          </p>

          <button>Entrar</button>
        </form>
      </div>
    </ModalLogin>
  );
};
