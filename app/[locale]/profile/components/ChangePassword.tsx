"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword } from "../services/changePassword";
import { toast, ToastContainer } from "react-toastify";

// ✅ Zod schema
const changePasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(100, "Password must be at most 100 characters long"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    try {
      const res = await changePassword(data.newPassword);

      if (res?.status === 200) {
        toast.success("Password changed successfully 🔐");
        reset();
      } else {
        toast.error("Failed to change password");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl md:text-3xl text-dark-gray font-bold">
        Change Password
      </h1>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor="newPassword">New Password</label>
          <Input
            {...register("newPassword")}
            type="password"
            bgcolor="white"
            className="max-w-[300px] mt-2"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <Input
            {...register("confirmNewPassword")}
            type="password"
            bgcolor="white"
            className="max-w-[300px] !py-0 mt-2"
          />
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        <div>
          <Button
            rounded="lg"
            title={isSubmitting ? "Changing..." : "Change Password"}
            type="submit"
            bgcolor="darkGray"
            className="!w-fit px-2 md:px-4 py-1 md:py-2"
            titleColor="white"
            disabled={isSubmitting}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </form>
  );
};

export default ChangePassword;
