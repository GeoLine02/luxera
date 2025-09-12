import Image from "next/image";
import SignInForm from "./SignInForm";
import AuthPoster from "@/public/AuthPoster.png";
import LuxeraLogo from "@/public/LuxeraLogo.svg";

const SignInContainer = () => {
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
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInContainer;
