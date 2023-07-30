import { z } from "zod";
import { TRegister } from "../components/forms/register/schemaRegister";

export interface IUserContext {
  createUser: (data: TRegister) => Promise<void>;
  profile: IProfile | undefined;
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: (data: TProfileUpdate) => Promise<void>;
  modalUpdateUser: boolean;
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => Promise<void>;
  exit: () => void;
}

export const schemaProfile = z.object({
  email: z.string(),
  telephone: z.string(),
  full_name: z.string(),
});

export const schemaProfilePartial = schemaProfile.partial();

export type IProfile = z.infer<typeof schemaProfile>;
export type TProfileUpdate = z.infer<typeof schemaProfilePartial>;
