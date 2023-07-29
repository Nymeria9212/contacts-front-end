import {
  ContactResponse,
  IContact,
} from "../components/forms/addContact/schemaContact";

export interface IContactContext {
  setModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  modalContact: boolean;
  createContact: (data: IContact) => Promise<void>;
  contacts: ContactResponse[];
}
