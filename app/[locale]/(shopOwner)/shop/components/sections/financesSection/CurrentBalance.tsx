import Button from "@/app/ui/Button";

interface CurrentBalanceProps {
  currentBalance: string;
}

const CurrentBalance = ({ currentBalance }: CurrentBalanceProps) => {
  return (
    <div className="bg-white p-4 rounded-xl space-y-4 w-full shadow-xl shadow-gray-300">
      <span className="text-medium-gray">მიმდინარე ბალანსი</span>
      <h1 className="text-4xl font-bold text-dark-gray mt-2">
        {currentBalance} GEL
      </h1>
      <Button
        rounded="lg"
        title="თანხის გამოტანა"
        type="button"
        bgColor="darkGray"
        className="py-2 font-medium"
        disabled={currentBalance === "0.00"}
        titleColor="white"
      />
    </div>
  );
};

export default CurrentBalance;
