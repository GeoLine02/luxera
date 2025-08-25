import Button from "@/app/ui/Button";
import classNames from "classnames";
import { FaCircleCheck } from "react-icons/fa6";

interface PricingCardProps {
  type: "standard" | "premium" | "vip";
  price: string;
  conditions: string[];
  isPopular: boolean;
  isSelected: boolean;
}

const PricingCard = ({
  conditions,
  price,
  type,
  isPopular,
  isSelected,
}: PricingCardProps) => {
  const borderStyles = classNames("border-2 rounded-lg", {
    "border-medium-gray": type === "standard",
    "border-purple-600": type === "premium",
    "border-yellow-500": type === "vip",
  });

  const popularBadgeStyles = classNames(
    "rounded-full px-4 py-1 text-white font-medium absolute -top-4 right-9",
    {
      "bg-medium-gray": type === "standard",
      "bg-purple-600": type === "premium",
      "bg-yellow-500": type === "vip",
    }
  );

  return (
    <div
      className={`relative ${borderStyles} flex flex-col gap-6 items-center p-6 w-full max-w-[450px] min-h-auto md:min-h-[400px]`}
    >
      {isPopular && <div className={`${popularBadgeStyles}`}>პოპულარული</div>}
      <div className="flex flex-col items-center gap-4 flex-1">
        <h1 className="text-3xl font-bold">{price}</h1>
        <div className="space-y-4">
          {conditions.map((condition) => (
            <div className="flex items-center gap-2" key={condition}>
              <div>
                <FaCircleCheck className="text-green-500" size={20} />
              </div>
              <h2 className="text-medium-gray font-medium">{condition}</h2>
            </div>
          ))}
        </div>
      </div>
      <Button
        rounded="lg"
        title={`${isSelected ? "არჩეული პაკეტი" : "პაკეტის არჩევა"}`}
        type="button"
        bgColor={`${isSelected ? "mediumGray" : "darkGray"}`}
        titleColor={"white"}
        className="py-2 font-mediu px-4"
      />
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-evenly lg:flex-row mt-9">
      <PricingCard
        conditions={["უფასო განთავსება"]}
        isPopular={false}
        isSelected={true}
        price={"Free"}
        type="standard"
      />
      <PricingCard
        conditions={[
          "პროედუქტის განთავსება კატეგორიის TOP-ში 7 დღით",
          "VIP ნიშანი",
        ]}
        isPopular={true}
        isSelected={false}
        price={"25 GEL"}
        type="vip"
      />
      <PricingCard
        conditions={[
          "ყველა VIP პრივილეგია",
          "განთავსება მთავარ გვერდზე",
          "პრომო სოციალურ ქსელში",
        ]}
        isPopular={false}
        isSelected={false}
        price={"50 GEL"}
        type="premium"
      />
    </div>
  );
};

export default Pricing;
