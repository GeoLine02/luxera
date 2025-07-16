import { RiApps2AiLine } from "react-icons/ri";

const Chat = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full text-center px-2 md:px-8">
      <RiApps2AiLine size={30} className="mb-4 text-white" />
      <h1 className="text-xl text-white md:text-2xl font-medium">
        Let Luxera AI Help You
      </h1>
    </div>
  );
};

export default Chat;
