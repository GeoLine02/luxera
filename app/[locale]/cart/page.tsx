import CartItemsList from "./components/CartItemsList";
import CheckoutSection from "./components/CheckoutSection";

const Cart = async () => {
  return (
    <div className=" min-h-[calc(100vh-80px)] px-6 md:px-11 pb-40 md:pb-0">
      <h1 className="text-4xl font-bold mt-4 mb-6">Cart</h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* LEFT — Cart items */}
        <div className="w-full md:flex-1">
          <CartItemsList />
        </div>

        {/* RIGHT — Checkout */}
        <div className="w-full md:max-w-[40%]">
          <CheckoutSection />
        </div>
      </div>
    </div>
  );
};

export default Cart;
