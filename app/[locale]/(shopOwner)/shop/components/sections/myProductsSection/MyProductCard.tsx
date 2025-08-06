"use client";

import Button from "@/app/ui/Button";

interface MyProductCardProps {
  title: string;
  id: string;
  views: string;
  sales: string;
  status: "active" | "vip";
}

const MyProductCard = ({
  title,
  id,
  views,
  sales,
  status,
}: MyProductCardProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-2 rounded-xl md:flex-row md:items-center">
      <div className="flex items-center gap-4 border-b border-medium-gray pb-4 md:pb-0 md:border-none">
        <div className="w-[70px] aspect-square bg-light-pink rounded-lg flex items-center justify-center font-medium text-2xl">
          Gift
        </div>
        <div className="md:max-w-[200px]">
          <h1 className="font-medium text-dark-gray truncate">{title}</h1>
          <h1 className="text-medium-gray">ID: #{id}</h1>
          <span className="px-4 bg-green-200 text-green-600 rounded-md md:hidden">
            {status}
          </span>
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
          <h1 className="text-medium-gray">status</h1>
          <span className="text-green-600 bg-green-200 rounded-md px-4  ">
            {status}
          </span>
        </div>
      </div>
      <div>
        <Button
          rounded="lg"
          title="Analytics"
          type="button"
          bgColor="lightGray"
          className="py-2 px-4 font-medium"
        />
      </div>
    </div>
  );
};

export default MyProductCard;
