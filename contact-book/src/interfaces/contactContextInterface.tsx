import {
  ContactResponse,
  IContact,
  TContactUpdate,
} from "../components/forms/addContact/schemaContact";

export interface IContactContext {
  setModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  modalContact: boolean;
  createContact: (data: IContact) => Promise<void>;
  contacts: ContactResponse[];
  updateContact: (data: TContactUpdate, id: number) => Promise<void>;
  deleteContact: (id: number) => Promise<void>;
  modalUpdate: boolean;
  setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  currentContact: ContactResponse;
  setCurrentContact: React.Dispatch<React.SetStateAction<ContactResponse>>;
}
