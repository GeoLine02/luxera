"use client";

import Input from "@/app/ui/Input";
import Button from "@/app/ui/Button";
import ForgetPasswordButton from "./ForgetPasswordButton";
import OtherAccounts from "../../shared/GoogleLoginButton";
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
  const [serverError, setServerError] = useState<string | null>(null);
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
    setError(null);
    setServerError(null);

    try {
      const res = await loginService(userCreds);

      // 🟡 Validation errors
      if (res.type === "validation") {
        setError({
          email: res.errors?.email?.[0],
          password: res.errors?.password?.[0],
        });
        return;
      }

      // 🟢 Login success
      if (res.type === "success") {
        const userRes = await api.get("/user/me");
        setUser(userRes.data.data);
        router.push("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // 🔴 Server / Network errors
      if (error.type === "server") {
        setServerError(error.message);
      } else {
        setServerError("Unexpected error occurred");
      }

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

      <form className="space-y-4" onSubmit={handleSignIn}>
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
            error={error?.password}
            onChange={onchange}
          />
          <ForgetPasswordButton />
        </div>
        {serverError && (
          <p className="text-sm font-medium text-red-500 mb-3">{serverError}</p>
        )}
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
