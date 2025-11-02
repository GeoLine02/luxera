"use client";

import { ChangeEvent } from "react";
import { ProductVariantType } from "@/app/types/product";
import Input from "@/app/ui/Input";
import Upload from "@/app/ui/Upload";
import Button from "@/app/ui/Button";
import { IoClose } from "react-icons/io5";

interface ProductVariantsProps {
  variants: ProductVariantType[];
  onChangeVariant: <K extends keyof ProductVariantType>(
    id: string,
    field: K,
    value: ProductVariantType[K]
  ) => void;
  onAddVariant: () => void;
  onDeleteVariant: (id: string) => void;
}

const ProductVariants = ({
  variants,
  onChangeVariant,
  onAddVariant,
  onDeleteVariant,
}: ProductVariantsProps) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Product Variants</label>

      <div className="space-y-6">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="border p-4 rounded-lg space-y-4 border-light-gray"
          >
            <div className="flex justify-end">
              <IoClose
                className="cursor-pointer"
                size={20}
                color="red"
                onClick={() => onDeleteVariant(variant.id)}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1.5">
                Variant Name
              </label>
              <Input
                value={variant.variantName}
                placeholder="Variant name"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChangeVariant(variant.id, "variantName", e.target.value)
                }
              />
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm font-medium block mb-1.5">
                  Price
                </label>
                <Input
                  type="number"
                  value={variant.variantPrice}
                  placeholder="00.00"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChangeVariant(
                      variant.id,
                      "variantPrice",
                      Number(e.target.value)
                    )
                  }
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium block mb-1.5">
                  Quantity
                </label>
                <Input
                  type="number"
                  value={variant.variantQuantity}
                  placeholder="0"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChangeVariant(
                      variant.id,
                      "variantQuantity",
                      Number(e.target.value)
                    )
                  }
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium block mb-1.5">
                  Discount %
                </label>
                <Input
                  type="number"
                  value={variant.variantDiscount}
                  placeholder="0%"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChangeVariant(
                      variant.id,
                      "variantDiscount",
                      Number(e.target.value)
                    )
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1.5">
                Variant Images
              </label>
              <Upload
                multiple
                value={variant.variantImages}
                onChange={(files) =>
                  onChangeVariant(variant.id, "variantImages", files)
                }
              />
            </div>
          </div>
        ))}

        <Button
          title="Add Variant"
          type="button"
          onClick={onAddVariant}
          className="!w-fit px-6 py-2"
          bgColor="black"
          rounded="lg"
          titleColor="white"
        />
      </div>
    </div>
  );
};

export default ProductVariants;
