"use client";

import { useDispatch, useSelector } from "react-redux";
import AllChats from "./AllChats";
import { RootState } from "@/app/store/store";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";
import { toggleAllChat } from "@/app/store/features/luxeraAISlice";
import { RiApps2AiLine } from "react-icons/ri";

const SideMenu = () => {
  const { isAllChatOpen } = useSelector(
    (state: RootState) => state.luxeraAIReducer
  );

  const dispatch = useDispatch();

  const chatToggleAnimation = classNames(
    "absolute duration-300 transition-all z-50 top-0 md:static",
    {
      "-left-[100%]": !isAllChatOpen,
      "left-0": isAllChatOpen,
    }
  );

  const handleCloseAllChat = () => {
    dispatch(toggleAllChat());
  };

  return (
    <div
      className={`${chatToggleAnimation} bg-luxera-menu-bg  w-full  h-screen md:max-w-[300px]`}
    >
      <section className="p-4 space-y-6 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-5xl font-FRL font-medium">
            Luxera AI
          </h1>
          <div
            onClick={handleCloseAllChat}
            className="cursor-pointer md:hidden pr-2"
          >
            <IoClose size={30} color="white" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <RiApps2AiLine size={25} color="white" />
          <h1 className="text-white">New Chat</h1>
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
