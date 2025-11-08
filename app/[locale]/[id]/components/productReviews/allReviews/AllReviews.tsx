"use client";

import { Dropdown } from "@/app/ui/DropDown";
import { BsArrowDown } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const AllReviews = () => {
  const commentCount = 3;
  return (
    <div>
      <section className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">
          {commentCount} Comments
        </h1>
        <div className="max-w-[120px] md:max-w-[150px] w-full">
          <Dropdown>
            <Dropdown.Trigger className="border-2 border-light-gray py-1 md:py-2 !rounded-2xl font-medium flex items-center justify-around">
              <span>Newest</span>
              <IoIosArrowDown className="w-6 md:w-10 aspect-square" />
            </Dropdown.Trigger>
            <Dropdown.Menu className="-mt-7 font-medium" expandMode="absolute">
              <Dropdown.Item>Newest</Dropdown.Item>
              <Dropdown.Item>All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
      <section>{/* TODO: All Comments */}</section>
    </div>
  );
};

export default AllReviews;
