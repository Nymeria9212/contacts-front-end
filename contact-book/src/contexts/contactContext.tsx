import { createContext } from "react";
import { Children } from "../interfaces/children";

const ContactContext = createContext({});

export const ContactProvider = ({ children }: Children) => {
  return (
    <ContactContext.Provider value={{}}>{children}</ContactContext.Provider>
  );
};
