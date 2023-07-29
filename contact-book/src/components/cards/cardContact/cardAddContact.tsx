import { ContactResponse } from "../../forms/addContact/schemaContact";
import { CardContactStyle } from "../cardContact/style";

export const CardContact = (contact: ContactResponse) => {
  return (
    <CardContactStyle>
      <div>
        <h2>Nome: {contact.full_name} </h2>
        <p>Telefone: {contact.telephone} </p>
        <p>Email: {contact.email}</p>
      </div>
      <div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </CardContactStyle>
  );
};
