"use client";

import { SellerProductStatusType } from "@/app/types/product";
import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import classNames from "classnames";
import { IoIosArrowDown } from "react-icons/io";

interface MyProductCardProps {
  title: string;
  id: string;
  views: string;
  sales: string;
  status: "active" | "inactive" | "outOfStock";
  handleChangeStatus: (
    productId: string,
    status: SellerProductStatusType
  ) => void;
}

const MyProductCard = ({
  title,
  id,
  views,
  sales,
  status,
  handleChangeStatus,
}: MyProductCardProps) => {
  const statusColorStyles = classNames({
    "text-green-600 bg-green-200": status === "active",
    "text-medium-gray bg-light-gray": status === "inactive",
    "text-red-500 bg-red-200": status === "outOfStock",
  });

  const getStatusTitle = () => {
    if (status === "active") {
      return "Active";
    }
    if (status === "inactive") {
      return "Inactive";
    }
    if (status === "outOfStock") {
      return "Out of Stock";
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white p-2 rounded-xl md:flex-row md:items-center">
      <div className="flex items-center gap-4 border-b border-medium-gray pb-4 md:pb-0 md:border-none">
        <div className="w-[70px] aspect-square bg-light-pink rounded-lg flex items-center justify-center font-medium text-2xl">
          Gift
        </div>
        <div className="md:max-w-[200px]">
          <h1 className="font-medium text-dark-gray truncate">{title}</h1>
          <h1 className="text-medium-gray">ID: #{id}</h1>
          <div className="md:hidden">
            <Dropdown>
              <Dropdown.Trigger>
                <span
                  className={`${statusColorStyles} rounded-md px-4 flex items-center gap-2 w-fit`}
                >
                  {getStatusTitle()}
                  <IoIosArrowDown size={20} />
                </span>
              </Dropdown.Trigger>
              <Dropdown.Menu
                expandMode="absolute"
                className="!top-9 min-w-[130px] rounded-lg"
              >
                <Dropdown.Item
                  onSelect={() => handleChangeStatus(id, "active")}
                  className="py-2"
                >
                  Active
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() => handleChangeStatus(id, "inactive")}
                  className="py-2"
                >
                  Inactive
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() => handleChangeStatus(id, "outOfStock")}
                  className="py-2"
                >
                  Out of stock
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around border-b border-medium-gray md:border-none w-full pb-2 md:pb-0">
        <div className="flex flex-col items-center">
          <h2 className="text-medium-gray text-sm">Views (day/month)</h2>
          <h1 className="font-medium">{views}</h1>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-medium-gray text-sm">Views (day/month)</h2>
          <h1 className="font-medium">{sales}</h1>
        </div>
        <div className="flex-col items-center hidden md:flex">
          <h1 className="text-medium-gray text-sm">status</h1>
          <Dropdown>
            <Dropdown.Trigger>
              <span
                className={`${statusColorStyles} rounded-md px-4 flex items-center gap-2`}
              >
                {getStatusTitle()}
                <IoIosArrowDown size={20} />
              </span>
            </Dropdown.Trigger>
            <Dropdown.Menu
              expandMode="absolute"
              className="!top-9 min-w-[130px] rounded-lg"
            >
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id, "active")}
                className="py-2"
              >
                Active
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id, "inactive")}
                className="py-2"
              >
                Inactive
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id, "outOfStock")}
                className="py-2"
              >
                Out of stock
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div>
        <Button
          rounded="lg"
          title="Edit"
          type="button"
          bgColor="lightGray"
          className="py-2 px-9 font-medium"
        />
      </div>
    </div>
  );
};

export default MyProductCard;
