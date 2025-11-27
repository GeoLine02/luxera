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
      // const validatedValues = ProductCreationSchema.safeParse(productValues);
      // console.log(validatedValues.success);
      // if (!validatedValues.success) {
      //   return validatedValues.error.flatten().fieldErrors;
      // }

      const formData = new FormData();

      // Basic product info
      formData.append("productName", productValues.productName);
      formData.append("productDescription", productValues.productDescription);
      formData.append("productPrice", String(productValues.productPrice));
      formData.append("productQuantity", String(productValues.productQuantity));
      formData.append("productDiscount", String(productValues.productDiscount));
      formData.append("userId", String(user?.id));

      // Category info
      if (productValues.productCategory) {
        formData.append(
          "productCategoryId",
          String(productValues.productCategory.id)
        );
      }
      if (productValues.productSubCategory) {
        formData.append(
          "subCategoryId",
          String(productValues.productSubCategory.id)
        );
      }

      // Product preview images
      productValues.productPreviewImages.forEach((image) => {
        formData.append("productPreviewImages", image);
      });

      // Variants metadata as JSON (cleaner than nested form data)
      const variantsMetadata = productValues.productVariants.map(
        (variant, index) => ({
          index,
          variantName: variant.variantName,
          variantPrice: variant.variantPrice,
          variantQuantity: variant.variantQuantity,
          variantDiscount: variant.variantDiscount,
          imageCount: variant.variantImages?.length || 0,
        })
      );
      formData.append("variantsMetadata", JSON.stringify(variantsMetadata));

      // Variant images with simple naming: variantImages_0, variantImages_1, etc.
      productValues.productVariants.forEach((variant, index) => {
        if (variant.variantImages && variant.variantImages.length > 0) {
          variant.variantImages.forEach((image) => {
            formData.append(`variantImages_${index}`, image);
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
