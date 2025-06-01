"use client";

// import { useActionState } from "react";
// import { signUp } from "../services/signUp";
import Image from "next/image";
import LuxeraLogo from "@/public/LuxeraLogo.svg";
import AuthPoster from "@/public/AuthPoster.png";
import SignUpForm from "./SignUpForm";

const SignUpContainer = () => {
  // const [state, formAction] = useActionState(signUp null);

  return (
    <div>
      <div className="flex">
        <div className="bg-light-pink h-screen w-1/2 flex justify-center">
          <div className="space-y-[132px] mt-[102px]">
            <Image src={LuxeraLogo} alt="luxera logo" />
            <Image src={AuthPoster} alt="auth banner" />
          </div>
        </div>
        <div className="h-screen w-1/2 flex items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
