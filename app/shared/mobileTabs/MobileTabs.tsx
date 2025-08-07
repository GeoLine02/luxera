"use client";

import { GoHome } from "react-icons/go";
import { LuLayoutGrid } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { openCategoiresModal } from "@/app/store/features/categoriesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";

const MobileTabs = () => {
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenCategories = () => {
    dispatch(openCategoiresModal());
  };

  if (pathName.includes("/luxera-ai") || pathName.includes("/shop"))
    return null;

  return (
    <div className="bg-white p-4 flex justify-around items-center gap-4 fixed bottom-0 left-0 z-50 w-full xs:hidden">
      <Link href={"/"} className="flex flex-col items-center">
        <GoHome size={25} />
        <h1 className="text-xs">Home</h1>
      </Link>
      <div
        onClick={handleOpenCategories}
        className="flex flex-col items-center"
      >
        <LuLayoutGrid size={25} />
        <h1 className="text-xs">Catgory</h1>
      </div>
      <Link href={"/luxera-ai"} className="flex flex-col items-center">
        <RiApps2AiLine size={25} />
        <h1 className="text-xs">Luxera AI</h1>
      </Link>
      <Link href={"/cart"} className="flex flex-col items-center">
        <LuShoppingCart size={25} />
        <h1 className="text-xs">Cart</h1>
      </Link>
      <Link href={"/profile"} className="flex flex-col items-center">
        <CgProfile size={25} />
        <h1 className="text-xs">Cart</h1>
      </Link>
    </div>
  );
};

export default MobileTabs;
