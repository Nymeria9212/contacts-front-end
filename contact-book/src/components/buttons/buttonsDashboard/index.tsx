import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ContactContext } from "../../../contexts/contactContext";

export const ButtonsDashboard = () => {
  const { setModalContact } = useContext(ContactContext);
  const { exit } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          setModalContact(true);
        }}
      >
        Criar contato
      </button>
      <button onClick={() => exit()}>Sair</button>
    </div>
  );
};
