import ReferalStats from "./ReferalStats";
import ReferralTable from "./ReferalTable";
import YourLReferalLink from "./YourLReferalLink";

const ReferalSection = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full space-y-4">
      <div>
        <h1 className="text-3xl font-medium text-dark-gray md:text-2xl">
          რეფერალური პროგრამა
        </h1>
        <p className="text-medium-gray">
          მოიწვიე მეგობრები და მიიღე ბონისი მათი ყველი შენაძენიდან.
        </p>
      </div>
      <ReferalStats />
      <YourLReferalLink />
      <ReferralTable />
    </div>
  );
};

export default ReferalSection;
