"use client";

import { loginService } from "@/app/[locale]/(auth)/services/login";
import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import Link from "next/link";
import { useActionState } from "react";
import { ClipLoader } from "react-spinners";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginService, undefined);

  return (
    <form
      action={action}
      className="flex flex-col space-y-9 w-full max-w-[424px]"
    >
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-medium">Log In To Your Store</h1>
          <p>Welcome Back Amazing store owner</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail or phone number</label>
          <Input
            name="emailOrPhone"
            bgColor="lightGray"
            className="rounded-xl"
            placeholder="Type your e-mail or phone number"
            error={state?.errors?.email?.[0]}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            bgColor="lightGray"
            className="rounded-xl"
            type="password"
            placeholder="Type your password"
            error={state?.error?.password?.[0]}
          />
          <div className="flex justify-end">
            <span className="text-sm text-medium-gray cursor-pointer">
              Forget Password?
            </span>
          </div>
          <Button
            rounded="full"
            title="Sign In"
            type="submit"
            bgColor="black"
            titleColor="white"
            className="py-2 font-medium mt-4"
            loader={pending && <ClipLoader size={25} color="white" />}
          />
        </div>
      </div>

      <p className="text-sm text-medium-gray text-center">
        Don&apos;t have an accont?{" "}
        <Link href={"/shop/register"}>
          <span className="font-semibold text-black">Sign Up</span>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
