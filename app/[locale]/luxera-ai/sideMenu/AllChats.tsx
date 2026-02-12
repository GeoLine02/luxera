import { ChatType } from "@/app/types/ai";
import ChatButton from "./ChatButton";

interface AllChatsProps {
  chats: ChatType[];
  handleCloseAllChat: () => void;
}

const AllChats = ({ chats, handleCloseAllChat }: AllChatsProps) => {
  return (
    <div className="space-y-0.5 w-screen md:max-w-[300px] md:w-auto text-white">
      {chats.map((chat: ChatType) => (
        <ChatButton
          handleCloseAllChat={handleCloseAllChat}
          key={chat.id}
          id={chat.id}
          chatName={chat.title}
        />
      ))}
    </div>
  );
};

export default AllChats;
