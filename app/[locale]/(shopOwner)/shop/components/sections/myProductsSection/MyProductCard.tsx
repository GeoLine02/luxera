"use client";

import { ProductImageType, SellerProductStatusType } from "@/app/types/product";
import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import classNames from "classnames";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

interface MyProductCardProps {
  title: string;
  id: number;
  viewsPerDay: number;
  viewsPerMonth: number;
  salesPerDay: number;
  salesPerMonth: number;
  productImage: ProductImageType;
  status: "active" | "inactive" | "outOfStock";
  handleChangeStatus: (
    productId: string,
    status: SellerProductStatusType
  ) => void;
  handleSelectProductId: (id: number) => void;
}

const MyProductCard = ({
  title,
  id,
  status,
  handleChangeStatus,
  salesPerDay,
  salesPerMonth,
  viewsPerDay,
  viewsPerMonth,
  productImage,
  handleSelectProductId,
}: MyProductCardProps) => {
  const statusColorStyles = classNames({
    "text-green-600 bg-green-200": status === "active",
    "text-medium-gray bg-light-gray": status === "inactive",
    "text-red-500 bg-red-200": status === "outOfStock",
  });

  return (
    <div className="flex flex-col gap-2 bg-white p-2 rounded-xl md:flex-row md:items-center">
      <div className="flex items-center gap-4 border-b border-medium-gray pb-4 md:pb-0 md:border-none">
        <Image
          className="max-w-[55px] aspect-square rounded-lg"
          width={500}
          height={500}
          src={productImage.image}
          alt={title}
        />

        <div className="md:max-w-[200px]">
          <h1 className="font-medium text-dark-gray truncate">{title}</h1>
          <h1 className="text-medium-gray">ID: #{id}</h1>
          <div className="md:hidden">
            <Dropdown>
              <Dropdown.Trigger>
                <span
                  className={`${statusColorStyles} rounded-md px-4 flex items-center gap-2 w-fit`}
                >
                  {status}
                  <IoIosArrowDown size={20} />
                </span>
              </Dropdown.Trigger>
              <Dropdown.Menu
                expandMode="absolute"
                className="!top-9 min-w-[130px] rounded-lg"
              >
                <Dropdown.Item
                  onSelect={() => handleChangeStatus(id.toString(), "active")}
                  className="py-2"
                >
                  Active
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() => handleChangeStatus(id.toString(), "inactive")}
                  className="py-2"
                >
                  Inactive
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() =>
                    handleChangeStatus(id.toString(), "outOfStock")
                  }
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
          <h1 className="font-medium">
            {viewsPerDay}/{viewsPerMonth}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-medium-gray text-sm">Sells (day/month)</h2>
          <h1 className="font-medium">
            {salesPerDay}/{salesPerMonth}
          </h1>
        </div>
        <div className="flex-col items-center hidden md:flex">
          <h1 className="text-medium-gray text-sm">status</h1>
          <Dropdown>
            <Dropdown.Trigger>
              <span
                className={`${statusColorStyles} rounded-md px-4 flex items-center gap-2`}
              >
                {status}
                <IoIosArrowDown size={20} />
              </span>
            </Dropdown.Trigger>
            <Dropdown.Menu
              expandMode="absolute"
              className="!top-9 min-w-[130px] rounded-lg"
            >
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id.toString(), "active")}
                className="py-2"
              >
                Active
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id.toString(), "inactive")}
                className="py-2"
              >
                Inactive
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => handleChangeStatus(id.toString(), "outOfStock")}
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
          onClick={() => handleSelectProductId(id)}
          rounded="lg"
          title="Edit"
          type="button"
          bgcolor="lightGray"
          className="py-2 px-9 font-medium"
        />
      </div>
    </div>
  );
};

export default MyProductCard;
