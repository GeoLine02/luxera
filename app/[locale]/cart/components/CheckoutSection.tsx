"use client";

import { useForm } from "react-hook-form";
import OrderDetails from "./OrderDetails";
import OrderSummary from "./OrderSummary";
import { CheckoutFormValues } from "@/app/types/checkout";
import { createOrder } from "../services/checkout";
import { BasketItem, OrderPayload } from "@/app/types/order";
import { useUser } from "@/app/providers/UserProvider";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

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
      postCode: "",
    },
  });

  const { user } = useUser();

  const { selectedCartItems } = useSelector(
    (state: RootState) => state.cartReducer,
  );

  const onSubmit = async (data: CheckoutFormValues) => {
    const basket: BasketItem[] = selectedCartItems.map((cartItem) => ({
      variantId: cartItem.variant.id as number,
      price: cartItem.variant.variant_price,
      productId: cartItem.id,
      productQuantity: cartItem.product_quantity,
      shopId: cartItem.product.shop_id,
    }));

    try {
      const payload: OrderPayload = {
        email: user?.email as string,
        basket: basket,
        city: data.city,
        currency: "GEL",
        phoneNumber: data.phone,
        postcode: data.postCode,
        payment_method: "bog card",
        country: "Georgia",
        streetAddress: data.address,
        state: "kvemo kartli",
      };

      const res = await createOrder(payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-11">
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
