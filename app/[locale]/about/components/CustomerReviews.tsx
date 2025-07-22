import { IoMdStar } from "react-icons/io";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col items-center mt-[168px] space-y-[50px]">
      <h1 className="text-[36px] font-medium">Customers reviews</h1>

      <section>
        <div className="flex items-center gap-2">
          <span className="text-[36px] font-medium">4,7</span>
          <div className="flex items-center gap-1">
            <IoMdStar size={25} />
            <IoMdStar size={25} />
            <IoMdStar size={25} />
            <IoMdStar size={25} />
            <IoMdStar size={25} />
          </div>
          <span>1315 reviews</span>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
