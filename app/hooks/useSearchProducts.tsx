// import { useEffect, useState } from "react";
// import { SearchFiltersType } from "@/app/types/search";

// export const useSearchProducts = (
//   searchValue: string,
//   activeSearchFilter: SearchFiltersType
// ) => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // ✅ Mock data to test search functionality
//     const mockProducts = [
//       { id: 1, name: "Rose Bouquet", price: 25, image: "/mock1.jpg" },
//       { id: 2, name: "Chocolate Box", price: 15, image: "/mock2.jpg" },
//       { id: 3, name: "Greeting Card", price: 5, image: "/mock3.jpg" },
//       { id: 4, name: "Candle Gift Set", price: 20, image: "/mock4.jpg" },
//       { id: 5, name: "Pink Teddy Bear", price: 30, image: "/mock5.jpg" },
//     ];

//     setLoading(true);

//     setTimeout(() => {
//       // ✅ Log mock data in console (just for debug)
//       console.log("🧪 Mock products:", mockProducts);
//       console.log("🔎 Current search value:", searchValue);

//       // ✅ Case-insensitive search filter
//       const filtered = mockProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchValue.toLowerCase())
//       );

//       console.log("✅ Filtered mock results:", filtered);

//       setProducts(filtered);
//       setLoading(false);
//       setError(null);
//     }, 500); // simulate API delay
//   }, [searchValue, activeSearchFilter]);

//   return { products, loading, error };
// };



import { useEffect, useState } from "react";
import { SearchFiltersType } from "@/app/types/search";
import api from "@/utils/axios";
import { Product } from "../types/homepage";

const PROD_API_URL = "https://luxera-api.onrender.com/products";

export const useSearchProducts = (
  searchValue: string,
  activeSearchFilter: SearchFiltersType
) => {
  const [searchResult, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // ✅ ვიღებთ მონაცემებს სერვერიდან
        const res = await api.get(`/products/search?q=${searchValue}`);

        // თუ 404 ან სხვა შეცდომა მოვიდა
        if (res.status!==200) {
          throw new Error(`Server returned ${res.status}`);
        }

        // ვცდილობთ JSON-ად ამოვიკითხოთ
        const data = await res.data();
        console.log("🔍 API response:", data);

        // თუ პასუხი არ არის მასივი — რაღაც ვერაა
        if (!Array.isArray(data)) {
          throw new Error("Invalid API data format");
        }

        // ✅ ვაფილტრავთ searchValue-ის მიხედვით
        

        setSearchResults(res.data);
      } catch (err: any) {
        console.error("❌ Error fetching products:", err);
        setError("⚠️ Failed to load products");
        setSearchResults([]); // ცარიელი, როცა ვერ მოაქვს
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [searchValue, activeSearchFilter]);

  return { searchResult, loading, error };
};