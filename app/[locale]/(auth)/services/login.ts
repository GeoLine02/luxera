import { UserSignInCredsType } from "@/app/types/user";
import { loginValidationSchema } from "../validation/login";
import api from "@/utils/axios";

export const loginService = async (userSignInCreds: UserSignInCredsType) => {
  try {
    const validatedFields = loginValidationSchema.safeParse(userSignInCreds);
    console.log(validatedFields.error?.flatten().fieldErrors);
    if (!validatedFields.success) {
      return {
        values: userSignInCreds,
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const res = await api.post("/user/login", userSignInCreds);

    return {
      data: res.data,
      success: true,
    };
  } catch (error) {
    console.log(error);
  }
};
