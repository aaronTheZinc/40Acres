import { z } from "zod";

export const RegisterInputSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  password: z.string(),
});

export type TRegisterInput = z.infer<typeof RegisterInputSchema>;

export const LoginInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TLoginInput = z.infer<typeof LoginInputSchema>;
