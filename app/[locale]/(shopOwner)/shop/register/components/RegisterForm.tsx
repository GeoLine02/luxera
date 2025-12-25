"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { useActionState } from "react";
import { registerShopService } from "../services/registerShop";
import { useUser } from "@/app/providers/UserProvider";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const RegisterForm = () => {
  const { user } = useUser();
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      formData.append("userId", String(user?.id));
      const result = await registerShopService(prevState, formData);

      if (result?.shopAccessToken) {
        router.push("/shop");
      }

      return result;
    },
    null
  );

  return (
    <form action={formAction} className="max-w-[424px] space-y-4 flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">Open Your Online Store</h1>
        <span className="text-xl">It&apos;s free and easy</span>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm text-medium-gray">Shop name</span>
          <Input
            error={state?.errors?.shopName?.[0]}
            name="shopName"
            bgcolor="lightGray"
            className="rounded-xl"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-medium-gray">Password</span>
          <Input
            error={state?.errors?.password?.[0]}
            name="password"
            bgcolor="lightGray"
            className="rounded-xl"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm text-medium-gray">Repeat Password</span>
          <Input
            error={state?.errors?.repeatPassword?.[0]}
            name="repeatPassword"
            bgcolor="lightGray"
            className="rounded-xl"
          />
        </label>

        <div className="flex gap-2">
          <Input type="checkbox" name="privacyAndPolicy" required />
          <p className="text-sm">
            By creating an account, you agree to the{" "}
            <span className="font-semibold">Terms and Conditions</span> and our{" "}
            <span className="font-semibold">Privacy Policy</span>.
          </p>
        </div>

        {state?.error && (
          <p className="text-red-500 text-sm">{state.error.message}</p>
        )}

        <Button
          loader={
            isPending ? <ClipLoader size={25} color="white" /> : undefined
          }
          disabled={isPending}
          rounded="full"
          title="Register Shop"
          type="submit"
          bgcolor="black"
          titleColor="white"
          className="py-2 px-4 font-medium"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
