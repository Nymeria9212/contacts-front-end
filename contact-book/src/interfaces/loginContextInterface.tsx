import { TLogin } from "../components/forms/login/schemaLogin";

export interface IContextLogin {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  login: boolean;
  register: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (data: TLogin) => Promise<void>;
}
