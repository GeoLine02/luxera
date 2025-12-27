import { UserSignInCredsType } from "@/app/types/user";
import { loginValidationSchema } from "../validation/login";
import api from "@/utils/axios";
import { AxiosError } from "axios";

export const loginService = async (userSignInCreds: UserSignInCredsType) => {
  const validatedFields = loginValidationSchema.safeParse(userSignInCreds);

  if (!validatedFields.success) {
    return {
      type: "validation",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await api.post("/user/login", userSignInCreds);
    return {
      type: "success",
      data: res.data,
    };
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as AxiosError<any>;

    if (err.response) {
      throw {
        type: "server",
        status: err.response.status,
        message: err.response.data?.message || "Something went wrong",
      };
    }

    throw {
      type: "network",
      message: "Network error. Please try again.",
    };
  }
};
