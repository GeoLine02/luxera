"use client";

import Input from "@/app/ui/Input";
import { useEffect } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

const PHONE_PREFIX = "+955";

interface CheckoutFormValues {
  fullName: string;
  city: string;
  phone: string;
  address: string;
  description?: string;
}

interface OrderDetailsProps {
  register: UseFormRegister<CheckoutFormValues>;
  setValue: UseFormSetValue<CheckoutFormValues>;
  watch: UseFormWatch<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const OrderDetails = ({
  register,
  setValue,
  watch,
  errors,
}: OrderDetailsProps) => {
  const phoneValue = watch("phone");

  useEffect(() => {
    if (!phoneValue?.startsWith(PHONE_PREFIX)) {
      setValue("phone", PHONE_PREFIX);
    }
  }, [phoneValue, setValue]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Order Details</h2>

      {/* Name */}
      <Input
        label="Full name"
        placeholder="Enter your name and surname"
        {...register("fullName", {
          required: "full name is required",
        })}
        error={errors.fullName?.message}
      />

      {/* City */}
      <Input
        label="City"
        placeholder="Enter your city"
        {...register("city", {
          required: "City is required",
        })}
        error={errors.city?.message}
      />

      {/* Phone */}
      <Input
        label="Phone number"
        inputMode="numeric"
        {...register("phone", {
          required: "Phone number is required",
          onChange: (e) => {
            let value = e.target.value;

            if (!value.startsWith(PHONE_PREFIX)) {
              value = PHONE_PREFIX;
            }

            const sanitized =
              PHONE_PREFIX +
              value.slice(PHONE_PREFIX.length).replace(/\D/g, "");

            setValue("phone", sanitized, { shouldValidate: true });
          },
          validate: (value) =>
            value.length > PHONE_PREFIX.length || "Enter your phone number",
        })}
        error={errors.phone?.message}
      />

      {/* Address */}
      <Input
        label="Address"
        placeholder="Enter delivery address"
        {...register("address", {
          required: "Address is required",
        })}
        error={errors.address?.message}
      />

      {/* Description / Notes */}
      <Input
        label="Description (optional)"
        placeholder="Additional delivery notes"
        {...register("description")}
        error={errors.description?.message}
      />
    </div>
  );
};

export default OrderDetails;
