"use client";

import Input from "@/app/ui/Input";
import Button from "@/app/ui/Button";
import ForgetPasswordButton from "./ForgetPasswordButton";
import OtherAccounts from "../../shared/OtherAccounts";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { loginService } from "../../services/login";
import { useRouter } from "next/navigation";
import { UserSignInCredsType } from "@/app/types/user";
import { useUser } from "@/app/providers/UserProvider";
import api from "@/utils/axios";

const SignInForm = () => {
  const [userCreds, setUserCreds] = useState<UserSignInCredsType>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Partial<UserSignInCredsType> | null>(null);

  const router = useRouter();

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { setUser } = useUser();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginService(userCreds);

      if (res?.errors) {
        setError({
          email: res.errors?.email?.[0],
          password: res.errors?.password?.[0],
        });
        return;
      }

      if (res?.data && res.success) {
        const userRes = await api.get("/user/me");

        const userData = userRes.data;

        setUser(userData.data);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[424px] w-full space-y-[57px]">
      <div className="space-y-[12px] mb-[54px]">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p>Meet the good taste today</p>
      </div>

      <form className="space-y-[30px]" onSubmit={handleSignIn}>
        <div>
          <Input
            bgcolor="lightGray"
            label="E-mail or phone number"
            name="email"
            type="email"
            placeholder="Type your e-mail or phone number"
            error={error?.email}
            onChange={onchange}
          />
        </div>
        <div>
          <Input
            bgcolor="lightGray"
            label="Password"
            name="password"
            type="password"
            placeholder="Type your password"
            defaultValue={""}
            error={error?.password}
            onChange={onchange}
          />
          <ForgetPasswordButton />
        </div>
        <Button
          className="py-4  gap-2 flex items-center justify-center font-bold"
          type="submit"
          bgcolor="black"
          rounded="full"
          title="Sign In"
          titleColor="white"
          loader={loading && <ClipLoader size={25} color="white" />}
        />
        <div className="flex items-center gap-4 text-medium-gray mt-7">
          <hr className="flex-1 border-t border-medium-gray" />
          <p>or do it via other accounts</p>
          <hr className="flex-1 border-t border-medium-gray" />
        </div>

        <OtherAccounts />
        <div className="flex items-center justify-center">
          <p className="md:mt-[50px] mx-auto">
            Don’t have an account?{" "}
            <Link
              href={"/signup"}
              className="cursor-pointer font-bold text-black"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
