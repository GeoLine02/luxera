import Chat from "./Chat";
import SideMenu from "./sideMenu/SideMenu";
import ChatInput from "./ChatInput";
import GoBackButton from "./GoBackButton";
import AllChatToggleButton from "./AllChatToggleButton";

const LuxeraAI = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-60px)] md:h-screen bg-[linear-gradient(158deg,rgba(255,255,255,1)_29%,rgba(245,225,245,1)_59%,rgba(255,255,255,1)_96%)]">
      <SideMenu />
      <div className="flex-1 flex flex-col px-4 pt-4 pb-24 md:px-11 md:pt-6">
        <div className="flex justify-between md:justify-end items-center mb-4">
          <div className="md:hidden">
            <AllChatToggleButton />
          </div>
          <GoBackButton />
        </div>
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
          <Chat />
        </div>
        <div className="fixed md:static  bottom-6 left-0 right-0 px-4 py-2  md:p-0">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default LuxeraAI;
