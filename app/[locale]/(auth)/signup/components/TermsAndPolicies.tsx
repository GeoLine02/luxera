"use client";

import { useRouter } from "next/navigation";

const TermsAndPolicies = () => {
  const router = useRouter();

  return (
    <div>
      <p className="text-[#425466]">
        By creating an account means you agree with the{" "}
        <span
          onClick={() => router.push("/termns-end-policies")}
          className="cursor-pointer font-bold"
        >
          {" "}
          Terms and Conditions
        </span>
        , and our{" "}
        <span
          onClick={() => router.push("/termns-end-policies")}
          className="cursor-pointer font-bold"
        >
          Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default TermsAndPolicies;
