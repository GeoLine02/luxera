import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";

const RegisterForm = () => {
  return (
    <form className="max-w-[424px] space-y-4 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">Open Your Online Store</h1>
        <span className="text-xl">It&apos;s free and easy</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-medium-gray" htmlFor="fullName">
            Full Name
          </label>
          <Input name="fullName" bgColor="lightGray" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-medium-gray" htmlFor="fullName">
            Your Gmail
          </label>
          <Input
            name="gmail"
            bgColor="lightGray"
            className="rounded-xl"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-medium-gray" htmlFor="fullName">
            Phone Number
          </label>
          <Input name="phone" bgColor="lightGray" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-medium-gray" htmlFor="fullName">
            Password
          </label>
          <Input name="password" bgColor="lightGray" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-medium-gray" htmlFor="fullName">
            Repeat Password
          </label>
          <Input
            name="repeatPassword"
            bgColor="lightGray"
            className="rounded-xl"
          />
        </div>

        <div className="flex gap-2">
          <Input
            type="checkbox"
            name="privacyAndPolicy"
            checked={false}
            required
          />
          <p className="text-sm">
            By creating an account means you agree to the{" "}
            <span className="font-semibold">Terms and Conditions</span>, and our{" "}
            <span className="font-semibold">Privacy Policy</span>
          </p>
        </div>
        <Button
          rounded="full"
          title="Register Shop"
          type="submit"
          bgColor="black"
          titleColor="white"
          className="py-2 px-4 font-medium"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
