import MyProductCard from "./MyProductCard";

const MyProductsList = () => {
  return (
    <div className="mt-6 space-y-2 overflow-y-auto">
      <MyProductCard
        title="პერსონალური ჭიქა"
        id="456789"
        views="12 / 250"
        sales="0 / 8"
        status="active"
      />
      <MyProductCard
        title="პერსონალური ჭიქა"
        id="456789"
        views="12 / 250"
        sales="0 / 8"
        status="active"
      />
      <MyProductCard
        title="პერსონალური ჭიქა"
        id="456789"
        views="12 / 250"
        sales="0 / 8"
        status="active"
      />
      <MyProductCard
        title="პერსონალური ჭიქა"
        id="456789"
        views="12 / 250"
        sales="0 / 8"
        status="active"
      />
    </div>
  );
};

export default MyProductsList;
