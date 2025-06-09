"use client";

import { useRouter } from "next/navigation";

const AlreadyHaveAnAccount = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center">
      <p className="mt-[50px] mx-auto">
        Aldready have an account?{" "}
        <span
          onClick={() => router.push("/signin")}
          className="cursor-pointer font-bold text-black"
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default AlreadyHaveAnAccount;
