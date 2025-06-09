import { ProductReviewType } from "@/app/types/product";
import ReviewFilter from "./ReviewFilter";
import ReviewInput from "./ReviewInput";
import ReviewRatingPicker from "./ReviewRatingPicker";
import Reviews from "./Reviews";
import ReviewSenderImage from "@/public/avatar_placeholder.png";
const ProductReviewTab = () => {
  const reviews: ProductReviewType[] = [
    {
      id: 1,
      reviewerComment:
        "I love how this earring captures light and adds a bold touch to any outfit. The craftsmanship is exceptional!",
      reviewRating: 5,
      senderImage: ReviewSenderImage,
      senderName: "Luna Grace",
      postTime: "1",
    },
    {
      id: 2,
      reviewerComment:
        "I love how this earring captures light and adds a bold touch to any outfit. The craftsmanship is exceptional!",
      reviewRating: 5,
      senderImage: ReviewSenderImage,
      senderName: "Luna Grace",
      postTime: "1",
    },
  ];

  return (
    <div className="max-w-[473px] space-y-[40px] mt-[94px]">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Add a reviwe</h1>
        <p>Be the first to review Spectacular views of Queenstown</p>
        <ReviewRatingPicker />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold ">3 comments</h1>
        <ReviewFilter />
      </div>
      <ReviewInput />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default ProductReviewTab;
