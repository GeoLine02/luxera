import SellerPageButton from "./SellerPageButton";

const Seller = () => {
  return (
    <div className="bg-light-pink rounded-xl p-4 flex items-center justify-between mt-4 max-w-[570px]">
      <div className="flex items-center gap-4">
        <div className="bg-dark-pink border-2 border-white rounded-full w-14 aspect-square flex items-center justify-center">
          Seller
        </div>
        <div>
          <span className="text-sm text-medium-gray">Seller</span>
          <h1>Seller Name</h1>
        </div>
      </div>
      <SellerPageButton />
    </div>
  );
};

export default Seller;
