import BankAccount from "./BankAccount";
import CurrentBalance from "./CurrentBalance";
import WithdrawHistory from "./WithdrawHistory";

const FinancesSection = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-dark-gray font-medium">
        Finances
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:space-y-4">
        <BankAccount />
        <div className="space-y-4 w-full md:max-w-[25%]">
          <CurrentBalance currentBalance="320.50" />
          <WithdrawHistory />
        </div>
      </div>
    </div>
  );
};

export default FinancesSection;
