import Link from "next/link";
import CartItemsList from "./components/CartItemsList";
import CartTotals from "./components/CartTotals";

const Cart = () => {
  return (
    <div className="container min-h-[calc(100vh-80px)] px-2">
      <div>
        <span>
          <Link className="text-medium-gray pl-2" href={"/"}>
            Home
          </Link>{" "}
          &gt; Cart
        </span>
      </div>
      <div className="flex gap-2">
        <CartItemsList />
        <CartTotals />
      </div>
    </div>
  );
};

export default Cart;
