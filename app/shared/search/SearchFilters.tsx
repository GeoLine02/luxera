import { SearchFiltersType } from "@/app/types/search";
import Button from "@/app/ui/Button";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

interface SectionProps {
  title: string;
  isActiveSearchFilter: boolean;
  setActiveSearchFilter: Dispatch<SetStateAction<SearchFiltersType>>;
}

const Section = ({
  title,
  isActiveSearchFilter,
  setActiveSearchFilter,
}: SectionProps) => {
  const activeFilterStyles = classNames({
    "!bg-dirty-pink text-warm-white": isActiveSearchFilter,
  });

  const handleSetActiveFilter = (title: SearchFiltersType) => {
    setActiveSearchFilter(title);
  };

  return (
    <Button
      rounded="full"
      title={title}
      type="button"
      bgColor="iceBlue"
      titleColor="black"
      onClick={() => handleSetActiveFilter(title as SearchFiltersType)}
      className={`${activeFilterStyles} font-semibold py-2 px-6 !w-fit border border-dirty-pink`}
    />
  );
};

const sections = ["All", "Cards", "Gifts", "Flowers", "Candy"];

interface SearchFiltersProps {
  setActiveSearchFilter: Dispatch<SetStateAction<SearchFiltersType>>;
  activeSearchFilter: SearchFiltersType;
}

const SearchFilters = ({
  setActiveSearchFilter,
  activeSearchFilter,
}: SearchFiltersProps) => {
  return (
    <div>
      <div className="flex items-center gap-10 py-3 px-5">
        {sections.map((section) => (
          <Section
            setActiveSearchFilter={setActiveSearchFilter}
            isActiveSearchFilter={section === activeSearchFilter}
            title={section}
            key={section}
          />
        ))}
      </div>
      <div className="px-4">
        <hr className="border-t border-dirty-pink px-6 " />
      </div>
    </div>
  );
};

export default SearchFilters;
