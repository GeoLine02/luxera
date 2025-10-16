import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().min(1, "Email or phone is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be less than 100 characters"),
});

export type LoginFormInputs = z.infer<typeof loginValidationSchema>;
