"use client";

import { useRouter } from "next/navigation";

const DontHaveAccount = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center">
      <p className="mt-[50px] mx-auto">
        Don’t have an account?{" "}
        <span
          onClick={() => router.push("/signup")}
          className="cursor-pointer font-bold text-black"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default DontHaveAccount;
