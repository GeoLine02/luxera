import OrderHistory from "./components/OrderHistory";
import { fetchUserOrders } from "./services/orders";

const MyOrders = async () => {
  // TODO: fetch orders data
  const orders = await fetchUserOrders();
  console.log("orders", orders);
  return (
    <>
      <OrderHistory orders={orders} />
    </>
  );
};

export default MyOrders;
