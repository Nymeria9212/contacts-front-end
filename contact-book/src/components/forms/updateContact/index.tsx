import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/contactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TContactUpdate,
  schemaPartialContact,
} from "../addContact/schemaContact";
import { ModalUpdate } from "./style";

export const ModalUpdateContact = () => {
  const { setModalUpdate, updateContact, currentContact } =
    useContext(ContactContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaPartialContact),
    defaultValues: {
      full_name: currentContact.full_name,
      email: currentContact.email,
      telephone: currentContact.telephone,
    },
  });

  const formContact = (data: TContactUpdate) => {
    updateContact(data, currentContact.id);
    setModalUpdate(false);
  };
  return (
    <ModalUpdate>
      <div>
        <button
          className="closeModalContact"
          onClick={() => {
            setModalUpdate(false);
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
    </ModalUpdate>
  );
};
