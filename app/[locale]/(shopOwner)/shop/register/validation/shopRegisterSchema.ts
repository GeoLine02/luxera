import { z } from "zod";

const shopRegisterSchema = z
  .object({
    shopName: z
      .string({
        required_error: "Shop name is required.",
      })
      .min(3, "Shop name must be at least 3 characters long.")
      .max(50, "Shop name must be less than 50 characters."),

    password: z
      .string({
        required_error: "Password is required.",
      })
      .min(8, "Password must be at least 8 characters long.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        "Password must include at least one uppercase letter, one lowercase letter, and one number."
      ),

    repeatPassword: z.string({
      required_error: "Please confirm your password.",
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match.",
    path: ["repeatPassword"], // this will attach the error to the repeatPassword field
  });

export type ShopRegisterSchema = z.infer<typeof shopRegisterSchema>;
export default shopRegisterSchema;
