import { GoHome } from "react-icons/go";
import { LuLayoutGrid } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons/lib";
import Link from "next/link";

const tabs = [
  {
    accessorKey: "home",
    label: "Home",
    icon: GoHome,
    path: "/",
  },
  {
    accessorKey: "category",
    label: "Category",
    icon: LuLayoutGrid,
    path: "/category",
  },
  {
    accessorKey: "luxeraAI",
    label: "Luxera AI",
    icon: RiApps2AiLine,
    path: "/luxera-ai",
  },
  {
    accessorKey: "cart",
    label: "Cart",
    icon: LuShoppingCart,
    path: "/cart",
  },
  {
    accessorKey: "profile",
    label: "Profile",
    icon: CgProfile,
    path: "/profile",
  },
];

interface TabProps {
  Icon: IconType;
  label: string;
  path: string;
}

const Tab = ({ Icon, label, path }: TabProps) => {
  return (
    <Link href={path} className="flex flex-col items-center">
      <Icon size={25} />
      <h1 className="text-xs">{label}</h1>
    </Link>
  );
};

const MobileTabs = () => {
  return (
    <div className="bg-white p-4 flex justify-around items-center gap-4 fixed bottom-0 left-0 z-50 w-full xs:hidden">
      {tabs.map((tab) => (
        <Tab
          key={tab.accessorKey}
          Icon={tab.icon}
          label={tab.label}
          path={tab.path}
        />
      ))}
    </div>
  );
};

export default MobileTabs;
