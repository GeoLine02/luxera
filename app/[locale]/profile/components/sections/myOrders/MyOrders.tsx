import OrderCard from "./OrderCard";

const MyOrders = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Upcoming orders</h1>
      <div className="flex gap-4 flex-wrap mt-7">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default MyOrders;
