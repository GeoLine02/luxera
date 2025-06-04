import classNames from "classnames";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { IoIosSearch } from "react-icons/io";
import SearchResults from "./SearchResults";
import { SearchFiltersType } from "@/app/types/search";

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
  activeSearchFilter,
  setActiveSearchFilter,
}: SearchProps) => {
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

  const searchBarStyles = classNames("searchBar", {
    "rounded-bl-none rounded-br-none rounded-xl": isSearchOpen,
  });

  const searchInputStyles = classNames("searchInput", {
    block: isSearchOpen,
    hidden: !isSearchOpen,
  });

  if (!isSearchOpen) {
    return (
      <div
        className={`flex items-center px-5 py-4 rounded-full bg-ice-blue border border-dirty-pink cursor-pointer ${searchBarStyles}`}
        onClick={handleOpenSearch}
      >
        <h1 className="w-full">type something...</h1>
        <div>
          <IoIosSearch size={25} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`flex items-center px-5 py-4 rounded-full bg-ice-blue border border-dirty-pink ${searchBarStyles}`}
      >
        <input
          ref={inputRef}
          onChange={onChange}
          value={searchValue}
          type="text"
          placeholder="type something..."
          className={`${searchInputStyles} w-full font-semibold border-none outline-none focus:border-none`}
        />
        <div>
          <IoIosSearch size={25} />
        </div>
      </div>
      <SearchResults
        activeSearchFilter={activeSearchFilter}
        setActiveSearchFilters={setActiveSearchFilter}
        isSearchOpen={isSearchOpen}
      />
    </div>
  );
};

export default Search;
