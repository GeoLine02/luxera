"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewRate = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const rating = [1, 2, 3, 4, 5];

  const handleMouseEnter = (index: number) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);

  const handleClick = (index: number) => setSelectedRating(index);
  return (
    <div className="flex gap-1 items-center">
      {rating.map((star) => (
        <FaStar
          key={star}
          size={25}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
          className={`cursor-pointer transition-colors duration-200 ${
            star <= (hoveredStar ?? selectedRating ?? 0)
              ? "text-black-400"
              : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

export default ReviewRate;
