"use client";

import { loginService } from "@/app/[locale]/(auth)/services/login";
import { initiateGoogleAuth } from "@/app/[locale]/(auth)/services/googleAuth";
import { LoginServiceResponse } from "@/app/types/user";
import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginService, undefined);

  // Log state changes to browser console
  useEffect(() => {
    if (state) {
      console.log('Login state updated:', state);
      if (state.errors) {
        console.error('Login errors:', state.errors);
      }
      if (state.success === false) {
        console.error('Login failed:', state);
      }
    }
  }, [state]);

  const handleGoogleLogin = () => {
    initiateGoogleAuth();
  };

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
            name="email"
            bgColor="lightGray"
            className="rounded-xl"
            placeholder="Type your e-mail or phone number"
            error={state?.errors?.email?.[0] || state?.errors?.emailOrPhone?.[0]}
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
            error={state?.errors?.password?.[0]}
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
          
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <Button
            rounded="full"
            title="Continue with Google"
            type="button"
            bgColor="white"
            titleColor="black"
            className="py-2 font-medium border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            onClick={handleGoogleLogin}
            icon={<FcGoogle size={20} />}
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
