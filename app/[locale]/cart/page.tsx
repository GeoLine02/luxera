import CartItemsList from "./components/CartItemsList";

import OrderSummary from "./components/OrderSummary";

const Cart = async () => {
  return (
    <div className="container min-h-[calc(100vh-80px)] px-2">
      <h1 className="text-4xl font-bold mt-4">Cart</h1>
      <div className="flex gap-2">
        <CartItemsList />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
