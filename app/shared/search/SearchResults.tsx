import { ProductWithPrimaryVariant } from "@/app/types/product";
import classNames from "classnames";
import SearchProductCard from "./SearchProductCard";
import { ClipLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface SearchResultsProps {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchResult: ProductWithPrimaryVariant[];
  loading: boolean;
  error: string | null;
  searchValue: string;
}

const SearchResults = ({
  isSearchOpen,
  setIsSearchOpen,
  error,
  loading,
  searchResult,
  searchValue,
}: SearchResultsProps) => {
  const searchResultsStyles = classNames("dropdown-animation", {
    "dropdown-open": isSearchOpen,
    "dropdown-closed": !isSearchOpen,
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleShowMore = () => {
    const param = new URLSearchParams(searchParams);

    param.set("search", searchValue);
    setIsSearchOpen(false);
    router.push(`/products?search=${searchValue}`);
  };

  const t = useTranslations("Header");

  return (
    <div
      className={`${searchResultsStyles} top-12 md:top-12 left-0 absolute z-50 w-[calc(100%-32px)] ml-4 md:w-full bg-ice-blue rounded-b-xl border border-t-0 border-medium-gray md:ml-0 overflow-y-hidden pb-4`}
    >
      <div>
        {loading && (
          <div>
            <ClipLoader size={30} />
          </div>
        )}
        <div>{error && <h1>{error}</h1>}</div>
        <div className="grid grid-cols-1 xl:grid-cols-2 p-2 xl:p-3 gap-2 md:gap-3 xl:gap-11">
          {searchResult?.map((product) => (
            <SearchProductCard
              key={product.id}
              product={product}
              setIsSearchOpen={setIsSearchOpen}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleShowMore}
          className="text-lg font-medium px-6 p-2 border-t-3 rounded-full bg-black text-white cursor-pointer"
        >
          {t("search.searchResults.allProductsButtonLabel")}
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
