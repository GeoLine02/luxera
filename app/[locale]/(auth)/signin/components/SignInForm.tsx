import Input from "@/app/ui/Input";
import Form from "next/form";
import Button from "@/app/ui/Button";
import ForgetPasswordButton from "./ForgetPasswordButton";
import OtherAccounts from "../../shared/OtherAccounts";
import { SignInState } from "../services/signIn";
import Link from "next/link";

interface SignInFormProps {
  state: SignInState | null;
  formAction: (payload: FormData) => void;
}

const SignInForm = ({ formAction, state }: SignInFormProps) => {
  return (
    <div className="max-w-[424px] w-full space-y-[57px]">
      <div className="space-y-[12px] mb-[54px]">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p>Meet the good taste today</p>
      </div>

      <Form className="space-y-[30px]" action={formAction}>
        <div>
          <Input
            bgColor="lightGray"
            label="E-mail or phone number"
            name="email"
            type="text"
            placeholder="Type your e-mail or phone number"
            error={state?.errors?.email}
          />
        </div>
        <div>
          <Input
            bgColor="lightGray"
            label="Password"
            name="Password"
            type="password"
            placeholder="Type your password"
            error={state?.errors?.password}
          />
          <ForgetPasswordButton />
        </div>
        <Button
          className="py-4 flex items-center justify-center font-bold"
          type="submit"
          bgColor="black"
          rounded="full"
          title="Sign In"
          titleColor="white"
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
