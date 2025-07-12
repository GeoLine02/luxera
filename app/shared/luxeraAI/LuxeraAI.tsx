"use client";

import { useSelector } from "react-redux";
import Chat from "./Chat";
import SideMenu from "./sideMenu/SideMenu";
import { RootState } from "@/app/store/store";
import ChatInput from "./ChatInput";
import { IoCloseCircle } from "react-icons/io5";

const LuxeraAI = () => {
  const { isChatOpen } = useSelector(
    (state: RootState) => state.luxeraAIReducer
  );

  console.log(isChatOpen);

  if (isChatOpen) {
    return (
      <div className="rounded-3xl w-screen h-screen fixed left-0 top-0 z-50 flex bg-[linear-gradient(158deg,rgba(255,255,255,1)_29%,rgba(245,225,245,1)_59%,rgba(255,255,255,1)_96%)]">
        <SideMenu />
        <div className="w-full p-11">
          <div className="flex justify-end">
            <IoCloseCircle size={40} />
          </div>
          <div className="flex flex-col gap-2 w-full pb-11 h-full">
            <Chat />
            <ChatInput />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default LuxeraAI;
