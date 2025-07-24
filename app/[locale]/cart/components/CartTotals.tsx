"use client";

import CheckoutButton from "./CheckoutButton";

const CartTotals = () => {
  return (
    <div className="bg-warm-white md:bg-white py-2 md:py-0 w-full md:max-w-[20%] px-4 fixed bottom-20 left-0 md:static">
      <div className="flex flex-row md:flex-col gap-2 md:border-b md:border-medium-gray md:py-4">
        <h1 className="block font-medium md:hidden">Order Summary</h1>

        <div className="flex items-center gap-2 justify-between">
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
