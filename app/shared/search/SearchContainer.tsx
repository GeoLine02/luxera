"use client";

import { useState } from "react";
import Search from "./Search";
import useOutsideClick from "@/app/hooks/useOutSideClick";
import SearchResults from "./SearchResults";
import useSearch from "./hooks/useSearch";
import { ProductWithPrimaryVariant } from "@/app/types/product";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const SearchContainer = () => {
  const { searchValue } = useSelector(
    (state: RootState) => state.searchReducer
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchRef = useOutsideClick<HTMLDivElement>(() =>
    setIsSearchOpen(false)
  );

  const [data, loading, error] = useSearch(searchValue);

  return (
    <div ref={searchRef} className="w-full px-4 md:px-0 md:mx-5 relative">
      <Search
        setIsSearchOpen={setIsSearchOpen}
        isSearchOpen={isSearchOpen}
        searchValue={searchValue}
      />

      <SearchResults
        searchValue={searchValue}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        error={error as string | null}
        loading={loading as boolean}
        searchResult={data as ProductWithPrimaryVariant[]}
      />
    </div>
  );
};

export default SearchContainer;
