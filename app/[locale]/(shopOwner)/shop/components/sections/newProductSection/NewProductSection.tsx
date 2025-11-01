"use client";

import { FormEvent, useState } from "react";
import AddProductForm from "./AddProductForm";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { NewProductValues } from "@/app/types/product";

const NewProductSection = () => {
  const [productValues, setProductsValues] = useState<NewProductValues>({
    productSubCategory: null,
    productCategory: null,
    productDescription: "",
    productDiscount: 0,
    productImages: [],
    productName: "",
    productPrice: 0,
    productQuantity: 1,
    productVariants: [{ id: crypto.randomUUID(), variantName: "" }],
  });

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
    } catch (error) {
      console.log(error);
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
