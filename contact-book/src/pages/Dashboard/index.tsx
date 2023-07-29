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

export const Dashboard = () => {
  const { showProfile } = useContext(UserContext);
  const { modalContact, contacts } = useContext(ContactContext);
  return (
    <MainPag>
      <Header children={<ButtonsDashboard />} />
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
      {showProfile === true ? <ProfileUser /> : null}
      {modalContact === true ? <FormCreateContact /> : null}
      <WallpaperDivPage />
    </MainPag>
  );
};
