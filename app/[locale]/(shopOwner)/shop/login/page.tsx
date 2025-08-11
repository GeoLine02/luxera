import Image from "next/image";
import ShopLoginImage from "@/public/CreateShop.png";
import LoginForm from "./components/LoginForm";

const ShopSignIn = () => {
  return (
    <div className="flex">
      <div className="hidden bg-light-pink w-1/2 justify-center items-center md:flex h-screen">
        <Image src={ShopLoginImage} alt="" />
      </div>
      <div className="flex justify-center w-full items-center px-4 h-screen md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default ShopSignIn;
