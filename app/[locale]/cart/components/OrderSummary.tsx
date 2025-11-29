"use client";

import CheckoutButton from "./CheckoutButton";

const OrderSummary = () => {
  return (
    <div className="w-full bg-white z-30 fixed bottom-0 left-0 rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4 py-4md:rounded-xl md:shadow-md md:max-w-[22%] md:sticky md:top-24">
      {/* Desktop Title */}
      <h1 className="hidden md:block text-xl font-semibold mb-4">
        Order Summary
      </h1>

      {/* Mobile Title */}
      <h1 className="md:hidden text-lg font-medium mb-2">Order Summary</h1>

      {/* Order Totals */}
      <div className="flex justify-between items-center py-3 border-b border-light-gray">
        <span className="text-gray-700">Item Total</span>
        <span className="font-semibold text-gray-900">55.99 GEL</span>
      </div>

      {/* Checkout Button */}
      <div className="pt-4 pb-2">
        <CheckoutButton itemsCount={1} />
      </div>
    </div>
  );
};

export default OrderSummary;
