"use client";

import Button from "@/app/ui/Button";

const LoadMoreButton = () => {
  // TODO: Put buissner logic here

  return (
    <div className="flex items-center justify-center mt-11">
      <Button
        rounded="full"
        title="Load more 100+"
        type="button"
        className="py-2 max-w-[322px] w-full border border-black transition-all duration-300 hover:bg-black hover:text-white"
        onClick={() => console.log("Load more clicked!")}
      />
    </div>
  );
};

export default LoadMoreButton;
