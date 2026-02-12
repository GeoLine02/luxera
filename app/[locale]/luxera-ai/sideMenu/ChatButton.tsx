"use client";

import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

interface ChatButtonProps {
  id: string;
  chatName: string;
  handleCloseAllChat: () => void;
}

const ChatButton = ({ id, chatName, handleCloseAllChat }: ChatButtonProps) => {
  return (
    <Link
      onClick={handleCloseAllChat}
      href={`/luxera-ai/${id}`}
      className="flex items-center justify-between pr-4 hover:bg-luxera-menu-bg-hover"
    >
      <h1 className="w-full px-6 py-2 cursor-pointer max-w-[280px] truncate">
        {chatName}
      </h1>
      <BsThreeDots size={25} color="white" />
    </Link>
  );
};

export default ChatButton;
