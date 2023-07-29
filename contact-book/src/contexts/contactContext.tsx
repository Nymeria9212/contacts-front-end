import { createContext, useEffect, useState } from "react";
import { Children } from "../interfaces/children";
import { IContactContext } from "../interfaces/contactContextInterface";
import {
  ContactResponse,
  IContact,
} from "../components/forms/addContact/schemaContact";
import { api } from "../services/api";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: Children) => {
  const [modalContact, setModalContact] = useState(false);
  const [contacts, setContacts] = useState<ContactResponse[]>([]);

  const createContact = async (data: IContact) => {
    try {
      const token = localStorage.getItem("@token");
      const response = await api.post("/contacts", data, {
        headers: { Authorization: "Bearer: " + token },
      });
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      const readContact = async () => {
        try {
          const response = await api.get<ContactResponse[]>("/contacts", {
            headers: { Authorization: "Bearer: " + token },
          });
          setContacts(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      readContact();
    }
  }, []);

  return (
    <ContactContext.Provider
      value={{ modalContact, setModalContact, createContact, contacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
