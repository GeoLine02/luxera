"use client";

import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import { CategoryType } from "@/app/types/categories";
import { ProductFormType } from "@/app/types/product";
import ProductVariants from "./ProductVariants";
import {
  Control,
  Controller,
  FieldArrayWithId,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface AddProductFormProps {
  categories: CategoryType[];
  addNewVariantForm: () => void;
  deleteVariantForm: (variantId: number) => void;
  variants: FieldArrayWithId<ProductFormType, "product_variants", "id">[];
  register: UseFormRegister<ProductFormType>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<ProductFormType, any, ProductFormType>;
  setValue: UseFormSetValue<ProductFormType>;
  onSubmit: (data: ProductFormType) => void;
  handleSubmit: UseFormHandleSubmit<ProductFormType, ProductFormType>;
  watch: UseFormWatch<ProductFormType>;
  errors: FieldErrors<ProductFormType>;
}

const AddProductForm = ({
  categories,
  addNewVariantForm,
  deleteVariantForm,
  onSubmit,
  variants,
  register,
  control,
  setValue,
  watch,
  handleSubmit,
  errors,
}: AddProductFormProps) => {
  const selectedCategory = watch("product_category");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white rounded-xl mt-5 p-4 space-y-4">
        <div className="flex flex-col gap-8 border-b border-light-gray pb-6 md:flex-row">
          {/* LEFT SECTION */}
          <section className="max-w-full w-full space-y-4 md:max-w-[70%]">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium inline-block mb-1.5">
                Description
              </label>
              <textarea
                className={`p-2 border focus:border-medium-gray min-h-[100px] md:min-h-[150px] ${
                  errors?.product_description
                    ? "border-red-500"
                    : "border-light-gray"
                }`}
                placeholder="Describe your product"
                {...register(`product_description`)}
              />
              {errors?.product_description && (
                <span className="text-red-500 text-sm">
                  {errors?.product_description.message}
                </span>
              )}
            </div>

            {/* Product Variants */}
            <ProductVariants
              variants={variants}
              onAddVariant={addNewVariantForm}
              onDeleteVariant={deleteVariantForm}
              register={register}
              control={control}
              errors={errors}
            />
          </section>

          {/* RIGHT SECTION */}
          <section className="max-w-full w-full space-y-4 md:max-w-[30%]">
            {/* CATEGORY DROPDOWN */}
            <div>
              <label className="text-sm font-medium mb-1.5 inline-block">
                Category
              </label>
              <Controller
                control={control}
                name="product_category"
                render={({ field }) => (
                  <div>
                    <Dropdown>
                      <Dropdown.Trigger
                        className={`text-left border p-2 ${
                          errors?.product_category
                            ? "border-red-500"
                            : "border-light-gray"
                        }`}
                      >
                        {field.value?.category_name || "Select Category"}
                      </Dropdown.Trigger>
                      <Dropdown.Menu className="!top-11" expandMode="absolute">
                        {categories.map((category) => (
                          <Dropdown.Item
                            key={category.id}
                            onSelect={() => {
                              field.onChange(category); // store full object
                              setValue("product_sub_category", null); // reset subcategory
                            }}
                          >
                            {category.category_name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    {errors?.product_category && (
                      <span className="text-red-500 text-sm block mt-1">
                        {errors?.product_category.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            {/* SUBCATEGORY DROPDOWN */}
            <div>
              <label className="text-sm font-medium mb-1.5 inline-block">
                Subcategory
              </label>
              <Controller
                control={control}
                name="product_sub_category"
                render={({ field }) => (
                  <div>
                    <Dropdown>
                      <Dropdown.Trigger
                        className={`text-left border p-2 ${
                          errors?.product_sub_category
                            ? "border-red-500"
                            : "border-light-gray"
                        }`}
                      >
                        {field.value?.sub_category_name || "Select Subcategory"}
                      </Dropdown.Trigger>
                      <Dropdown.Menu className="!top-11" expandMode="absolute">
                        {selectedCategory?.subCategories.map((sub) => (
                          <Dropdown.Item
                            key={sub.id}
                            onSelect={() => field.onChange(sub)}
                          >
                            {sub.sub_category_name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    {errors?.product_sub_category && (
                      <span className="text-red-500 text-sm block mt-1">
                        {errors?.product_sub_category.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
          </section>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end">
          <Button
            title="Add Product"
            type="submit"
            bgColor="black"
            titleColor="white"
            rounded="lg"
            className="py-2 p-4 max-w-[400px]"
          />
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
