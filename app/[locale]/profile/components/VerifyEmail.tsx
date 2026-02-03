"use client";

import { useUser } from "@/app/providers/UserProvider";
import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { sendCodeService, verifyEmail } from "../services/email";
import { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const VerifyEmail = () => {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleSendCode = async () => {
    const res = await sendCodeService();
    setMessage(res.message);
  };

  const handleVerifyEmail = async () => {
    const res = await verifyEmail(code);
    setVerificationMessage(res.message);
  };

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Email verification</h1>

      {user?.email_verified ? (
        <p className="text-green-600 font-medium flex gap-2">
          <MdOutlineMarkEmailRead size={25} />
          Email is verified ✅
        </p>
      ) : (
        <>
          <Button
            onClick={handleSendCode}
            className="max-w-fit py-2 px-4"
            rounded="md"
            title="Get verification code"
            type="button"
            bgcolor="black"
            titleColor="white"
          />

          <p className="text-sm text-green-500">
            <MdOutlineMarkEmailRead size={25} />
            {message}
          </p>

          <div className="flex gap-2">
            <Input
              onChange={(e) => setCode(e.target.value)}
              name="code"
              placeholder="Enter code"
              className="max-w-[130px]"
            />
            <Button
              onClick={handleVerifyEmail}
              rounded="md"
              title="Verify"
              type="button"
              bgcolor="black"
              titleColor="white"
              className="py-2 px-6 max-w-fit"
            />
          </div>

          <p className="text-sm font-medium text-green-500">
            {verificationMessage}
          </p>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
