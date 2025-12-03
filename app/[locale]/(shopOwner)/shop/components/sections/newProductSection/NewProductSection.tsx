"use client";

import AddProductForm from "./AddProductForm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { ProductFormType } from "@/app/types/product";
import { useUser } from "@/app/providers/UserProvider";
import { createNewProduct } from "../../../services/products";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "./validation/productCreation.schema";

const NewProductSection = () => {
  const { user } = useUser();
  const { categories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors, disabled, isLoading },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      product_category: null,
      product_description: "",
      product_sub_category: null,
      product_variants: [
        {
          id: 1,
          images: [],
          variant_discount: 0,
          variant_name: "",
          variant_price: 0,
          variant_quantity: 1,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "product_variants",
    control,
  });

  console.log("fields", fields);

  const addNewVariantForm = () => {
    append({
      id: fields[fields.length - 1]?.id + 1,
      images: [],
      variant_name: "",
      variant_discount: 0,
      variant_price: 0,
      variant_quantity: 1,
    });
  };

  const deleteVariantForm = (variantId: number) => {
    remove(variantId);
  };

  const onSubmit = async (data: ProductFormType) => {
    console.log("Form submitted with data:", data);
    const res = await createNewProduct(data);

    console.log("response", res);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium text-dark-gray">
        Add New Product
      </h1>
      <AddProductForm
        addNewVariantForm={addNewVariantForm}
        deleteVariantForm={deleteVariantForm}
        categories={categories}
        variants={fields}
        register={register}
        control={control}
        setValue={setValue}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        watch={watch}
        errors={errors}
      />
    </div>
  );
};

export default NewProductSection;
