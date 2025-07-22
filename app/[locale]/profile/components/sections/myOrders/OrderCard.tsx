import { FaRegClock } from "react-icons/fa6";

const OrderCard = () => {
  return (
    <div className="rounded-xl bg-white space-y-4 w-full max-w-[336px] p-4 shadow-xl shadow-gray-200 border border-gray-100">
      <h2 className="font-medium">#Order 123456</h2>

      <div className="flex items-center gap-3">
        <FaRegClock size={25} />
        <div>
          <p className="text-medium-gray">Estimated arrival</p>
          <h1 className="text-xl font-medium">1 Day</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
