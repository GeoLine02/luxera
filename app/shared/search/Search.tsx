import Button from "@/app/ui/Button";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  console.log(searchValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex gap-8 items-center">
      <div className="flex items-center gap-2 border-4 border-light-gray rounded-md w-full bg-ice-blue">
        <div>
          <IoIosSearch size={35} />
        </div>
        <input
          onChange={onChange}
          value={searchValue}
          type="text"
          className="w-full outline-none border-none focus:border-none py-4 font-medium"
          placeholder="Type something"
        />
      </div>
      <Button
        bgColor="darkPink"
        rounded="lg"
        title="Search"
        type="button"
        className="py-5 px-11 !w-fit font-medium"
        titleColor="white"
      />
    </div>
  );
};

export default Search;
