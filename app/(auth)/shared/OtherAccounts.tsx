"use client";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const OtherAccounts = () => {
  return (
    <section className="flex items-center justify-center gap-4">
      <div className="p-3 rounded-full border border-light-gray cursor-pointer">
        <FaGoogle />
      </div>
      <div className="p-3 rounded-full border border-light-gray cursor-pointer">
        <FaFacebookF />
      </div>
    </section>
  );
};

export default OtherAccounts;
