import { ContactProvider } from "../contexts/contactContext";
import { LoginProvider } from "../contexts/loginContext";
import { Children } from "../interfaces/children";

export const Providers = ({ children }: Children) => {
  return (
    <LoginProvider>
      <ContactProvider>{children}</ContactProvider>;
    </LoginProvider>
  );
};
