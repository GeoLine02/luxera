"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: string;
  status: "Completed" | "Pending" | "Cancelled";
}

const orders: Order[] = [
  {
    id: "#001",
    customerName: "John Doe",
    date: "2025-08-06",
    total: "150 GEL",
    status: "Completed",
  },
  {
    id: "#002",
    customerName: "Jane Smith",
    date: "2025-08-05",
    total: "200 GEL",
    status: "Pending",
  },
  {
    id: "#003",
    customerName: "Mike Johnson",
    date: "2025-08-04",
    total: "100 GEL",
    status: "Cancelled",
  },
];

const statusStyles: Record<Order["status"], string> = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
};

const OrdersTable = () => {
  return (
    <div className="flex-1 max-h-full h-full">
      <div className="p-4 pb-0">
        <h2 className="text-2xl text-dark-gray font-semibold">Orders</h2>
      </div>
      <div className="mt-6 bg-white rounded-lg">
        <div className="overflow-x-auto">
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
                    <Link href="#" className="text-blue-600 hover:underline">
                      {order.customerName}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={classNames(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        statusStyles[order.status]
                      )}
                    >
                      {order.status}
                    </span>
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
