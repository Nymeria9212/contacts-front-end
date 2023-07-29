import { z } from "zod";

export const schemaContact = z.object({
  full_name: z.string().nonempty("Precisa de um nome"),
  telephone: z.string().nonempty("Precisa de um telefone"),
  email: z.string().email("Precisa ser um email válido"),
});

export type ContactResponse = {
  id: number;
  full_name: string;
  telephone: string;
  email: string;
  data: string;
};

export type IContact = z.infer<typeof schemaContact>;
