import { ContactProvider } from "../contexts/contactContext";
import { LoginProvider } from "../contexts/loginContext";
import { UserProvider } from "../contexts/userContext";
import { Children } from "../interfaces/children";

export const Providers = ({ children }: Children) => {
  return (
    <LoginProvider>
      <UserProvider>
        <ContactProvider>{children}</ContactProvider>
      </UserProvider>
    </LoginProvider>
  );
};
