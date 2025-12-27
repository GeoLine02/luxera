import api from "@/utils/axios";
import { registerValidationSchema } from "../validation/signUp";
import { UserRegisterCredsType } from "@/app/types/user";

export async function registerService(
  userRegisterCreds: UserRegisterCredsType
) {
  const validatedFields = registerValidationSchema.safeParse(userRegisterCreds);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const res = await api.post("/user/register", userRegisterCreds);

    if (res.status === 201) {
      const data = await res.data;
      return data;
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
}
