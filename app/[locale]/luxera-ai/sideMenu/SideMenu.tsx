"use client";

import { useDispatch, useSelector } from "react-redux";
import AllChats from "./AllChats";
import { RootState } from "@/app/store/store";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";
import { toggleAllChat } from "@/app/store/features/luxeraAISlice";

const SideMenu = () => {
  const { isAllChatOpen } = useSelector(
    (state: RootState) => state.luxeraAIReducer
  );

  const dispatch = useDispatch();

  console.log(isAllChatOpen);
  const chatToggleAnimation = classNames(
    "absolute duration-300 transition-all top-0 md:static",
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
      className={`${chatToggleAnimation} bg-light-pink w-full max-w-[240px] h-[calc(100%-80px)] md:h-full`}
    >
      <section className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-5xl font-FRL font-medium">
            Luxera AI
          </h1>
          <div onClick={handleCloseAllChat} className="cursor-pointer">
            <IoClose size={30} color="black" />
          </div>
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
