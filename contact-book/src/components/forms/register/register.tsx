import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { ModalRegister } from "./style";
import { useForm } from "react-hook-form";
import { TRegister, schemaRegister } from "./schemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../contexts/userContext";

export const FormRegister = () => {
  const { setRegister } = useContext(LoginContext);
  const { createUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(schemaRegister),
  });

  const createForm = (data: TRegister) => {
    createUser(data);
  };
  return (
    <ModalRegister>
      <div>
        <button className="closeModal" onClick={() => setRegister(false)}>
          X
        </button>

        <form onSubmit={handleSubmit(createForm)}>
          <h2>Cadastrar</h2>
          <label htmlFor="full_name">Nome completo:</label>
          <input type="text" id="full_name" {...register("full_name")} />
          <p>{errors.full_name?.message} </p>

          <label htmlFor="telephone">Telefone</label>
          <input type="text" id="telephone" {...register("telephone")} />
          <p>{errors.telephone?.message}</p>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <button>Cadastrar</button>
        </form>
      </div>
    </ModalRegister>
  );
};
