import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="w-full space-y-4 md:max-w-1/2 md:px-8">
      <div className="space-y-2">
        <h1 className="text-lg font-medium md:text-2xl">
          საკონტაქტო ინფორმაცია
        </h1>
        <p className="text-sm text-medium-gray md:text-base">
          შეავსეთ ფორმა ან დაგვიკავშირდით პირდაპირ. ჩვენ შევეცდებით გიპასუხოთ
          რაც შეიძლება მალე
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-2 items-center">
          <div className="bg-light-pink rounded-xl p-3">
            <FaEnvelope size={20} />
          </div>
          <div className="space-y-0.5">
            <p>ელ. ფოსტა</p>
            <p>contact@luxeragift.ge</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-light-pink rounded-xl p-3">
            <FiPhone size={20} />
          </div>
          <div className="space-y-0.5">
            <p>ტელეფონი</p>
            <p>+995 123 456</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-light-pink rounded-xl p-3">
            <FaFacebook size={20} />
          </div>
          <div className="space-y-0.5">
            <p>ფეისბუქი</p>
            <p>facebook.com/luxeragift</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
