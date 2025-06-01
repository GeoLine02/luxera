import { FiPhone } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import AppStoreImage from "@/public/AppStorreImage.png";
import GooglePlayImage from "@/public/GooglePlayImage.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="space-y-6 flex flex-col justify-center items-center">
      <div className="flex items-center gap-2">
        <div className="bg-warm-white/50 rounded-xl p-2">
          <FiPhone size={25} />
        </div>
        <div className="bg-warm-white/50 rounded-xl p-2">
          <RiFacebookCircleLine size={25} />
        </div>
        <div className="bg-warm-white/50 rounded-xl p-2">
          <FaInstagram size={25} />
        </div>
      </div>
      <div className="space-y-6 flex flex-col justify-center items-center">
        <h1 className="font-semibold">Get the app</h1>
        <div className="flex items-center gap-8">
          <Image src={AppStoreImage} alt="App store link" />
          <Image src={GooglePlayImage} alt="Google play link" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
