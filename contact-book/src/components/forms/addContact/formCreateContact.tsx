import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IContact, schemaContact } from "./schemaContact";
import { ModalContact } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contactContext";

export const FormCreateContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaContact),
  });

  const { setModalContact, createContact } = useContext(ContactContext);

  const formContact = (data: IContact) => {
    createContact(data);
    setModalContact(false);
  };
  return (
    <ModalContact>
      <div>
        <button
          className="closeModalContact"
          onClick={() => {
            setModalContact(false);
          }}
        >
          X
        </button>
        <form onSubmit={handleSubmit(formContact)}>
          <label htmlFor="full_name">Nome completo:</label>
          <input type="text" id="full_name" {...register("full_name")} />
          <p>{errors.full_name?.message}</p>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="telephone">Telefone:</label>
          <input type="text" id="telephone" {...register("telephone")} />
          <p>{errors.telephone?.message}</p>

          <button type="submit">Criar</button>
        </form>
      </div>
    </ModalContact>
  );
};
