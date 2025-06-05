import SellYourProductsButton from "./SellYourProductsButton";

const SellYourProducts = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center px-[67px] py-[63px] bg-very-light-pink">
      <div className="space-y-[51px]">
        <h1 className="text-[40px] lg:text-[64px] font-bold font-FRL">
          Sell Your Products
        </h1>
        <p>Join our msrketplace and showcase your unique gifts</p>
      </div>
      <SellYourProductsButton />
    </div>
  );
};

export default SellYourProducts;
