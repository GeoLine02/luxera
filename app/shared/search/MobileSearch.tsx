// "use client";

// import { useState } from "react";
// import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
// import { useSearchProducts } from "@/app/hooks/useSearchProducts";

// export default function MobileSearch() {
//   const [searchValue, setSearchValue] = useState("");
//   const [isOpen, setIsOpen] = useState(true);

//   const { products, loading, error } = useSearchProducts(searchValue, "All");

//   const handleClose = () => {
//     setIsOpen(false);
//     setSearchValue("");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shadow-sm">
//         <button
//           onClick={handleClose}
//           className="text-2xl text-gray-700 flex items-center justify-center"
//         >
//           <IoIosArrowBack />
//         </button>

//         <input
//           type="text"
//           placeholder="Type something"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           className="flex-1 mx-3 text-gray-800 placeholder-gray-500 outline-none border-none text-base"
//           autoFocus
//         />

//         {searchValue && (
//           <button
//             onClick={() => setSearchValue("")}
//             className="text-lg bg-gray-300 text-white rounded-full w-7 h-7 flex items-center justify-center"
//           >
//             ×
//           </button>
//         )}
//       </div>

//       {/* Search results */}
//       <div className="flex-1 overflow-y-auto p-4">
//         {loading && (
//           <p className="text-center text-gray-500 mt-10">Loading...</p>
//         )}
//         {error && (
//           <p className="text-center text-red-500 mt-10">{error}</p>
//         )}
//         {!loading && !error && searchValue && products.length === 0 && (
//           <p className="text-center text-gray-500 mt-10">No results found</p>
//         )}

//         <div className="grid grid-cols-1 gap-3">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="p-3 border border-gray-200 rounded-xl shadow-sm flex flex-col items-center"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="mt-2 font-medium text-gray-800 text-sm text-center">
//                 {product.name}
//               </h3>
//               <p className="text-[#b97f79] font-semibold text-sm">
//                 ${product.price}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom search button */}
//       <div className="p-4 border-t border-gray-200">
//         <button
//           onClick={() => console.log("Search for:", searchValue)}
//           className="w-full py-3 rounded-lg bg-[#d8b1ac] text-gray-800 text-base font-medium flex items-center justify-center gap-2"
//         >
//           <IoIosSearch size={18} />
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }