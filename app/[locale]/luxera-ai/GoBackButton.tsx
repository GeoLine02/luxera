"use client";

import { useRouter } from "next/navigation";
import { IoCloseCircle } from "react-icons/io5";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer text-white"
      onClickCapture={() => router.back()}
    >
      <IoCloseCircle size={35} />
    </div>
  );
};

export default GoBackButton;
