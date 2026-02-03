"use client";
import OrderCard from "./OrderCard";
import { Order } from "@/app/types/order";

interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory = ({ orders }: OrderHistoryProps) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1">
      <h1 className="text-lg md:text-2xl font-bold">Order History</h1>
      <div className="space-y-4 mt-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
