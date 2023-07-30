import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ModalProfile } from "./style";

export const ProfileUser = () => {
  const { profile, setModalUpdateUser, deleteUser } = useContext(UserContext);
  return (
    <ModalProfile>
      <div className="cardProfile">
        <div>
          <h2>Nome completo:</h2>
          <h3>{profile?.full_name}</h3>

          <h2>Email:</h2>
          <span>{profile?.email}</span>
          <h2>Telefone</h2>
          <span>{profile?.telephone} </span>
        </div>
        <div>
          <button
            onClick={() => {
              setModalUpdateUser(true);
            }}
          >
            Editar perfil
          </button>
          <button onClick={() => deleteUser()}>Excluir perfil</button>
        </div>
      </div>
    </ModalProfile>
  );
};
