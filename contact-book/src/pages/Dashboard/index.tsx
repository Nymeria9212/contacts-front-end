import { useContext } from "react";
import { ButtonsDashboard } from "../../components/buttons/buttonsDashboard";
import { ProfileUser } from "../../components/cards/cardProfile";
import { Header } from "../../components/header";
import { WallpaperDivPage } from "../../components/wallpaper";
import { UserContext } from "../../contexts/userContext";
import { ContactContext } from "../../contexts/contactContext";
import { FormCreateContact } from "../../components/forms/addContact/formCreateContact";
import { CardContact } from "../../components/cards/cardContact/cardAddContact";
import { MainPag } from "./style";
import { ModalUpdateContact } from "../../components/forms/updateContact";
import { UpdateUserModal } from "../../components/forms/updateUser";

export const Dashboard = () => {
  const { modalContact, contacts, modalUpdate } = useContext(ContactContext);
  const { modalUpdateUser } = useContext(UserContext);
  return (
    <MainPag>
      <Header children={<ButtonsDashboard />} />
      <div className="box-conteiner">
        <ProfileUser />

        <ul>
          {contacts.map((contact) => (
            <CardContact
              key={contact.id}
              id={contact.id}
              full_name={contact.full_name}
              email={contact.email}
              telephone={contact.telephone}
              data={contact.data}
            />
          ))}
        </ul>
      </div>
      {modalContact === true ? <FormCreateContact /> : null}
      {modalUpdate === true ? <ModalUpdateContact /> : null}
      {modalUpdateUser === true ? <UpdateUserModal /> : null}
      <WallpaperDivPage />
    </MainPag>
  );
};
