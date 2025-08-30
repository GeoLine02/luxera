"use server";
import Image from "next/image";
import LuxeraLogo from "@/public/LuxeraLogo.svg";
import AuthPoster from "@/public/AuthPoster.png";
import SignUpForm from "./components/SignUpForm";
// import { registerValidationSchema } from "../validation/signUp";

const SignUp = () => {
  // async function signUp(
  //   _prevState: unknown,
  //   formData: FormData
  // ): Promise<unknown> {

  //   const rawData = {
  //     fullName: formData.get("fullName"),
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //     confirmPassword: formData.get("confirmPassword"),
  //   };

  //   // Validate with zod
  //   const parsed = registerValidationSchema.safeParse(rawData);

  //   if (!parsed.success) {
  //     return {
  //       success: false,
  //       errors: parsed.error.flatten().fieldErrors,
  //     };
  //   }

  //   try {
  //     await registerService(parsed.data);
  //   } catch {
  //     return { success: false, message: "Something went wrong" };
  //   }
  // }

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side (Logo + Poster) */}
        <div className="md:bg-light-pink w-full lg:w-1/2 flex md:justify-center p-4 mt:pt-12">
          <div className="flex flex-col gap-20">
            <Image src={LuxeraLogo} alt="luxera logo" />
            <Image
              className="hidden md:block"
              src={AuthPoster}
              alt="auth banner"
            />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
