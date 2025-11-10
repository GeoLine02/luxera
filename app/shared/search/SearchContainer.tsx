"use client";

import { useState, useEffect } from "react";
import Search from "./Search";
import { SearchFiltersType } from "@/app/types/search";
import useOutsideClick from "@/app/hooks/useOutSideClick";
import SearchResults from "./SearchResults";
import useDebounce from "@/app/hooks/useDebounce";
import { useSearchProducts } from "@/app/hooks/useSearchProducts";


const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeSearchFilter, setActiveSearchFilter] =
    useState<SearchFiltersType>("All");

  const searchRef = useOutsideClick<HTMLDivElement>(() =>
    setIsSearchOpen(false)
  );

  useEffect(() => {
  fetch("https://luxera-api.onrender.com")
    .then(res => res.json())
    .then(data => console.log("API Response:", data))
    .catch(err => console.error("Error fetching:", err));
}, []);
  const { searchResult, loading, error } = useSearchProducts(searchValue, activeSearchFilter);

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

      {/* ✅ Added searchValue prop here */}
      <SearchResults
        activeSearchFilter={activeSearchFilter}
        isSearchOpen={isSearchOpen}
        setActiveSearchFilters={setActiveSearchFilter}
        searchResult={searchResult}
        loading={loading}
        error={error}

      />
    </div>
  );
};

export default SearchContainer;
