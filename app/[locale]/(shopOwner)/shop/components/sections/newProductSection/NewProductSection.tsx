"use client";

import { FormEvent, useState } from "react";
import AddProductForm from "./AddProductForm";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { NewProductValues } from "@/app/types/product";
import { useUser } from "@/app/providers/UserProvider";
import { createNewProduct } from "../../../services/products";
// import { ProductCreationSchema } from "../../../login/validation/productCreationSchema";

const NewProductSection = () => {
  const [productValues, setProductsValues] = useState<NewProductValues>({
    productSubCategory: null,
    productCategory: null,
    productDescription: "",
    productDiscount: 0,
    productPreviewImages: [],
    productName: "",
    productPrice: 0,
    productQuantity: 1,
    productVariants: [],
  });

  const { user } = useUser();

  console.log(productValues);

  const { categories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  const handleChangeForm = <K extends keyof NewProductValues>(
    fieldName: K,
    fieldValue: NewProductValues[K]
  ) => {
    setProductsValues((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Basic product info
      formData.append("productDescription", productValues.productDescription);
      formData.append("ownerId", String(user?.id));

      if (productValues.productSubCategory) {
        formData.append(
          "productSubCategoryId",
          String(productValues.productSubCategory.id)
        );
      }

      // Variants metadata as JSON (cleaner than nested form data)
      const variantsMetadata = productValues.productVariants.map((variant) => ({
        variantName: variant.variant_name,
        variantPrice: variant.variant_price,
        variantQuantity: variant.variant_quantity,
        variantDiscount: variant.variant_discount,
      }));
      formData.append("productVariants", JSON.stringify(variantsMetadata));

      // Variant images with simple naming: variantImages_0, variantImages_1, etc.
      productValues.productVariants.forEach((variant, index) => {
        if (variant.images && variant.images.length > 0) {
          variant.images.forEach((image: File) => {
            formData.append(`variant-${index + 1}-image`, image);
          });
        }
      });

      // Send to backend
      const response = await createNewProduct(formData);

      console.log(response);
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium text-dark-gray">
        Add New Product
      </h1>
      <AddProductForm
        handleSubmit={handleSubmit}
        handleChangeForm={handleChangeForm}
        formValues={productValues}
        categories={categories}
      />
    </div>
  );
};

export default NewProductSection;
