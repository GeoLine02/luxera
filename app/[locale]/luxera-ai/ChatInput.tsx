import { IoMdSend } from "react-icons/io";

const ChatInput = () => {
  return (
    <div className="rounded-xl flex items-center px-4 py-2 gap-2 w-full max-w-3xl mx-auto shadow-sm">
      <input
        placeholder="Describe the person so I can help you find the best gift"
        name="aiChat"
        className="flex-1 text-sm md:text-base focus:outline-none"
        type="text"
      />
      <button>
        <IoMdSend
          size={24}
          className="text-primary hover:scale-105 transition"
        />
      </button>
    </div>
  );
};

export default ChatInput;
