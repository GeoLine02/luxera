import Image from "next/image";
import LuxeraLogo from "@/public/LuxeraLogo.svg";
import AuthPoster from "@/public/AuthPoster.png";
import SignUpForm from "./SignUpForm";

const SignUpContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side (Logo + Poster) */}
      <div className="bg-light-pink w-full lg:w-1/2 flex justify-center pt-12">
        <div className="flex flex-col gap-20">
          <Image src={LuxeraLogo} alt="luxera logo" />
          <Image src={AuthPoster} alt="auth banner" />
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpContainer;
