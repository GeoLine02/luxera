"use client";

import { useDispatch, useSelector } from "react-redux";
import AllChats from "./AllChats";
import { RootState } from "@/app/store/store";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";
import {
  saveChatsData,
  toggleAllChat,
} from "@/app/store/features/luxeraAISlice";
import { RiApps2AiLine } from "react-icons/ri";
import Link from "next/link";
import { ChatType } from "@/app/types/ai";
import { useEffect } from "react";

interface SideMenuProps {
  chatsData: ChatType[];
}

const SideMenu = ({ chatsData }: SideMenuProps) => {
  const { isAllChatOpen, chats } = useSelector(
    (state: RootState) => state.luxeraAIReducer,
  );
  const dispatch = useDispatch();

  const chatToggleAnimation = classNames(
    "absolute duration-300 transition-all z-50 top-0 md:static",
    {
      "-left-[100%]": !isAllChatOpen,
      "left-0": isAllChatOpen,
    },
  );

  const handleCloseAllChat = () => {
    dispatch(toggleAllChat());
  };

  useEffect(() => {
    dispatch(saveChatsData(chatsData));
  }, [dispatch, chatsData]);

  return (
    <div
      className={`${chatToggleAnimation} bg-luxera-menu-bg  w-full  h-screen md:max-w-[300px]`}
    >
      <section className="p-4 space-y-6 text-white">
        <div className="flex items-center justify-between cursor-pointer">
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

        <Link
          href="/luxera-ai/new-chat"
          className="flex items-center gap-2 cursor-pointer"
        >
          <RiApps2AiLine size={25} color="white" />
          <h1 className="text-white">New Chat</h1>
        </Link>

        <button className="cursor-pointer">
          {/* AI icon */}
          <span className="font-bold">All Chats</span>
        </button>
      </section>

      <AllChats handleCloseAllChat={handleCloseAllChat} chats={chats} />
    </div>
  );
};

export default SideMenu;
