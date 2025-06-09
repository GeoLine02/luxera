import { ProductReviewType } from "@/app/types/product";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

interface ReviewCardProps {
  senderImage: StaticImageData;
  senderName: string;
  reviewerComment: string;
  reviewRating: number;
  postTime: string;
}

const ReviewCard = ({
  reviewerComment,
  senderImage,
  senderName,
  reviewRating,
  postTime,
}: ReviewCardProps) => {
  return (
    <div className="max-w-[473px] flex gap-2 border-b border-light-gray pb-5">
      <div>
        <Image
          className="w-[48px] aspect-square"
          src={senderImage}
          alt="sender image"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-dirty-pink">{senderName}</h1>
          <div className="flex items-center gap-2">
            <span>({reviewRating})</span>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
        </div>
        <p>{reviewerComment}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-medium-gray">about {postTime} hour ago</span>
          <span className="font-semibold">Like</span>
          <span className="font-semibold">Reply</span>
        </div>
      </div>
    </div>
  );
};

interface ReviewsProps {
  reviews: ProductReviewType[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="overflow-y-auto space-y-7">
      {reviews.map((review) => (
        <ReviewCard
          postTime="1h"
          reviewRating={review.reviewRating}
          reviewerComment={review.reviewerComment}
          senderImage={review.senderImage}
          senderName={review.senderName}
          key={review.id}
        />
      ))}
    </div>
  );
};

export default Reviews;
