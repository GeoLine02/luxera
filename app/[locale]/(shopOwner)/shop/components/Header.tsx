"use client";

import { openSection } from "@/app/store/features/shopSlice";
import { AppDispatch } from "@/app/store/store";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenSection = () => {
    dispatch(openSection());
  };

  return (
    <header className="flex items-center bg-white justify-between p-4 md:hidden">
      <h1 className="text-2xl font-bold">Luxera Shop</h1>
      <FaBars
        onClick={handleOpenSection}
        className="cursor-pointer"
        size={25}
      />
    </header>
  );
};

export default Header;
