const LayoutSideBar = () => {
  return (
    <div>
      <div className="space-y-1">
        <h1 className="font-medium">Choose a Layout</h1>
        <p className="text-sm">
          Pick a pre-designed layout to begin personalising (or leave it blank).
        </p>
      </div>
      <div>{/* TODO: Layouts list */}</div>
    </div>
  );
};

export default LayoutSideBar;
