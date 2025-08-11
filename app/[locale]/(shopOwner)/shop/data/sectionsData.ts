import { FaBoxOpen, FaWallet } from "react-icons/fa";
import {
  IoIosAddCircle,
  IoIosSpeedometer,
  IoMdMegaphone,
  IoMdSettings,
} from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";

export const sectionsData = [
  {
    accessorKey: "main",
    label: "Main",
    Icon: IoIosSpeedometer,
  },
  {
    accessorKey: "addProduct",
    label: "Add Product",
    Icon: IoIosAddCircle,
  },
  {
    accessorKey: "myProducts",
    label: "My Products",
    Icon: FaBoxOpen,
  },
  {
    accessorKey: "finances",
    label: "Finances",
    Icon: FaWallet,
  },
  {
    accessorKey: "referal",
    label: "Referal",
    Icon: GiReceiveMoney,
  },
  {
    accessorKey: "advertisment",
    label: "Advertisment",
    Icon: IoMdMegaphone,
  },
  {
    accessorKey: "settings",
    label: "Settings",
    Icon: IoMdSettings,
  },
];
