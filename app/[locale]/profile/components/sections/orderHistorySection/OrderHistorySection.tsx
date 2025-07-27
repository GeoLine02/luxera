import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { RootState } from "@/app/store/store";
import OrderDetails from "./OrderDetails";
import { Order } from "@/app/types/order";

const OrderHistorySection = () => {
  const { selectedOrder } = useSelector(
    (state: RootState) => state.ordersReducer
  );

  const order: Order = {
    id: 1,
    price: 15,
    date: "24 ივლისი, 2025",
    status: "Delivered",
  };

  console.log(selectedOrder);
  if (selectedOrder) {
    return <OrderDetails order={selectedOrder} />;
  } else {
    return (
      <div className="bg-white rounded-lg p-4">
        <h1 className="text-lg md:text-2xl font-bold">Order History</h1>
        <div className="space-y-4 mt-4 max-h-[350px] overflow-y-auto">
          <OrderCard order={order} />
          <OrderCard order={order} />
          <OrderCard order={order} />
          <OrderCard order={order} />
        </div>
      </div>
    );
  }
};

export default OrderHistorySection;
