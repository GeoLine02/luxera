"use client";

import { ProductWithPrimaryVariant } from "@/app/types/product";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { fetchNotifications } from "../../../services/notifications";
import { NotificationType } from "@/app/types/notifications";
import { useSocket } from "@/app/providers/SocketProvider";

interface NotificationCardProps {
  id: number;
  message: string;
  notification_type: string;
  productId: number;
  read: boolean;
  read_at: null | Date;
  recipient_id: number;
  product: ProductWithPrimaryVariant;
}

const NotificationCard = ({
  message,
  notification_type,
  product,
}: NotificationCardProps) => {
  return (
    <div className="w-full bg-white border border-light-gray px-4 py-2 rounded-xl mb-3">
      <div className="flex w-full justify-between items-center space-y-1">
        <div>
          <h1 className="text-2xl font-medium">{notification_type}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <FaCheck className="cursor-pointer" />
          <IoIosClose size={32} className="cursor-pointer" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-medium">
          {product.primaryVariant.variant_name}
        </h1>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
};

const NotificationsList = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const { socket, isConnected } = useSocket();

  useEffect(() => {
    if (!socket || !isConnected) return;

    const handler = (data: NotificationType) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        {
          product: data.product,
          notification_type: data.notification_type,
          productId: data.productId,
          read: data.read,
          read_at: data.read_at,
          recipient_id: data.recipient_id,
          id: 1,
          message: data.message,
        },
      ]);
    };

    socket.on("product_message", handler);

    return () => {
      socket.off("product_message", handler);
    };
  }, [socket, isConnected]);

  useEffect(() => {
    const handleFetchNotifications = async () => {
      const res = await fetchNotifications(1);
      setNotifications(res);
    };
    handleFetchNotifications();
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      {notifications.map((notification) => (
        <NotificationCard
          id={notification.id}
          message={notification.message}
          notification_type={notification.notification_type}
          product={notification.product}
          productId={notification.productId}
          read={notification.read}
          read_at={notification.read_at}
          recipient_id={notification.recipient_id}
          key={notification.id}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
