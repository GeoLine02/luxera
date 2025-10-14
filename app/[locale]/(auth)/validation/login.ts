import { z } from "zod";

export const loginValidationSchema = z.object({
<<<<<<< HEAD
  email: z.string().min(1, "Email is required").email("Invalid email address"),
=======
  email: z.string().min(1, "Email or phone is required"),
>>>>>>> 07de716efb37bb364e84ea9282f48e194e625c46
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be less than 100 characters"),
});

export type LoginFormInputs = z.infer<typeof loginValidationSchema>;
