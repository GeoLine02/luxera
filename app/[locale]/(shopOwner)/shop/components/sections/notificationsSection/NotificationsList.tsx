"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import {
  deleteNotification,
  fetchNotifications,
  markAsRead,
} from "../../../services/notifications";
import { NotificationType } from "@/app/types/notifications";

const NotificationsList = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<"all" | "read" | "unread">(
    "all",
  );

  useEffect(() => {
    const handleFetchNotifications = async () => {
      const res = await fetchNotifications(1);
      setNotifications(res);
    };
    handleFetchNotifications();
  }, []);

  const filteredNotifications = notifications.filter((notification) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "read") return notification.read;
    if (currentFilter === "unread") return !notification.read;
  });

  const handleChangeFilter = (filter: "all" | "read" | "unread") => {
    setCurrentFilter(filter);
  };

  const handleDeleteNotification = async (id: number) => {
    const res = await deleteNotification(id);
    if (res) {
      setNotifications(notifications.filter((n) => n.id !== id));
    }
  };

  const handleMarkAsRead = async (id: number) => {
    const res = await markAsRead(id);
    if (res) {
      setNotifications(
        notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
      );
    }
  };

  return (
    <div>
      <div className="flex gap-4 my-4">
        <button
          onClick={() => handleChangeFilter("all")}
          className="border-2 border-light-gray rounded-xl bg-white font-bold cursor-pointer p-2 px-4"
        >
          All
        </button>
        <button
          onClick={() => handleChangeFilter("read")}
          className="border-2 border-light-gray rounded-xl bg-white font-bold cursor-pointer p-2 px-4"
        >
          Read
        </button>
        <button
          onClick={() => handleChangeFilter("unread")}
          className="border-2 border-light-gray rounded-xl bg-white font-bold cursor-pointer p-2 px-4"
        >
          Unread
        </button>
      </div>
      <div className="bg-white rounded-lg p-4 mt-4">
        <h1 className="text-2xl font-medium mb-4">{currentFilter}</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border-2 border-light-gray rounded-xl">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">Product</th>
                <th className="text-left p-3 border-b">Message</th>
                <th className="text-left p-3 border-b">Status</th>
                <th className="text-left p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotifications.map((notification) => (
                <tr
                  key={notification.id}
                  className="odd:bg-white even:bg-gray-50"
                >
                  <td className="p-3 align-top border-b">
                    <div className="text-lg font-medium">
                      {notification.notification_type}
                    </div>
                  </td>
                  <td className="p-3 align-top border-b">
                    <div className="font-medium">
                      {notification.product?.primaryVariant?.variant_name ||
                        "-"}
                    </div>
                  </td>
                  <td className="p-3 align-top border-b">
                    <div className="text-sm">{notification.message}</div>
                  </td>
                  <td className="p-3 align-top border-b">
                    {notification.read ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Read
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        Unread
                      </span>
                    )}
                  </td>
                  <td className="p-3 align-top border-b">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        title="Mark as read"
                        className="text-green-600"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteNotification(notification.id)
                        }
                        title="Dismiss"
                        className="text-red-600"
                      >
                        <IoIosClose size={30} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
