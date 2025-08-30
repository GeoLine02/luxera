"use server";

import Image from "next/image";
import LuxeraLogo from "@/public/LuxeraLogo.svg";
import AuthPoster from "@/public/AuthPoster.png";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
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
