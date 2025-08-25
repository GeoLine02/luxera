"use client";

import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Dropdown } from "@/app/ui/DropDown";

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: string;
  status: "completed" | "pending" | "canceled";
}

const ordersData: Order[] = [
  {
    id: "#001",
    customerName: "John Doe",
    date: "2025-08-06",
    total: "150 GEL",
    status: "completed",
  },
  {
    id: "#002",
    customerName: "Jane Smith",
    date: "2025-08-05",
    total: "200 GEL",
    status: "pending",
  },
  {
    id: "#003",
    customerName: "Mike Johnson",
    date: "2025-08-04",
    total: "100 GEL",
    status: "canceled",
  },
];

const statusStyles: Record<Order["status"], string> = {
  completed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  canceled: "bg-red-100 text-red-800",
};

const OrdersTable = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleChangeStatus = (
    status: "completed" | "canceled" | "pending",
    orderId: string
  ) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status } : order
    );

    setOrders(updatedOrders);
  };

  return (
    <div className="flex-1 h-full">
      <div className="p-4 pb-0">
        <h2 className="text-2xl text-dark-gray font-semibold">Orders</h2>
      </div>
      <div className="mt-6 bg-white rounded-lg">
        <div className="overflow-x-auto overflow-y-visible">
          <table className="min-w-full text-sm text-left">
            <thead className="border-b border-light-gray">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-600">
                  Order ID
                </th>
                <th className="px-6 py-3 font-medium text-gray-600">
                  Customer Name
                </th>
                <th className="px-6 py-3 font-medium text-gray-600">Date</th>
                <th className="px-6 py-3 font-medium text-gray-600">Total</th>
                <th className="px-6 py-3 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-light-gray hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">
                    <Link href="#">{order.customerName}</Link>
                  </td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <Dropdown>
                      <Dropdown.Trigger className="text-left">
                        <span
                          className={classNames(
                            "px-3 py-1 rounded-full text-xs font-semibold",
                            statusStyles[order.status]
                          )}
                        >
                          {order.status}
                        </span>
                      </Dropdown.Trigger>
                      <Dropdown.Menu
                        expandMode="absolute"
                        className="overflow-visible text-left !top-7 !w-fit z-50"
                      >
                        <Dropdown.Item
                          onSelect={() =>
                            handleChangeStatus("completed", order.id)
                          }
                          className="py-1.5"
                        >
                          Completed
                        </Dropdown.Item>
                        <Dropdown.Item
                          onSelect={() =>
                            handleChangeStatus("pending", order.id)
                          }
                          className="py-1.5"
                        >
                          Pending
                        </Dropdown.Item>
                        <Dropdown.Item
                          onSelect={() =>
                            handleChangeStatus("canceled", order.id)
                          }
                          className="py-1.5"
                        >
                          Canceled
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex items-center justify-center gap-2">
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Previous
          </button>
          <button className="px-3 py-1 border rounded text-sm bg-gray-200 font-semibold">
            1
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
