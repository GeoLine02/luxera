"use client";

import Image from "next/image";
import SignInForm from "./SignInForm";
import AuthPoster from "@/public/AuthPoster.png";
import LuxeraLogo from "@/public/LuxeraLogo.svg";
import { useActionState } from "react";
import { signIn } from "../services/signIn";

const SignInContainer = () => {
  const [state, formAction] = useActionState(signIn, null);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side */}
      <div className="md:bg-light-pink w-full lg:w-1/2 flex md:justify-center items-center p-4 md:pb-32">
        <div className="flex flex-col gap-20">
          <Image src={LuxeraLogo} alt="luxera logo" />
          <Image
            className="hidden md:block"
            src={AuthPoster}
            alt="auth banner"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <SignInForm formAction={formAction} state={state} />
      </div>
    </div>
  );
};

export default SignInContainer;
