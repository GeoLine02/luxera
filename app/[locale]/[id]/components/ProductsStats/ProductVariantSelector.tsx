interface ProductVariantSelectorProps {
  variants: { variant: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const ProductVariantSelector = ({
  variants,
  selected,
  onChange,
}: ProductVariantSelectorProps) => {
  return (
    <div className="space-y-2 mb-6">
      {variants.map((v, index) => (
        <label
          key={index}
          className={`flex items-center gap-3 py-3 px-2 rounded-md cursor-pointer bg-light-pink`}
        >
          <input
            type="radio"
            name="variant"
            checked={selected === v.variant}
            onChange={() => onChange(v.variant)}
            className="accent-pink-600"
          />
          <span className="text-lg font-medium">{v.variant}</span>
        </label>
      ))}
    </div>
  );
};

export default ProductVariantSelector;
