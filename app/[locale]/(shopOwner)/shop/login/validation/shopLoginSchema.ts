import { z } from "zod";

const shopLoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Please enter a valid email address."),

  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(8, "Password must be at least 8 characters long.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must include at least one uppercase letter, one lowercase letter, and one number."
    ),
});

export type ShopLoginSchema = z.infer<typeof shopLoginSchema>;
export default shopLoginSchema;
