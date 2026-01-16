import { ProductImageType, ProductVariantType } from "@/app/types/product";
import Image from "next/image";

interface ProductVariantSelectorProps {
  variants: ProductVariantType[];
  selectedId: number | null;
  onChange: (variantId: number) => void;
}

const ProductVariantSelector = ({
  variants,
  selectedId,
  onChange,
}: ProductVariantSelectorProps) => {
  const mergedVariants = variants.map((variant) => ({
    ...variant,
    image: variant.images[0],
  }));

  return (
    <div className="flex gap-3 mb-6 p-4 rounded-xl">
      {mergedVariants.map((v) => {
        const productImage = v.image as ProductImageType;
        const isSelected = selectedId === v.id;

        return (
          <label
            key={v.id}
            className={`
              cursor-pointer rounded-xl border p-2 transition
              ${
                isSelected
                  ? "border-medium-pink ring-2 ring-medium-pink"
                  : "border-gray-200 hover:border-gray-400"
              }
            `}
          >
            {/* Hidden radio */}
            <input
              type="radio"
              name="product-variant"
              value={v.id}
              checked={isSelected}
              onChange={() => onChange(v.id as number)}
              className="sr-only peer"
            />

            {/* Custom UI */}
            <div className="flex flex-col items-center gap-1">
              <Image
                className="w-[90px] md:w-[120px] aspect-square object-cover rounded-lg"
                width={50}
                height={50}
                src={productImage.imageUrl}
                alt={v.variant_name}
              />
              <span className="text-sm font-medium max-w-[90px] md:max-w-[120px] truncate">
                {v.variant_name}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default ProductVariantSelector;
