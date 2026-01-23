"use client";

import { useForm } from "react-hook-form";
import OrderDetails from "./OrderDetails";
import OrderSummary from "./OrderSummary";

interface CheckoutFormValues {
  phone: string;
  address: string;
  fullName: string;
  city: string;
  description?: string;
}

const CheckoutSection = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      fullName: "",
      city: "",
      phone: "+955",
      address: "",
      description: "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-11"
    >
      <div className="flex-1 pb-32 md:pb-0">
        <OrderDetails
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      </div>

      <OrderSummary />
    </form>
  );
};

export default CheckoutSection;
