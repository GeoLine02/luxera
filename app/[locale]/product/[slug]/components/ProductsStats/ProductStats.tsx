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
import { toast, ToastContainer } from "react-toastify";

interface ProductStatsProps {
  productId: number;
  productVariants: ProductVariantType[];
  productDescription: string;
}

const ProductStats = ({
  productId,
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
      if (res) {
        toast.success("Item added in cart.");
      }
    }
  };

  const onQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setProductQuantity(productQuantity + 1);
    }

    if (action === "decrement" && productQuantity !== 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const selectedVariant = productVariants.find(
    (variant) => variant.id === selectedVaraintId
  );

  const selectedVariantTitle = selectedVariant?.variant_name;
  const selectedVariantPrice = selectedVariant?.variant_price;
  const selectedVariantDiscount = selectedVariant?.variant_discount || 0;

  // Calculate discounted price
  const discountedPrice =
    selectedVariantDiscount > 0
      ? selectedVariantPrice! * (1 - selectedVariantDiscount / 100)
      : selectedVariantPrice;

  const hasDiscount = selectedVariantDiscount > 0;

  return (
    <div className="text-left px-4 md:w-1/2">
      {/* Title and Price */}
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {selectedVariantTitle}
        </h1>
        <span
          aria-label="add item to wishlist"
          className="inline-block p-2 bg-light-gray rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <FaRegHeart color="gray" size={20} />
        </span>
      </div>

      {/* Price with Discount */}
      <div className="mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-2xl font-bold text-gray-900">
            {discountedPrice?.toFixed(2)} Gel
          </span>

          {hasDiscount && (
            <>
              <span className="text-lg text-gray-400 line-through">
                {selectedVariantPrice?.toFixed(2)} Gel
              </span>
              <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
                -{selectedVariantDiscount}%
              </span>
            </>
          )}
        </div>

        {hasDiscount && (
          <p className="text-sm text-green-600 font-medium mt-1">
            You save {(selectedVariantPrice! - discountedPrice!).toFixed(2)} Gel
          </p>
        )}
      </div>

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
          className="w-8 h-8 rounded-lg text-lg font-semibold bg-light-gray cursor-pointer hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={productQuantity === 1}
        >
          -
        </button>
        <span className="text-lg font-medium min-w-[2ch] text-center">
          {productQuantity}
        </span>
        <button
          onClick={() => onQuantityChange("increment")}
          className="w-8 h-8 rounded-lg text-lg font-semibold bg-light-gray cursor-pointer hover:bg-gray-200 transition-colors"
        >
          +
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="bg-dirty-pink text-white font-semibold py-1 px-9 rounded-lg hover:opacity-90 transition-opacity">
          Order Now
        </button>
        <button
          onClick={handleAddToCart}
          className="border cursor-pointer border-gray-300 hover:border-gray-400 hover:bg-gray-50 py-2 px-4 rounded-lg flex items-center gap-2 transition-all"
        >
          <FaShoppingCart size={20} color="gray" />
          Add to Cart
        </button>
      </div>

      {/* Personalise Button */}

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{productDescription}</p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductStats;
