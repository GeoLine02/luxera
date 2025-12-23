import Button from "@/app/ui/Button";
import { FaShareAlt } from "react-icons/fa";
import WhishListCard from "./WhishListCard";

const WhishListSection = () => {
  return (
    <section className="rounded-xl bg-white p-4">
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl md:text-2xl text-dark-gray font-bold">
          My Whishlist
        </h1>
        <Button
          rounded="lg"
          title="Share"
          type="button"
          bgcolor="lightPink"
          titleColor="black"
          className="!w-fit px-2 md:px-4 py-1 md:py-2 gap-3 items-center font-medium flex"
          icon={<FaShareAlt size={20} />}
        />
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-hidden">
        <WhishListCard
          id={1}
          title="Teady Bear"
          description="asdkljaslkdjakjdlajkdjakjdlkajdadalkdlakdlajdalksdjklajsdlks"
          price={55}
        />
        <WhishListCard
          id={2}
          title="Teady Bear"
          description="asdkljaslkdjakjdlajkdjakjdlkajdadalkdlakdlajdalksdjklajsdlks"
          price={55}
        />
        <WhishListCard
          id={3}
          title="Teady Bear"
          description="asdkljaslkdjakjdlajkdjakjdlkajdadalkdlakdlajdalksdjklajsdlks"
          price={55}
        />
        <WhishListCard
          id={4}
          title="Teady Bear"
          description="asdkljaslkdjakjdlajkdjakjdlkajdadalkdlakdlajdalksdjklajsdlks"
          price={55}
        />
      </div>
    </section>
  );
};

export default WhishListSection;
