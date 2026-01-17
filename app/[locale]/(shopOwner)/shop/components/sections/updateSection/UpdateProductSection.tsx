import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { UpdateProductFormType } from "@/app/types/product";
import ProductForm from "../../ProductForm";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useEffect } from "react";
import {
  getSellerProductById,
  updateProductThunk,
} from "@/app/store/features/sellerSlice";
import { productUpdateFormSchema } from "./validation/productUpdate.schema";
import { v4 as uuidv4 } from "uuid";

const UpdateProductSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedProductId, sellerProduct, success } = useSelector(
    (state: RootState) => state.sellerReducer,
  );

  const { categories, subCategories } = useSelector(
    (state: RootState) => state.categoriesReducer,
  );

  const selectedSubCategory = subCategories.find(
    (subCategory) => subCategory.id === sellerProduct?.product_subcategory_id,
  );

  const selectedCategory = categories.find(
    (category) => category.id === selectedSubCategory?.category_id,
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
  } = useForm<UpdateProductFormType>({
    resolver: zodResolver(productUpdateFormSchema),
    defaultValues: {
      product_category: null,
      product_description: "",
      product_sub_category: null,
      id: undefined,
      product_variants: [],
      deletedImageIds: [],
    },
  });

  console.log(process.env.NODE_ENV);
  console.log(process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL);

  // console.log("errors", errors);

  useEffect(() => {
    const subscription = watch((value) => {
      console.log("FORM VALUES:", value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const { fields, append, remove } = useFieldArray({
    name: "product_variants",
    control,
  });

  const addNewVariantForm = () => {
    append({
      id: uuidv4(),
      images: [],
      variant_name: "",
      variant_discount: 0,
      variant_price: 0,
      variant_quantity: 1,
    });
  };

  const deleteVariantForm = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: UpdateProductFormType) => {
    try {
      const formData = new FormData();

      formData.append("productId", data.id!.toString());
      formData.append(
        "productCategoryId",
        selectedCategory?.id.toString() || "",
      );
      formData.append(
        "productSubCategoryId",
        selectedSubCategory?.id.toString() || "",
      );
      formData.append("productDescription", data.product_description);

      const variantsMetadata = data.product_variants.map((variant) => ({
        id: variant.id,
        tempId: variant.id?.toString(),
        variantName: variant.variant_name,
        variantPrice: variant.variant_price,
        variantQuantity: variant.variant_quantity,
        variantDiscount: variant.variant_discount,
        imageCount: variant.images.filter((x) => !(x instanceof File)).length,
      }));

      formData.append("variantsMetadata", JSON.stringify(variantsMetadata));

      data.product_variants.forEach((variant) => {
        variant.images.forEach((img) => {
          if (img instanceof File) {
            formData.append(`variantImage_${variant.id}`, img);
          }
        });
      });

      formData.append(
        "deletedImageIds",
        data.deletedImageIds?.toString() as string,
      );

      dispatch(updateProductThunk({ formData }));

      if (!success) toast.error("Produt update failed");
      if (success) toast.success("Product updated successfully");
    } catch (err) {
      console.error("Error updating product:", err);
      toast.error("Server Error! Please try again later");
    }
  };

  useEffect(() => {
    reset({
      id: sellerProduct?.id,
      product_category: selectedCategory,
      product_description: sellerProduct?.product_description,
      product_sub_category: selectedSubCategory,
      deletedImageIds: [],
      product_variants: sellerProduct?.variants.map((v) => ({
        id: v.id,
        product_id: v.product_id,
        variant_discount: v.variant_discount,
        variant_name: v.variant_name,
        variant_price: v.variant_price,
        variant_quantity: v.variant_quantity,
        images: v.images,
      })),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellerProduct?.id]);
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
