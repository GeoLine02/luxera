const SellerHero = () => {
  return (
    <div className="bg-light-pink rounded-xl p-6 flex flex-col md:flex-row items-center gap-4">
      <div className="bg-dark-pink border-4 border-white rounded-full w-28 aspect-square flex items-center justify-center">
        <span className="text-xl font-semibold"></span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold">Seller Name</h1>
        <p className="line-clamp-3 max-w-[280px] md:max-w-[500px] text-center md:text-start text-medium-gray text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod alias
          facilis reprehenderit, repellendus voluptatibus velit sequi,
          quibusdam, illum repellat quos perspiciatis quaerat nisi porro magni?
          Sint reiciendis pariatur minima iusto!
        </p>
      </div>
    </div>
  );
};

export default SellerHero;
