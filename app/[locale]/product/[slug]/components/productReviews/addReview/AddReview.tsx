import ReviewInput from "./ReviewInput";
import ReviewRate from "./ReviewRate";

const AddReview = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-semibold text-2xl md:text-3xl">Add a review</h1>
      <p className="font-medium text-sm md:text-base">
        <span className="text-medium-gray">Be the first to review</span>{" "}
        spectaular views of Queenstown
      </p>

      <ReviewRate />
      <ReviewInput />
    </div>
  );
};

export default AddReview;
