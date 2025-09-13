"use client";

import { FaGoogle } from "react-icons/fa";
import { initiateGoogleAuth } from "../services/googleAuth";

const OtherAccounts = () => {
  const handleGoogleLogin = () => {
    initiateGoogleAuth();
  };

  return (
    <section className="flex items-center justify-center">
      <div 
        className="p-3 rounded-full border border-light-gray cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={handleGoogleLogin}
      >
        <FaGoogle />
      </div>
    </section>
  );
};

export default OtherAccounts;
