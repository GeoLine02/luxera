import { loginValidationSchema } from "../validation/login";
import api from "@/utils/axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginService = async (_prevState: any, formData: FormData) => {
  try {
    const fieldValues = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    const validatedFields = loginValidationSchema.safeParse(fieldValues);

    if (!validatedFields.success) {
      return {
        values: fieldValues,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const res = await api.post("/user/login", fieldValues);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
