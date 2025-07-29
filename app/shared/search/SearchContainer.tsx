"use client";

import { useState } from "react";
import Search from "./Search";
import { SearchFiltersType } from "@/app/types/search";
import useOutsideClick from "@/app/hooks/useOutSideClick";
import SearchResults from "./SearchResults";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeSearchFilter, setActiveSearchFilter] =
    useState<SearchFiltersType>("All");

  const searchRef = useOutsideClick<HTMLDivElement>(() =>
    setIsSearchOpen(false)
  );

  return (
    <div ref={searchRef} className="w-full px-4 md:px-0 md:mx-5 relative">
      <Search
        setActiveSearchFilter={setActiveSearchFilter}
        activeSearchFilter={activeSearchFilter}
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <SearchResults
        activeSearchFilter={activeSearchFilter}
        isSearchOpen={isSearchOpen}
        setActiveSearchFilters={setActiveSearchFilter}
      />
    </div>
  );
};

export default SearchContainer;
