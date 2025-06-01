const SiteRoutes = () => {
  return (
    <div className="flex gap-28 font-semibold">
      <div className="space-y-6">
        <h1>Shop</h1>
        <ul className="space-y-2">
          <li className="cursor-pointer">Gift cards</li>
          <li className="cursor-pointer">L.G registry </li>
          <li className="cursor-pointer">sitemap</li>
        </ul>
      </div>
      <div className="space-y-6">
        <h1>Help</h1>
        <ul className="space-y-2">
          <li className="cursor-pointer">Help Center</li>
          <li className="cursor-pointer">Privacy settings</li>
        </ul>
      </div>
    </div>
  );
};

export default SiteRoutes;
