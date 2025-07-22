"use client";

import { useState } from "react";
import Search from "./Search";
import { SearchFiltersType } from "@/app/types/search";
import useOutsideClick from "@/app/hooks/useOutSideClick";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  const [activeSearchFilter, setActiveSearchFilter] =
    useState<SearchFiltersType>("All");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const searchRef = useOutsideClick<HTMLDivElement>(() =>
    setIsSearchOpen(false)
  );

  return (
    <div ref={searchRef} className="w-full px-5">
      <Search
        setActiveSearchFilter={setActiveSearchFilter}
        activeSearchFilter={activeSearchFilter}
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default SearchContainer;
