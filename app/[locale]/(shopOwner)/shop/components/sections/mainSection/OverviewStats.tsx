interface OverviewCardProps {
  label: string;
  value: string;
}

const OverviewCard = ({ label, value }: OverviewCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full shadow-xl shadow-medium-gray-gray">
      <h2 className="text-medium-gray">{label}</h2>
      <h1 className="text-3xl text-dark-gray font-bold">{value}</h1>
    </div>
  );
};

const OverviewStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-evenly mt-6">
      <OverviewCard label="Whole Income" value="1,450 GEL" />
      <OverviewCard label="New Order" value="3" />
      <OverviewCard label="Product Quantity" value="12" />
      <OverviewCard label="Withdraw" value="320 GEL" />
    </div>
  );
};

export default OverviewStats;
