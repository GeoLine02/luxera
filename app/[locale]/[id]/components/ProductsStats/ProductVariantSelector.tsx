import { ProductVariantType } from "@/app/types/product";

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
  return (
    <div className="space-y-2 mb-6">
      {variants.map(
        (v, index) => (
          console.log("varianntsss: ", variants),
          (
            <label
              key={index}
              className={`flex items-center gap-3 py-3 px-2 rounded-md cursor-pointer bg-light-pink`}
            >
              <input
                type="radio"
                name="variant"
                checked={selectedId === v.id}
                onChange={() => onChange(v.id as number)}
                className="accent-pink-600"
              />
              <span className="text-lg font-medium">{v.variant_name}</span>
            </label>
          )
        )
      )}
    </div>
  );
};

export default ProductVariantSelector;
