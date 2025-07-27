"use client";

import { FaArrowLeft } from "react-icons/fa6";
import OrderedProductCard from "./OrderedProductCard";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { selectOrder } from "@/app/store/features/ordersSlice";
import { Order } from "@/app/types/order";

interface OrderDetailsProps {
  order: Order;
}

const statusColor = {
  Delivered: "text-green-600 bg-green-200",
  Shipped: "text-blue-600 bg-blue-200",
};

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const { date, id, status } = order;

  const dispatch = useDispatch<AppDispatch>();

  const handleGoBack = () => {
    dispatch(selectOrder(null));
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <section
        onClick={handleGoBack}
        className="cursor-pointer flex items-center gap-2"
      >
        <FaArrowLeft />
        <span>Back to orders history</span>
      </section>

      <section className="flex items-center justify-between border-b-2 border-light-gray py-4">
        <div>
          <h1 className="text-2xl font-medium">Order Details</h1>
          <p className="text-sm text-medium-gray">
            Order #{id} * {date}
          </p>
        </div>
        <div className={`${statusColor[status]} rounded-full px-2 font-medium`}>
          {status}
        </div>
      </section>
      <section className="mt-4">
        <h2 className="text-xl font-medium">Ordered Items</h2>
        <div className="max-h-[300px] overflow-y-auto border-b-2 border-light-gray">
          <OrderedProductCard price={120} productName="Pandora" quantity={1} />
          <OrderedProductCard price={120} productName="Pandora" quantity={1} />
          <OrderedProductCard price={120} productName="Pandora" quantity={1} />
        </div>
      </section>
      <section className="flex justify-end py-4 border-b-2 border-light-gray">
        <div className="max-w-[300px] w-full">
          <div className="flex items-center justify-between">
            <span>Sum:</span>
            <span>140.00 GEL</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Delivery fee:</span>
            <span>10.00 GEL</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Sum:</span>
            <span>140.00 GEL</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Full price:</span>
            <span className="font-semibold">150.00 GEL</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-4 space-y-4 md:flex-row md:space-y-0 ">
        {/* left side */}
        <div className="md:w-1/2">
          <h1 className="font-medium">Delivery Service</h1>
        </div>

        {/* right side */}
        <div className="md:w-1/2">
          <h1 className="font-medium">Delivery Details</h1>
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;
