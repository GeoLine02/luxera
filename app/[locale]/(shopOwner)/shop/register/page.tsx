import Image from "next/image";
import CreateShopImage from "@/public/CreateShop.png";
import RegisterForm from "./components/RegisterForm";
const ShopRegister = () => {
  return (
    <div className="flex">
      <div className="hidden bg-light-pink h-screen justify-center items-center w-1/2 md:flex">
        <Image src={CreateShopImage} alt="" />
      </div>
      <div className="flex h-screen md:justify-center p-4 md:items-center md:w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
};

export default ShopRegister;
