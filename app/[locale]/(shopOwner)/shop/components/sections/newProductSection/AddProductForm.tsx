"use client";

import { ChangeEvent } from "react";
import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import { CategoryType } from "@/app/types/categories";
import { NewProductValues, ProductVariantType } from "@/app/types/product";
import ProductVariants from "./ProductVariants";

interface AddProductFormProps {
  categories: CategoryType[];
  handleChangeForm: <K extends keyof NewProductValues>(
    fieldName: K,
    fieldValue: NewProductValues[K]
  ) => void;
  formValues: NewProductValues;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const AddProductForm = ({
  handleChangeForm,
  handleSubmit,
  formValues,
  categories,
}: AddProductFormProps) => {
  const onInputChange = (
    fieldKey: keyof NewProductValues,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChangeForm(fieldKey, e.target.value);
  };

  console.log("categories", categories);

  const handleVariantFieldChange = <K extends keyof ProductVariantType>(
    id: string,
    field: K,
    value: ProductVariantType[K]
  ) => {
    const updatedVariants = formValues.productVariants.map((v) =>
      v.id === id ? { ...v, [field]: value } : v
    );
    handleChangeForm("productVariants", updatedVariants);
  };

  const handleAddVariant = () => {
    const newVariant: ProductVariantType = {
      id: crypto.randomUUID(),
      variant_name: "",
      variant_price: 0,
      variant_quantity: 1,
      variant_discont: 0,
      variant_images: [],
    };
    handleChangeForm("productVariants", [
      ...formValues.productVariants,
      newVariant,
    ]);
  };

  const handleDeleteVariant = (id: string) => {
    handleChangeForm(
      "productVariants",
      formValues.productVariants.filter((v) => v.id !== id)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-xl mt-5 p-4 space-y-4">
        <div className="flex flex-col gap-8 border-b border-light-gray pb-6 md:flex-row">
          {/* LEFT SECTION */}
          <section className="max-w-full w-full space-y-4 md:max-w-[70%]">
            {/* <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Main Product Images (Max 5)
              </label>
              <Upload
                multiple={true}
                value={formValues.productPreviewImages}
                onChange={(files) =>
                  handleChangeForm("productPreviewImages", files)
                }
              />
            </div> */}

            {/* <div className="flex flex-col gap-2">
              <label className="text-sm font-medium mb-1.5 inline-block">
                Title
              </label>
              <Input
                value={formValues.productName}
                onChange={(e) => onInputChange("productName", e)}
                placeholder="e.g. Handmade Leather Bag"
                bgColor="white"
                border="border border-light-gray rounded-lg"
              />
            </div> */}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium inline-block mb-1.5">
                Description
              </label>
              <textarea
                value={formValues.productDescription}
                onChange={(e) => onInputChange("productDescription", e)}
                className="p-2 border border-light-gray focus:border-medium-gray min-h-[100px] md:min-h-[150px]"
                placeholder="Describe your product"
              />
            </div>

            <ProductVariants
              variants={formValues.productVariants}
              onChangeVariant={handleVariantFieldChange}
              onAddVariant={handleAddVariant}
              onDeleteVariant={handleDeleteVariant}
            />
          </section>

          {/* RIGHT SECTION */}
          <section className="max-w-full w-full space-y-4 md:max-w-[30%]">
            {/* MAIN PRICE */}
            {/* <div>
              <label className="text-sm font-medium">Main Product Price</label>
              <Input
                placeholder="Base price (optional)"
                onChange={(e) => onInputChange("productPrice", e)}
                value={formValues.productPrice}
              />
            </div> */}

            {/* MAIN QUANTITY */}
            {/* <div>
              <label className="text-sm font-medium">
                Main Product Quantity
              </label>
              <Input
                placeholder="Base quantity (optional)"
                onChange={(e) => onInputChange("productQuantity", e)}
                value={formValues.productQuantity}
              />
            </div> */}

            {/* MAIN DISCOUNT */}
            {/* <div>
              <label className="text-sm font-medium">
                Main Product Discount
              </label>
              <Input
                placeholder="Base discount (optional)"
                onChange={(e) => onInputChange("productDiscount", e)}
                value={formValues.productDiscount}
              />
            </div> */}

            {/* CATEGORY */}
            <div>
              <label className="text-sm font-medium mb-1.5 inline-block">
                Category
              </label>
              <Dropdown>
                <Dropdown.Trigger className="text-left border p-2 border-light-gray">
                  {formValues.productCategory?.category_name ||
                    "Select Category"}
                </Dropdown.Trigger>
                <Dropdown.Menu className="!top-11" expandMode="absolute">
                  {categories?.map(
                    (category) => (
                      console.log("category", category),
                      (
                        <Dropdown.Item
                          key={category.id}
                          onSelect={() =>
                            handleChangeForm("productCategory", category)
                          }
                        >
                          {category.category_name}
                        </Dropdown.Item>
                      )
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* SUBCATEGORY */}
            {formValues.productCategory && (
              <div>
                <label className="text-sm font-medium mb-1.5 inline-block">
                  Subcategory
                </label>
                <Dropdown>
                  <Dropdown.Trigger className="text-left border p-2 border-light-gray">
                    {formValues.productSubCategory?.sub_category_name ||
                      "Select subcategory"}
                  </Dropdown.Trigger>
                  <Dropdown.Menu className="!top-11" expandMode="absolute">
                    {formValues.productCategory.subCategories?.map((sub) => (
                      <Dropdown.Item
                        key={sub.id}
                        onSelect={() =>
                          handleChangeForm("productSubCategory", sub)
                        }
                      >
                        {sub.sub_category_name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
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
