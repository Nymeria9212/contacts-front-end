import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ContactContext } from "../../../contexts/contactContext";

export const ButtonsDashboard = () => {
  const { setShowProfile, readProfile } = useContext(UserContext);
  const { setModalContact } = useContext(ContactContext);
  return (
    <div>
      <button
        onClick={() => {
          readProfile();
          setShowProfile(true);
        }}
      >
        Perfil
      </button>
      <button
        onClick={() => {
          setModalContact(true);
        }}
      >
        Criar contato
      </button>
      <button>Sair</button>
    </div>
  );
};
