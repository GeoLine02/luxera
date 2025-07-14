import Chat from "./Chat";
import SideMenu from "./sideMenu/SideMenu";
import ChatInput from "./ChatInput";
import GoBackButton from "./GoBackButton";
import AllChatToggleButton from "./AllChatToggleButton";

const LuxeraAI = () => {
  return (
    <div className="h-screen flex bg-[linear-gradient(158deg,rgba(255,255,255,1)_29%,rgba(245,225,245,1)_59%,rgba(255,255,255,1)_96%)]">
      <SideMenu />
      <div className="w-full p-4 md:p-11 md:pt-6">
        <div className="flex justify-between md:justify-end">
          <div className="md:hidden">
            <AllChatToggleButton />
          </div>
          <GoBackButton />
        </div>
        <div className="flex flex-col gap-2 w-full pb-11 h-full">
          <Chat />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default LuxeraAI;
