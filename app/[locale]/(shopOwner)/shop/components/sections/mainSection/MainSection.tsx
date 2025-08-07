import OrdersTable from "./OrdersTable";
import OverviewStats from "./OverviewStats";

const MainSection = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-4xl font-semibold">Overview</h1>
      <OverviewStats />
      <OrdersTable />
    </div>
  );
};

export default MainSection;
