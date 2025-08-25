"use client";

import { FaGoogle } from "react-icons/fa";

const OtherAccounts = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="p-3 rounded-full border border-light-gray cursor-pointer">
        <FaGoogle />
      </div>
    </section>
  );
};

export default OtherAccounts;
