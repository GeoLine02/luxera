import { BsThreeDots } from "react-icons/bs";

const AllChats = () => {
  return (
    <div className="space-y-0.5 w-screen md:max-w-[300px] md:w-auto text-white">
      <div className="flex items-center justify-between pr-4 hover:bg-luxera-menu-bg-hover">
        <h1 className="w-full px-6 py-2 cursor-pointer">Chat 1</h1>
        <BsThreeDots size={25} color="white" />
      </div>
      <div className="flex items-center justify-between pr-4">
        <h1 className="w-full px-6 py-2 cursor-pointer">Chat 1</h1>
        <BsThreeDots size={25} color="white" />
      </div>
      <div className="flex items-center justify-between pr-4">
        <h1 className=" w-full px-6 py-2 cursor-pointer">Chat 1</h1>
        <BsThreeDots size={25} color="white" />
      </div>
    </div>
  );
};

export default AllChats;
