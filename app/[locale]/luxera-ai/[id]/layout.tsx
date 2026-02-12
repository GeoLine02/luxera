import { getAllChats } from "../services/chatbot";
import SideMenu from "../sideMenu/SideMenu";

const LuxeraAILayout = async ({ children }: { children: React.ReactNode }) => {
  const chatsData = await getAllChats();
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-screen bg-deep-gray">
      <SideMenu chatsData={chatsData.data} />
      {children}
    </div>
  );
};

export default LuxeraAILayout;
