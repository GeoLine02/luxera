"use client";

export default function Loading() {
  return (
    <div className="p-6">
      {/* VIP Listing Skeleton */}
      <h2 className="text-2xl font-bold mb-4">VIP Listing</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-xl p-4 shadow-sm">
            <div className="bg-gray-200 h-40 w-full rounded-md mb-3" />
            <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded" />
            <div className="bg-gray-200 h-4 w-1/2 mb-4 rounded" />
            <div className="bg-gray-200 h-8 w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* Best Selling Skeleton */}
      <h2 className="text-2xl font-bold mb-4">Best Sellings</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-xl p-4 shadow-sm">
            <div className="bg-gray-200 h-40 w-full rounded-md mb-3" />
            <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded" />
            <div className="bg-gray-200 h-4 w-1/2 mb-4 rounded" />
            <div className="bg-gray-200 h-8 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
