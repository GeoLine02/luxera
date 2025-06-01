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
    <div className="flex">
      <div className="bg-light-pink h-screen w-1/2 flex justify-center">
        <div className="space-y-[132px] mt-[102px]">
          <Image src={LuxeraLogo} alt="luxera logo" />
          <Image src={AuthPoster} alt="auth banner" />
        </div>
      </div>
      <div className="h-screen w-1/2 flex items-center justify-center">
        <SignInForm formAction={formAction} state={state} />
      </div>
    </div>
  );
};

export default SignInContainer;
