import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { productFormSchema } from "../newProductSection/validation/productCreation.schema";
import { ProductFormType, ProductImageType } from "@/app/types/product";
import ProductForm from "../../ProductForm";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import {
  getSellerProductById,
  updateProductThunk,
} from "@/app/store/features/sellerSlice";

const UpdateProductSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedProductId, sellerProduct, success } = useSelector(
    (state: RootState) => state.sellerReducer
  );

  const { categories, subCategories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  const selectedSubCategory = subCategories.find(
    (subCategory) => subCategory.id === sellerProduct?.product_subcategory_id
  );

  const selectedCategory = categories.find(
    (category) => category.id === selectedSubCategory?.category_id
  );

  useEffect(() => {
    dispatch(getSellerProductById(selectedProductId as number));
  }, [dispatch, selectedProductId]);

  const {
    register,
    control,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isLoading, disabled },
  } = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      product_category: null,
      product_description: "",
      product_sub_category: null,
      id: undefined,
      product_variants: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "product_variants",
    control,
  });

  console.log("Fieldssss", fields);

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
      const formData = new FormData();

      // --- 1️⃣ Basic product info ---
      formData.append("productId", data.id!.toString());
      formData.append(
        "productCategoryId",
        data.product_category?.id?.toString() || ""
      );
      formData.append(
        "productSubCategoryId",
        data.product_sub_category?.id.toString() || ""
      );
      formData.append("productDescription", data.product_description);

      // --- 2️⃣ Variants metadata (excluding images) ---
      const variantsMetadata = data.product_variants.map((variant) => ({
        variantName: variant.variant_name,
        variantPrice: variant.variant_price,
        variantQuantity: variant.variant_quantity,
        variantDiscount: variant.variant_discount,
        id: variant.id, // optional, just for frontend tracking
        // Optional: include existing image URLs if you want to track them

        existingImages:
          variant.images
            .filter((img): img is ProductImageType => !(img instanceof File))
            .map((img) => img.image) || [],
      }));
      formData.append("variantsMetadata", JSON.stringify(variantsMetadata));

      // --- 3️⃣ Append new files only ---
      data.product_variants.forEach((variant, index) => {
        variant.images.forEach((img) => {
          if (img instanceof File) {
            formData.append(`variantImages_${index}`, img);
          }
        });
      });

      dispatch(updateProductThunk({ formData }));

      if (success) {
        toast.success("Product updated successfully!");
      } else {
        toast.error("Product update failed");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Server Error! Please try again later");
    }
  };

  useEffect(() => {
    reset({
      id: sellerProduct?.id,
      product_category: selectedCategory,
      product_description: sellerProduct?.product_description,
      product_sub_category: selectedSubCategory,
      product_variants: sellerProduct?.variants.map((v) => ({
        id: v.id,
        product_id: v.product_id,
        variant_discount: v.variant_discount,
        variant_name: v.variant_name,
        variant_price: v.variant_price,
        variant_quantity: v.variant_quantity,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        images: v.images.map((img: any) => img.image),
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellerProduct?.id]);

  const values = watch("product_variants");
  console.log("varaints", values);

  return (
    <div>
      <ProductForm
        addNewVariantForm={addNewVariantForm}
        control={control}
        deleteVariantForm={deleteVariantForm}
        disabled={disabled}
        errors={errors}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        onSubmit={onSubmit}
        register={register}
        watch={watch}
        categories={categories}
        variants={fields}
        setValue={setValue}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default UpdateProductSection;
