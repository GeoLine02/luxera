import Button from "@/app/ui/Button";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

interface SearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex gap-6 items-center">
      <div className="flex items-center gap-2 border-4 px-2 border-light-gray rounded-xl flex-1 bg-ice-blue md:px-4">
        <div>
          <IoIosSearch className="text-2xl md:text-4xl" />
        </div>
        <input
          onChange={onChange}
          value={searchValue}
          type="text"
          className="w-full outline-none border-none focus:border-none py-2 md:py-7 font-medium "
          placeholder="Type something"
        />
      </div>
      <div>
        <div className="hidden md:flex gap-2 flex-col items-center">
          <Button
            bgColor="dirtyPink"
            rounded="lg"
            title="Search"
            type="button"
            className="py-2  !w-full font-medium"
            titleColor="white"
          />
          <Button
            bgColor="darkPink"
            rounded="lg"
            title="Find gift with Luxera AI"
            type="button"
            className="!w-full p-2 font-medium"
            titleColor="white"
          />
        </div>
        <button className="bg-dirty-pink rounded-xl p-3 md:hidden cursor-pointer">
          <FaBars size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Search;
