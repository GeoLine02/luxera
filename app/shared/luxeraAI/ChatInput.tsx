import { IoMdSend } from "react-icons/io";

const ChatInput = () => {
  return (
    <div className="border bg-white border-medium-gray rounded-xl flex items-center p-2.5 px-4">
      <input
        placeholder="describe person so i can help you find best gift for him/her "
        name="aiChat"
        className="flex-1"
        type="text"
      />
      <IoMdSend size={25} />
    </div>
  );
};

export default ChatInput;
