"use client";

import Input from "@/app/ui/Input";
import Form from "next/form";
import Button from "@/app/ui/Button";
import ForgetPasswordButton from "./ForgetPasswordButton";
import OtherAccounts from "../../shared/OtherAccounts";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { loginService } from "../../services/login";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [state, action, pending] = useActionState(loginService, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.status === 203) router.push("/");
  }, [router, state?.status]);

  return (
    <div className="max-w-[424px] w-full space-y-[57px]">
      <div className="space-y-[12px] mb-[54px]">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p>Meet the good taste today</p>
      </div>

      <Form className="space-y-[30px]" action={action}>
        <div>
          <Input
            bgColor="lightGray"
            label="E-mail or phone number"
            name="email"
            type="email"
            placeholder="Type your e-mail or phone number"
            defaultValue={state?.values?.email}
            error={state?.errors?.email?.[0]}
          />
        </div>
        <div>
          <Input
            bgColor="lightGray"
            label="Password"
            name="password"
            type="password"
            placeholder="Type your password"
            defaultValue={""}
            error={state?.errors?.password?.[0]}
          />
          <ForgetPasswordButton />
        </div>
        <Button
          className="py-4  gap-2 flex items-center justify-center font-bold"
          type="submit"
          bgColor="black"
          rounded="full"
          title="Sign In"
          titleColor="white"
          loader={pending && <ClipLoader size={25} color="white" />}
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
      </Form>
    </div>
  );
};

export default SignInForm;
