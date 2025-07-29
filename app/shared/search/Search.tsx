import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchFiltersType } from "@/app/types/search";
import classNames from "classnames";

interface SearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
  isSearchOpen: boolean;
  activeSearchFilter: SearchFiltersType;
  setActiveSearchFilter: Dispatch<SetStateAction<SearchFiltersType>>;
}

const Search = ({
  searchValue,
  setSearchValue,
  isSearchOpen,
  setIsSearchOpen,
}: // activeSearchFilter,
// setActiveSearchFilter,
SearchProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const inputRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const opendSearchStyles = classNames({
    "rounded-t-2xl rounded-b border-ice-blue": isSearchOpen,
    "rounded-full ": !isSearchOpen,
  });

  return (
    <div
      onClick={handleOpenSearch}
      className={`${opendSearchStyles} flex items-center px-4 py-2 bg-ice-blue border border-medium-gray`}
    >
      <input
        value={searchValue}
        onChange={onChange}
        placeholder="Type something..."
        className="flex-1 text-lg "
      />
      <IoIosSearch className="cursor-pointer" size={30} />
    </div>
  );
};

export default Search;
