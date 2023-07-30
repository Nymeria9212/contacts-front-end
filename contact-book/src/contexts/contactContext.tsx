/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { Children } from "../interfaces/children";
import { IContactContext } from "../interfaces/contactContextInterface";
import {
  ContactResponse,
  IContact,
  TContactUpdate,
} from "../components/forms/addContact/schemaContact";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: Children) => {
  const [modalContact, setModalContact] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [contacts, setContacts] = useState<ContactResponse[]>([]);
  const [currentContact, setCurrentContact] = useState<ContactResponse>({
    id: 0,
    full_name: "Default",
    email: "default@gmail.com",
    telephone: "484141985965",
    data: "15/12/125",
  });

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

  const updateContact = async (data: TContactUpdate, id: number) => {
    try {
      const token = localStorage.getItem("@token");
      const response = await api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      });

      const newContact = contacts.filter((contact) => contact.id !== id);
      setContacts([...newContact, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: number) => {
    try {
      const token = localStorage.getItem("@token");
      const response = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: "Bearer: " + token,
        },
      });
      const newContact = contacts.filter((contact) => contact.id !== id);
      setContacts([...newContact]);
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
      value={{
        modalContact,
        setModalContact,
        createContact,
        contacts,
        updateContact,
        deleteContact,
        modalUpdate,
        setModalUpdate,
        currentContact,
        setCurrentContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
