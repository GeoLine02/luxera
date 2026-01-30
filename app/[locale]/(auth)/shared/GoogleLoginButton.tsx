"use client";

import { FaGoogle } from "react-icons/fa";

const GoogleLoginButon = () => {
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:4000/auth/google/login";
  };

  return (
    <section className="flex items-center justify-center">
      <button
        onClick={loginWithGoogle}
        className="p-3 rounded-full border border-light-gray cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <FaGoogle />
      </button>
    </section>
  );
};

export default GoogleLoginButon;
