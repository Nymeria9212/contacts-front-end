import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TLogin = z.infer<typeof schemaLogin>;
