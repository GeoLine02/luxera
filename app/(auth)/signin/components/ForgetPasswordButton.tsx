"use client";

import { useRouter } from "next/navigation";

const ForgetPasswordButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <span
        onClick={() => router.push("/forget-password")}
        className="text-medium-gray cursor-pointer"
      >
        Forget Password?
      </span>
    </div>
  );
};

export default ForgetPasswordButton;
