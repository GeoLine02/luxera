import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="flex flex-col space-y-9 w-full">
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
