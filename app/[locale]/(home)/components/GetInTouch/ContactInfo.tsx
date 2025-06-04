"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { ChangeEvent, useState } from "react";

const ContactInfo = () => {
  const [email, setEmail] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex items-center gap-10">
      <Input
        value={email}
        onChange={onChange}
        bgColor="lightGray"
        name="email"
        placeholder="Your email"
      />
      <Button
        rounded="full"
        title="Subscribe"
        type="button"
        bgColor="black"
        titleColor="white"
        className="py-2 px-6 flex items-center justify-center !w-fit font-semibold"
      />
    </div>
  );
};

export default ContactInfo;
