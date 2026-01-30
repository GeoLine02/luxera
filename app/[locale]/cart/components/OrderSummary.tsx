"use client";

import CheckoutButton from "./CheckoutButton";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";

const OrderSummary = () => {
  const { selectedCartItems } = useSelector(
    (state: RootState) => state.cartReducer,
  );

  const totalPrice = calculateTotalPrice(selectedCartItems);
  const itemsCount = selectedCartItems.length;

  return (
    <div className="w-full bg-white z-30 fixed bottom-0 left-0 rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4 py-4 md:rounded-xl md:shadow-md md:sticky md:top-24 mb-14 md:mb-0">
      {/* Order Totals */}
      <div className="flex justify-between items-center py-3 border-b border-light-gray">
        <span className="text-gray-700">Item Total</span>
        <span className="font-semibold text-gray-900">
          {totalPrice.toFixed(2)} GEL
        </span>
      </div>

      {/* Checkout Button */}
      <div className="pt-4 pb-2">
        <CheckoutButton itemsCount={itemsCount} />
      </div>
    </div>
  );
};

export default OrderSummary;
