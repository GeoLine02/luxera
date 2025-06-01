import SellYourProductsButton from "./SellYourProductsButton";

const SellYourProducts = () => {
  return (
    <div className="flex justify-between items-center px-[67px] py-[63px] bg-very-light-pink">
      <div className="space-y-[51px]">
        <h1 className="text-[64px] font-FRL">Sell Your Products</h1>
        <p>Join our msrketplace and showcase your unique gifts</p>
      </div>
      <SellYourProductsButton />
    </div>
  );
};

export default SellYourProducts;
