interface OrderedProductCardProps {
  productName: string;
  quantity: number;
  price: number;
}

const OrderedProductCard = ({
  productName,
  quantity,
  price,
}: OrderedProductCardProps) => {
  return (
    <div className="flex items-center justify-between border-b-2 border-light-gray py-4 pr-5">
      <div className="flex gap-3">
        <div className="bg-light-pink rounded-md w-16 md:w-24 aspect-square flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold">Gift</h1>
        </div>
        <div>
          <h1 className="text-xl font-medium">{productName}</h1>
          <p className="text-sm text-medium-gray">quantity: {quantity}</p>
        </div>
      </div>
      <h1 className="text-xl font-medium">{price} GEL</h1>
    </div>
  );
};

export default OrderedProductCard;
