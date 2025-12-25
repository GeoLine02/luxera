"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { ProductFormType } from "@/app/types/product";
import { useUser } from "@/app/providers/UserProvider";
import { createNewProduct } from "../../../services/products";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "./validation/productCreation.schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "../../ProductForm";

const NewProductSection = () => {
  const { user } = useUser();
  const { categories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
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

  console.log("errors", errors);

  const { fields, append, remove } = useFieldArray({
    name: "product_variants",
    control,
  });

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
    try {
      const form = new FormData();

      // 1. Add simple text fields
      form.append("productDescription", data.product_description);
      form.append("productCategoryId", String(data.product_category?.id));
      form.append(
        "productSubCategoryId",
        String(data.product_sub_category?.id)
      );
      form.append("userId", String(user?.id));

      // 2. Build variants metadata JSON
      const metadata = data.product_variants.map((v, index) => ({
        index,
        variantName: v.variant_name,
        variantPrice: v.variant_price,
        variantQuantity: v.variant_quantity,
        variantDiscount: v.variant_discount,
      }));

      form.append("variantsMetadata", JSON.stringify(metadata));

      // 3. Attach images with keys like variantImages_0[]
      data.product_variants.forEach((variant, i) => {
        variant.images.forEach((img) => {
          if (img instanceof File) {
            form.append(`variantImages_${i}`, img);
          }
        });
      });

      // 4. Send multipart/form-data
      const res = await createNewProduct(form);

      if (res.success) {
        reset({
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
        });
        toast.success("Product created successfully!");
      } else {
        toast.error("Failed to Create Product");
      }
    } catch {
      toast.error("Server Error! Please try again later");
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium text-dark-gray">
        Add New Product
      </h1>
      <ProductForm
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
        disabled={disabled}
        isLoading={isLoading}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default NewProductSection;
