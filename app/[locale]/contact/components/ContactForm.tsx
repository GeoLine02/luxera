"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { ChangeEvent, FormEvent, useState } from "react";

type ContactFieldsType = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [contactFields, setContactFilds] = useState<ContactFieldsType>({
    email: "",
    message: "",
    name: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFilds((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // TODO: make API request here;
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full md:max-w-1/2">
      <div>
        <label
          className="text-sm text-medium-gray mb-1 inline-block"
          htmlFor="name"
        >
          სახელი
        </label>
        <Input
          id="name"
          onChange={onChange}
          value={contactFields.name}
          name="name"
          bgColor="lightGray"
        />
      </div>
      <div>
        <label
          className="text-sm text-medium-gray mb-1 inline-block"
          htmlFor="email"
        >
          ელ. ფოსტა
        </label>
        <Input
          id={"email"}
          value={contactFields.email}
          onChange={onChange}
          name="email"
          bgColor="lightGray"
          type="email"
        />
      </div>
      <div>
        <label
          className="text-sm text-medium-gray mb-1 inline-block"
          htmlFor="message"
        >
          შეტყობინება
        </label>
        <textarea
          value={contactFields.message}
          onChange={onChange}
          name="message"
          id="message"
          className="bg-light-gray rounded-xl block w-full min-h-[140px] p-2"
        ></textarea>
      </div>
      <Button
        rounded="lg"
        title="გაგზავნა"
        type="submit"
        bgColor="lightPink"
        className="py-2 font-medium hover:bg-pink-400 hover:text-white transition-colors duration-400"
      />
    </form>
  );
};

export default ContactForm;
