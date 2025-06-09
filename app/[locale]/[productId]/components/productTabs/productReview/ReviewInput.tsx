"use client";

import PostReviewBtn from "./PostReviewBtn";

const ReviewInput = () => {
  return (
    <div className="border-2 border-light-gray flex items-center py-2 px-6 rounded-2xl">
      <input
        placeholder="Share your thoughts"
        type="text"
        className="text-medium-gray w-full focus:outline-none"
      />
      <PostReviewBtn />
    </div>
  );
};

export default ReviewInput;
