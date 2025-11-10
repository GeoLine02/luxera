"use client";
import classNames from "classnames";
import { SearchFiltersType } from "@/app/types/search";
import { Dispatch, SetStateAction } from "react";
import { useSearchProducts } from "@/app/hooks/useSearchProducts";
import { Product } from "@/app/types/homepage";
import Image from "next/image";
import SearchedProduct from "./SearchedProduct";


interface SearchResultsProps {
  isSearchOpen: boolean;
  activeSearchFilter: SearchFiltersType;
  setActiveSearchFilters: Dispatch<SetStateAction<SearchFiltersType>>;
  searchResult: Product[],
  loading: boolean,
  error: string | null
}

const SearchResults = ({
  isSearchOpen,
  activeSearchFilter,
  setActiveSearchFilters,
  searchResult,
  loading,
  error
}: SearchResultsProps) => {
  const searchResultsStyles = classNames("dropdown-animation", {
    "dropdown-open": isSearchOpen,
    "dropdown-closed": !isSearchOpen,
  });


  

  return (
    <div
      className={`${searchResultsStyles} top-12 md:top-12 left-0 absolute z-50  w-[calc(100%-32px)] ml-4 md:w-full min-h-[400px] bg-white rounded-b-xl border border-t-0 border-medium-gray md:ml-0 p-4`}
    >
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && !searchResult.length  &&  (
        <p className="text-center text-gray-500">No results found</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResult.map((product) => (
          <SearchedProduct product={product}/>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
