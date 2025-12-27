"use client";

import Input from "@/app/ui/Input";
import Button from "@/app/ui/Button";
import OtherAccounts from "../../shared/OtherAccounts";
import AlreadyHaveAnAccount from "./AlreadyHaveAnAccount";
import TermsAndPolicies from "./TermsAndPolicies";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerService } from "../../services/register";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { UserRegisterCredsType } from "@/app/types/user";
import { useUser } from "@/app/providers/UserProvider";
import api from "@/utils/axios";

const SignUpForm = () => {
  const [userCreds, setUserCreds] = useState<UserRegisterCredsType>({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUser();
  const router = useRouter();

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await registerService(userCreds);
      console.log(res);
      if (res.data && res.success) {
        setUser(res.data.user);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[424px] w-full space-y-[57px]">
      <div className="space-y-[12px] mb-6 md:mb-[54px]">
        <h1 className="text-3xl font-semibold text-dark-gray">
          Create your account
        </h1>
        <p className="text-dark-gray">It’s free and easy</p>
      </div>

      <form className="space-y-[30px] text-medium-gray" onSubmit={handleSignUp}>
        <div className="space-y-3">
          <Input
            labelColor="darkGray"
            bgcolor="lightGray"
            label="Full Name"
            name="fullName"
            type="text"
            value={userCreds.fullName}
            placeholder="Enter your name"
            onChange={onchange}
          />
          <Input
            labelColor="darkGray"
            bgcolor="lightGray"
            label="E-mail or phone number"
            name="email"
            type="email"
            value={userCreds.email}
            placeholder="Type your e-mail or phone number"
            onChange={onchange}
          />
          <Input
            labelColor="darkGray"
            bgcolor="lightGray"
            label="Password"
            name="password"
            type="password"
            value={userCreds.password}
            placeholder="Type your password"
            onChange={onchange}
          />
          <Input
            labelColor="darkGray"
            bgcolor="lightGray"
            label="Confirm password"
            name="confirmPassword"
            value={userCreds.confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={onchange}
          />
        </div>

        <div className="flex items-center gap-2">
          <Input bgcolor="transparent" name="terms" required type="checkbox" />
          <TermsAndPolicies />
        </div>

        <Button
          className="py-4 flex items-center justify-center font-bold"
          type="submit"
          bgcolor="black"
          rounded="full"
          title={`${loading ? "" : "Sign Up"}`}
          titleColor="white"
          loader={loading && <ClipLoader size={25} color="white" />}
        />
        <div className="flex items-center gap-4 text-medium-gray mt-7">
          <hr className="flex-1 border-t border-medium-gray" />
          <p>or do it via other accounts</p>
          <hr className="flex-1 border-t border-medium-gray" />
        </div>

        <OtherAccounts />
        <AlreadyHaveAnAccount />
      </form>
    </div>
  );
};

export default SignUpForm;
