"use client";

import { useState } from "react";
import Search from "./Search";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-4 lg:px-11">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
};

export default SearchContainer;
