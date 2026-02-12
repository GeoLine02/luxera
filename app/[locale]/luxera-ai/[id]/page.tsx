import AllChatToggleButton from "../AllChatToggleButton";
import Chat from "./components/Chat";
import GoBackButton from "../GoBackButton";
import { getChatById } from "../services/chatbot";

interface ChatPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const { id } = await params;

  const chatData = await getChatById(id);
  return (
    <>
      <div className="flex-1 flex flex-col px-4 pt-4 md:px-11 md:pt-6">
        <div className="flex justify-between md:justify-end items-center mb-4 ">
          <div className="md:hidden">
            <AllChatToggleButton />
          </div>
          <GoBackButton />
        </div>

        <Chat messagesData={chatData} chatId={id} />
      </div>
    </>
  );
};

export default ChatPage;
