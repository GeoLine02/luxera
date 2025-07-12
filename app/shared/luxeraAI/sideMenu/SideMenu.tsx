import AllChats from "./AllChats";

const SideMenu = () => {
  return (
    <div className="bg-light-pink">
      <section className="p-4 space-y-6">
        <div>
          <h1 className="text-5xl font-FRL font-medium">Luxera AI</h1>
        </div>

        <button className="cursor-pointer">
          {/* AI icon */}
          <span className="font-bold">All Chats</span>
        </button>
      </section>
      <AllChats />
    </div>
  );
};

export default SideMenu;
