"use client";

export default function Loading() {
  return (
    <div className="p-6 animate-[pulse_1s_ease-in-out_infinite]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-gray-300 h-16 w-16 rounded-md" />
            ))}
          </div>
          {/* Main Image */}
          <div className="bg-gray-300 h-96 w-80 md:w-[400px] rounded-md" />
        </div>

        {/* Right side - Product Info */}
        <div className="flex-1">
          <div className="bg-gray-300 h-8 w-2/3 rounded mb-4" /> {/* Title */}
          <div className="bg-gray-300 h-6 w-20 rounded mb-6" /> {/* Price */}
          {/* Options */}
          <div className="space-y-3 mb-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-300 h-10 w-full rounded" />
            ))}
          </div>
          {/* Quantity + Buttons */}
          <div className="flex gap-4 mb-6">
            <div className="bg-gray-300 h-10 w-24 rounded" />
            <div className="bg-gray-300 h-10 w-32 rounded" />
            <div className="bg-gray-300 h-10 w-32 rounded" />
          </div>
          {/* Extra Button */}
          <div className="bg-gray-300 h-12 w-full rounded mb-6" />
          {/* Description */}
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-300 h-4 w-full rounded" />
            ))}
          </div>
        </div>
      </div>

      {/* Seller section */}
      <div className="flex items-center gap-4 mt-10 border-t pt-6">
        <div className="bg-gray-300 h-12 w-12 rounded-full" />
        <div>
          <div className="bg-gray-300 h-4 w-32 rounded mb-2" />
          <div className="bg-gray-300 h-4 w-20 rounded" />
        </div>
        <div className="ml-auto bg-gray-300 h-8 w-24 rounded" />
      </div>
    </div>
  );
}
