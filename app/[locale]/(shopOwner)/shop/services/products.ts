import api from "@/utils/axios";

export const createNewProduct = async (_prevState, formData: FormData) => {
  try {
    const formValues = {
      productCategoryId: "",
      subCategoryId: "",
      productDescription: "",
      productImages: "",
      productStatus: "",
      productName: "",
      productPrice: "",
      productVariants: "",
      userId: "",
    };

    const res = await api.post("/products/create", formValues);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
