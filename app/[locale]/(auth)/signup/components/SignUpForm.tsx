"use client";

import Input from "@/app/ui/Input";
import Form from "next/form";
import Button from "@/app/ui/Button";
import OtherAccounts from "../../shared/OtherAccounts";
import AlreadyHaveAnAccount from "./AlreadyHaveAnAccount";
import TermsAndPolicies from "./TermsAndPolicies";
import { useActionState } from "react";
import { registerService } from "../../services/register";

// interface SignUpFormProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   signUp: (_prevState: unknown, formData: FormData) => Promise<any>;
// }

const SignUpForm = () => {
  const [state, action, pending] = useActionState(registerService, undefined);

  return (
    <div className="max-w-[424px] w-full space-y-[57px]">
      <div className="space-y-[12px] mb-6 md:mb-[54px]">
        <h1 className="text-3xl font-semibold text-dark-gray">
          Create your account
        </h1>
        <p className="text-dark-gray">It’s free and easy</p>
      </div>

      <Form className="space-y-[30px] text-medium-gray" action={action}>
        <div className="space-y-3">
          <Input
            labelColor="darkGray"
            bgColor="lightGray"
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your name"
            error={state?.errors?.fullName?.[0]}
          />
          <Input
            labelColor="darkGray"
            bgColor="lightGray"
            label="E-mail or phone number"
            name="email"
            type="email"
            placeholder="Type your e-mail or phone number"
            error={state?.errors?.email?.[0]}
          />
          <Input
            labelColor="darkGray"
            bgColor="lightGray"
            label="Password"
            name="password"
            type="password"
            placeholder="Type your password"
            error={state?.errors?.password?.[0]}
          />
          <Input
            labelColor="darkGray"
            bgColor="lightGray"
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            error={state?.errors?.confirmPassword?.[0]}
          />
        </div>
        <div className="flex items-center gap-2">
          <Input bgColor="transparent" name="terms" required type="checkbox" />
          <TermsAndPolicies />
        </div>
        {pending && <span>Loading...</span>}
        <Button
          className="py-4 flex items-center justify-center font-bold"
          type="submit"
          bgColor="black"
          rounded="full"
          title="Sign Up"
          titleColor="white"
        />
        <div className="flex items-center gap-4 text-medium-gray mt-7">
          <hr className="flex-1 border-t border-medium-gray" />
          <p>or do it via other accounts</p>
          <hr className="flex-1 border-t border-medium-gray" />
        </div>

        <OtherAccounts />
        <AlreadyHaveAnAccount />
      </Form>
    </div>
  );
};

export default SignUpForm;
