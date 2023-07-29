import { z } from "zod";
import { TRegister } from "../components/forms/register/schemaRegister";

export interface IUserContext {
  createUser: (data: TRegister) => Promise<void>;
  profile: IProfile | undefined;
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  readProfile: () => Promise<void>;
}

export const schemaProfile = z.object({
  email: z.string(),
  telephone: z.string(),
  full_name: z.string(),
});

export type IProfile = z.infer<typeof schemaProfile>;
