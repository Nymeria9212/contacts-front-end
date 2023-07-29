import { z } from "zod";

export const schemaRegister = z.object({
  full_name: z.string(),
  email: z.string().email("Precisa ser um email válido"),
  telephone: z.string(),
  password: z.string(),
});

export type TRegister = z.infer<typeof schemaRegister>;
