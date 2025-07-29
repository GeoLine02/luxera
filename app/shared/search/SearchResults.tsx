import classNames from "classnames";
// import SearchFilters from "./SearchFilters";
import { SearchFiltersType } from "@/app/types/search";
import { Dispatch, SetStateAction } from "react";

interface SearchResultsProps {
  isSearchOpen: boolean;
  activeSearchFilter: SearchFiltersType;
  setActiveSearchFilters: Dispatch<SetStateAction<SearchFiltersType>>;
}

const SearchResults = ({
  isSearchOpen,
}: // activeSearchFilter,
// setActiveSearchFilters,
SearchResultsProps) => {
  const searchResultsStyles = classNames("dropdown-animation", {
    "dropdown-open": isSearchOpen,
    "dropdown-closed": !isSearchOpen,
  });

  return (
    <div
      className={`${searchResultsStyles} top-12 md:top-12 left-0 absolute z-50  w-[calc(100%-32px)] ml-4 md:w-full min-h-[400px] bg-ice-blue rounded-b-xl border border-t-0 border-medium-gray`}
    >
      {/* <SearchFilters
        activeSearchFilter={activeSearchFilter}
        setActiveSearchFilter={setActiveSearchFilters}
      /> */}
    </div>
  );
};

export default SearchResults;
