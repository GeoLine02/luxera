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
import Button from "@/app/ui/Button";
import Link from "next/link";

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

  const searchBarStyles = classNames({
    "rounded-bl-none rounded-br-none rounded-xl": isSearchOpen,
  });

  if (!isSearchOpen) {
    return (
      <div className="flex gap-6 items-center">
        <div
          onClick={handleOpenSearch}
          className="flex items-center gap-2 border-4 p-2 border-light-gray rounded-xl flex-1 bg-ice-blue md:px-4 md:py-6 cursor-pointer"
        >
          <div>
            <IoIosSearch className="text-2xl md:text-4xl" />
          </div>
          <h1 className="text-xs md:text-base">Search Something...</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-2 flex-col items-center">
            <Button
              bgColor="black"
              rounded="lg"
              title="Search"
              type="button"
              className="py-2 !w-full font-medium"
              titleColor="white"
            />
            <Link href={"/luxera-ai"}>
              <Button
                bgColor="lightPink"
                rounded="lg"
                title="Luxera AI"
                type="button"
                className="!w-full py-2 px-14 font-medium"
                titleColor="black"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={searchBarStyles + " flex gap-6 items-center"}>
        <div className="flex items-center gap-2 border-4 px-2 border-light-gray rounded-xl flex-1 bg-ice-blue md:px-4 lg:relative">
          <div>
            <IoIosSearch className="text-2xl md:text-4xl" />
          </div>
          <input
            ref={inputRef}
            onChange={onChange}
            value={searchValue}
            type="text"
            className="w-full outline-none border-none focus:border-none py-2 md:py-7 font-medium "
            placeholder="Type something"
          />

          <SearchResults
            activeSearchFilter={activeSearchFilter}
            setActiveSearchFilters={setActiveSearchFilter}
            isSearchOpen={isSearchOpen}
          />
        </div>
        <div className="flex gap-2 flex-col items-center">
          <Button
            bgColor="black"
            rounded="lg"
            title="Search"
            type="button"
            className="py-2 !w-full font-medium"
            titleColor="white"
          />
          <Link href={"/luxera-ai"}>
            <Button
              bgColor="lightPink"
              rounded="lg"
              title="Luxera AI"
              type="button"
              className="!w-full py-2 px-14 font-medium"
              titleColor="black"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
