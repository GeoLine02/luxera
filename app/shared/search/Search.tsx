import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { IoIosSearch } from "react-icons/io";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { setSearchValue } from "@/app/store/features/searchSlice";

interface SearchProps {
  searchValue: string;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
  isSearchOpen: boolean;
}

const Search = ({
  searchValue,
  isSearchOpen,
  setIsSearchOpen,
}: SearchProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
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
