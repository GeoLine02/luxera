import { IconType } from "react-icons/lib";
import { FaUsers, FaRegCreditCard } from "react-icons/fa6";
import { RiCoinsFill } from "react-icons/ri";

interface ReferalStatCardProps {
  title: string;
  value: string;
  Icon: IconType;
}

const ReferalStatCard = ({ Icon, title, value }: ReferalStatCardProps) => {
  return (
    <div className="border border-light-gray rounded-xl p-4 flex w-full gap-2">
      <div className="bg-light-pink rounded-xl w-11 aspect-square flex items-center justify-center">
        <Icon size={25} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-medium-gray">{title}</span>
        <h1 className="text-3xl font-medium text-dark-gray">{value}</h1>
      </div>
    </div>
  );
};

const ReferalStats = () => {
  return (
    <div className="flex flex-col gap-2 items-center md:flex-row">
      <ReferalStatCard Icon={FaUsers} title="მოწვეუილი მეგობრები" value="12" />
      <ReferalStatCard
        Icon={FaRegCreditCard}
        title="მეგობრების ნავაჭრი"
        value="745"
      />
      <ReferalStatCard
        Icon={RiCoinsFill}
        title="შენი ბონუსი (10%)"
        value="84.50"
      />
    </div>
  );
};

export default ReferalStats;
