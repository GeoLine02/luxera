"use client";

import { useEffect, useState } from "react";
import ProductVariantSelector from "./ProductVariantSelector";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { ProductVariantType } from "@/app/types/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { selectVariantId } from "@/app/store/features/productDetailsSlice";
import { addToCartService } from "../../services/cart";
import { useUser } from "@/app/providers/UserProvider";

interface ProductStatsProps {
  productId: number;
  productTitle: string;
  productPrice: number;
  productVariants: ProductVariantType[];
  productDescription: string;
}

const ProductStats = ({
  productId,
  productPrice,
  productTitle,
  productVariants,
  productDescription,
}: ProductStatsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  useEffect(() => {
    dispatch(selectVariantId(productVariants[0].id));
  }, [dispatch, productVariants]);

  const { selectedVaraintId } = useSelector(
    (state: RootState) => state.productDetailsReducer
  );

  const onVariantChange = (variantId: number) => {
    dispatch(selectVariantId(variantId));
  };

  const handleAddToCart = async () => {
    if (user?.id) {
      const res = await addToCartService(
        user?.id,
        productId,
        selectedVaraintId as number,
        productQuantity
      );
      console.log(res);
    }
  };

  const onQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setProductQuantity(productQuantity + 1);
    }

    if (action === "decrement") {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className=" text-left px-4">
      {/* Title and Price */}
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {productTitle}
        </h1>
        <span
          aria-labelledby="add item to wishliste"
          className="inline-block p-2 bg-light-gray rounded-full cursor-pointer"
        >
          <FaRegHeart color="gray" size={20} />
        </span>
      </div>
      <p className="text-xl font-semibold mb-4">{productPrice} Gel</p>

      {/* Variant Selector */}
      <ProductVariantSelector
        variants={productVariants}
        selectedId={selectedVaraintId}
        onChange={onVariantChange}
      />

      {/* Quantity */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => onQuantityChange("decrement")}
          className="w-8 h-8 rounded-lg text-lg font-semibold bg-light-gray cursor-pointer"
        >
          -
        </button>
        <span className="text-lg">{productQuantity}</span>
        <button
          onClick={() => onQuantityChange("increment")}
          className="w-8 h-8 rounded-lg text-lg font-semibold bg-light-gray cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="bg-dirty-pink  text-white font-semibold py-1 px-9 rounded-lg ">
          Order Now
        </button>
        <button
          onClick={handleAddToCart}
          className="border cursor-pointer border-gray-300 hover:border-gray-400 py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <FaShoppingCart size={20} color="gray" />
          Add to Cart
        </button>
      </div>

      {/* Personalise Button */}
      <button className="w-full bg-light-gray py-3 px-4 rounded-lg text-xl font-semibold">
        Personalise & Add to basket
      </button>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">{productDescription}</h2>
        <p className="text-gray-700">{productDescription}</p>
      </div>
    </div>
  );
};

export default ProductStats;
