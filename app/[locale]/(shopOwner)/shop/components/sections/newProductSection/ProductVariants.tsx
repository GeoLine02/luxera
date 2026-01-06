"use client";

import {
  ProductFormType,
  ProductVariantType,
  UpdateProductFormType,
} from "@/app/types/product";
import Input from "@/app/ui/Input";
import Upload from "@/app/ui/Upload";
import Button from "@/app/ui/Button";
import { IoClose } from "react-icons/io5";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface ProductVariantsProps {
  variants: ProductVariantType[];
  onAddVariant: () => void;
  onDeleteVariant: (index: number) => void;
  register: UseFormRegister<ProductFormType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<ProductFormType, any, ProductFormType>;
  errors: FieldErrors<ProductFormType>;
  setValue: UseFormSetValue<ProductFormType | UpdateProductFormType>;
  watch: UseFormWatch<ProductFormType | UpdateProductFormType>;
}

const ProductVariants = ({
  variants,
  onAddVariant,
  onDeleteVariant,
  register,
  control,
  errors,
  setValue,
  watch,
}: ProductVariantsProps) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">Product Variants</label>

      {/* General variants error */}
      {errors?.product_variants && !Array.isArray(errors.product_variants) && (
        <span className="text-red-500 text-sm block">
          {errors.product_variants.message}
        </span>
      )}

      <div className="space-y-6">
        {variants.map((variant, index) => {
          const variantErrors = errors?.product_variants?.[index];

          return (
            <div
              key={variant.id}
              className="border p-4 rounded-lg space-y-4 border-light-gray"
            >
              {/* Delete variant */}
              <div className="flex justify-end">
                <IoClose
                  className="cursor-pointer"
                  size={20}
                  color="red"
                  onClick={() => onDeleteVariant(index)}
                />
              </div>

              {/* Variant name */}
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Variant Name
                </label>
                <Input
                  placeholder="Variant name"
                  className={
                    variantErrors?.variant_name ? "border-red-500" : ""
                  }
                  {...register(`product_variants.${index}.variant_name`)}
                />
                {variantErrors?.variant_name && (
                  <span className="text-red-500 text-sm block mt-1">
                    {variantErrors.variant_name.message}
                  </span>
                )}
              </div>

              {/* Price / Quantity / Discount */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-sm font-medium block mb-1.5">
                    Price
                  </label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="00.00"
                    className={
                      variantErrors?.variant_price ? "border-red-500" : ""
                    }
                    {...register(`product_variants.${index}.variant_price`)}
                  />
                  {variantErrors?.variant_price && (
                    <span className="text-red-500 text-sm block mt-1">
                      {variantErrors.variant_price.message}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium block mb-1.5">
                    Quantity
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    className={
                      variantErrors?.variant_quantity ? "border-red-500" : ""
                    }
                    {...register(`product_variants.${index}.variant_quantity`)}
                  />
                  {variantErrors?.variant_quantity && (
                    <span className="text-red-500 text-sm block mt-1">
                      {variantErrors.variant_quantity.message}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium block mb-1.5">
                    Discount %
                  </label>
                  <Input
                    type="number"
                    placeholder="0%"
                    className={
                      variantErrors?.variant_discount ? "border-red-500" : ""
                    }
                    {...register(`product_variants.${index}.variant_discount`)}
                  />
                  {variantErrors?.variant_discount && (
                    <span className="text-red-500 text-sm block mt-1">
                      {variantErrors.variant_discount.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Variant images */}
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Variant Images
                </label>

                <Controller
                  name={`product_variants.${index}.images`}
                  control={control}
                  render={({ field }) => {
                    const currentImages:
                      | (File | { id: number; image: string })[] =
                      field.value || [];

                    const handleImagesChange = (
                      updatedImages: (File | { id: number; image: string })[]
                    ) => {
                      // Detect removed existing images
                      const removedImages = currentImages.filter(
                        (oldImg) =>
                          !updatedImages.includes(oldImg) &&
                          !(oldImg instanceof File) &&
                          "id" in oldImg
                      );

                      if (removedImages.length) {
                        setValue(
                          "deletedImageIds",
                          [
                            ...(watch("deletedImageIds") ?? []),
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ...removedImages.map((img: any) => img.id),
                          ],
                          { shouldDirty: true }
                        );
                      }

                      field.onChange(updatedImages);
                    };

                    return (
                      <Upload
                        multiple
                        value={currentImages}
                        onChange={handleImagesChange}
                      />
                    );
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Add variant */}
        <Button
          title="Add Variant"
          type="button"
          onClick={onAddVariant}
          className="!w-fit px-6 py-2"
          bgcolor="black"
          rounded="lg"
          titleColor="white"
        />
      </div>
    </div>
  );
};

export default ProductVariants;
