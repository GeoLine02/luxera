"use client";

import { toggleAllChat } from "@/app/store/features/luxeraAISlice";
import { AppDispatch } from "@/app/store/store";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AllChatToggleButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleAllChat = () => {
    dispatch(toggleAllChat());
  };

  return (
    <div
      onClick={handleToggleAllChat}
      className="bg-black rounded-md p-2 cursor-pointer"
    >
      <FaBars size={25} color="white" />
    </div>
  );
};

export default AllChatToggleButton;
