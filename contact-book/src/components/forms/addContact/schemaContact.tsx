import { z } from "zod";

export const schemaContact = z.object({
  full_name: z.string().nonempty("Precisa de um nome"),
  telephone: z.string().nonempty("Precisa de um telefone"),
  email: z.string().email("Precisa ser um email válido"),
});

export const schemaPartialContact = schemaContact.partial();

export type ContactResponse = {
  id: number;
  full_name: string;
  telephone: string;
  email: string;
  data: string;
};

export type TContacRequest = Omit<ContactResponse, "id" | "data">;
export type TContactUpdate = Partial<TContacRequest>;

export type IContact = z.infer<typeof schemaContact>;
