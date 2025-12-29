"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { shopLoginService } from "../services/loginService";
import { toast, ToastContainer } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ password: string } | null>(null);
  const [password, setPassword] = useState<string>("");
  const [serverError, setServerError] = useState<string | null>(null);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setServerError(null);
    try {
      const res = await shopLoginService(password);

      if (res?.type === "validation" && res.errors.password) {
        setError({ password: res.errors?.password[0] });
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      if (error.type === "server" && error.status === 401) {
        toast.error("Please login as user first");
      }
      if (error.type === "server" && error.statu === 400) {
        setError({ password: error.message });
      }
      if (error.type === "server" && error.status === 500) {
        toast.error("Network error! Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col space-y-9 w-full max-w-[424px]"
    >
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-medium">Log In To Your Store</h1>
          <p>Welcome Back Amazing store owner</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            bgcolor="lightGray"
            className="rounded-xl"
            type="password"
            placeholder="Type your password"
            onChange={(e) => setPassword(e.target.value)}
            error={error?.password}
          />
          <div className="flex justify-end">
            <span className="text-sm text-medium-gray cursor-pointer">
              Forget Password?
            </span>
          </div>

          {serverError && (
            <p className="text-sm text-red-500 font-medium">{serverError}</p>
          )}

          <Button
            rounded="full"
            title="Sign In"
            type="submit"
            bgcolor="black"
            titleColor="white"
            className="py-2 font-medium mt-4"
            loader={loading && <ClipLoader size={25} color="white" />}
          />
        </div>
      </div>

      <p className="text-sm text-medium-gray text-center">
        Don&apos;t have an accont?{" "}
        <Link href={"/shop/register"}>
          <span className="font-semibold text-black">Sign Up</span>
        </Link>
      </p>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
