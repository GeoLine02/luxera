"use client";

import { useRouter } from "next/navigation";
import { FaEarthAmericas } from "react-icons/fa6";

const FooterEnd = () => {
  const router = useRouter();

  return (
    <div className="bg-black py-4 flex flex-col gap-6 items-center justify-between text-warm-white px-11">
      <div className="flex gap-3 items-center">
        <FaEarthAmericas size={25} />
        <p>Georgia l English (US)</p>
      </div>
      <div className="text-center lg:ml-11">
        Copyright &copy; 2025 LUXERA GIFT , All Rights Reserved.
      </div>
      <div className="flex items-center gap-3">
        <span className="cursor-pointer" onClick={() => router.push("/terms")}>
          Terms of Use
        </span>
        <span
          className="cursor-pointer"
          onClick={() => router.push("/privacy")}
        >
          Privacy
        </span>
        <span className="cursor-pointer" onClick={() => router.push("/")}>
          Interest-based ads
        </span>
      </div>
    </div>
  );
};

export default FooterEnd;
