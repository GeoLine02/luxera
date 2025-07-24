import CartItemsList from "./components/CartItemsList";
import CartTotals from "./components/CartTotals";

const Cart = () => {
  return (
    <div className="container min-h-[calc(100vh-100px)]">
      <div className="flex gap-2">
        <CartItemsList />
        <CartTotals />
      </div>
    </div>
  );
};

export default Cart;
