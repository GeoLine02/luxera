"use client";

import { selectOrder } from "@/app/store/features/ordersSlice";
import { AppDispatch } from "@/app/store/store";
import { Order } from "@/app/types/order";
import Button from "@/app/ui/Button";
import { useDispatch } from "react-redux";

interface OrderCardProps {
  order: Order;
}

const statusColor = {
  Delivered: "green-600",
  Shipped: "blue-600",
};

const OrderCard = ({ order }: OrderCardProps) => {
  const { date, id, price, status } = order;

  const dispatch = useDispatch<AppDispatch>();

  const handleOpenOrderDetails = () => {
    dispatch(selectOrder(order));
  };

  return (
    <div className="border border-medium-gray rounded-lg flex md:items-center flex-col md:flex-row gap-4 p-4 w-full">
      <div className="flex justify-between items-start md:items-center flex-1">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">Order #{id}</h1>
          <p className="text-sm text-medium-gray">Date: {date}</p>
          <p className={`text-sm text-${statusColor[status]}`}>
            Status: Delivered
          </p>
        </div>
        <h1 className="text-xl font-semibold">{price} GEL</h1>
      </div>
      <div>
        <Button
          rounded="lg"
          title="View Details"
          type="button"
          bgColor="lightPink"
          className="py-2 px-4 !w-fit font-medium"
          titleColor="black"
          onClick={handleOpenOrderDetails}
        />
      </div>
    </div>
  );
};

export default OrderCard;
