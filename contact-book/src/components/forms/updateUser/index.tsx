import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  TProfileUpdate,
  schemaProfilePartial,
} from "../../../interfaces/userContextInterface";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ModalUpdateUserStyle } from "./style";

export const UpdateUserModal = () => {
  const { profile, updateUser, setModalUpdateUser } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaProfilePartial),
    defaultValues: {
      full_name: profile?.full_name,
      email: profile?.email,
      telephone: profile?.telephone,
    },
  });

  const formUpdate = (data: TProfileUpdate) => {
    updateUser(data);
    setModalUpdateUser(false);
  };

  return (
    <ModalUpdateUserStyle>
      <div>
        <h3>Editar perfil</h3>
        <button
          className="closeModal"
          onClick={() => {
            setModalUpdateUser(false);
          }}
        >
          X
        </button>
        <form onSubmit={handleSubmit(formUpdate)}>
          <label htmlFor="full_name">Nome completo:</label>
          <input type="text" id="full_name" {...register("full_name")} />
          <p>{errors.full_name?.message}</p>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message} </p>
          <label htmlFor="telephone">Telefone:</label>
          <input type="text" id="telephone" {...register("telephone")} />
          <p>{errors.telephone?.message} </p>
          <button type="submit">Editar</button>
        </form>
      </div>
    </ModalUpdateUserStyle>
  );
};
