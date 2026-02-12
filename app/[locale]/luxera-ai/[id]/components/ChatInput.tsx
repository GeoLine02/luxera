import { Dispatch, SetStateAction } from "react";
import { IoMdSend } from "react-icons/io";

interface ChatInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSendMessage: () => Promise<void>;
  loading: boolean;
}

const ChatInput = ({
  input,
  setInput,
  handleSendMessage,
  loading,
}: ChatInputProps) => {
  return (
    <div className="rounded-xl flex items-center px-4 py-2 gap-2 w-full max-w-3xl mx-auto shadow-sm bg-secondary-bg-gray">
      <input
        placeholder="Describe the person so I can help you find the best gift"
        name="aiChat"
        className="flex-1 text-sm md:text-base focus:outline-none text-white"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // prevent new line
            handleSendMessage();
          }
        }}
      />
      <button disabled={loading} onClick={handleSendMessage}>
        <IoMdSend size={24} className="text-white hover:scale-105 transition" />
      </button>
    </div>
  );
};

export default ChatInput;
