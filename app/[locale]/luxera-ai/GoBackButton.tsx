"use client";

import { useRouter } from "next/navigation";
import { IoCloseCircle } from "react-icons/io5";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClickCapture={() => router.back()}>
      <IoCloseCircle size={40} />
    </div>
  );
};

export default GoBackButton;
