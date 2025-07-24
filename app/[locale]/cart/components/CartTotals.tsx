"use client";

import CheckoutButton from "./CheckoutButton";

const CartTotals = () => {
  return (
    <div className="w-full max-w-[20%] px-4">
      <div className="space-y-2 border-b border-medium-gray py-4">
        <h1 className="font-medium">Order Summary</h1>

        <div className="flex items-center justify-between">
          <span>Item Total</span>
          <span>55.99 GEL</span>
        </div>
      </div>
      <div className="mt-5">
        <CheckoutButton itemsCount={1} />
      </div>
    </div>
  );
};

export default CartTotals;
