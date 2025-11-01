import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import Upload from "@/app/ui/Upload";
import { CategoryType } from "@/app/types/categories";
import { NewProductValues, ProductVariantType } from "@/app/types/product";
import { ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface AddProductFormProps {
  categories: CategoryType[];
  handleChangeForm: <K extends keyof NewProductValues>(
    fieldName: K,
    fieldValue: NewProductValues[K]
  ) => void;
  formValues: NewProductValues;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
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

  const handleVariantChange = (index: number, value: string) => {
    const updatedVariants = formValues.productVariants.map((v, i) =>
      i === index ? { ...v, variantName: value } : v
    );

    handleChangeForm("productVariants", updatedVariants);
  };

  const handleAddVariant = () => {
    const newVariant: ProductVariantType = {
      id: crypto.randomUUID(),
      variantName: "",
    };
    handleChangeForm("productVariants", [
      ...formValues.productVariants,
      newVariant,
    ]);
  };

  const handleDeleteVariant = (id: string) => {
    const filteredVariants = formValues.productVariants.filter(
      (variant) => variant.id !== id
    );
    if (formValues.productVariants.length !== 1) {
      handleChangeForm("productVariants", filteredVariants);
    }
  };

  return (
    <div className="bg-white rounded-xl mt-5 p-4 space-y-4">
      <div className="flex flex-col gap-8 border-b border-light-gray pb-6 md:flex-row">
        {/* left section */}
        <section className="max-w-full w-full space-y-4 md:max-w-[70%]">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="title">
              Title
            </label>

            <Input
              name="title"
              value={formValues.productName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onInputChange("productName", e)
              }
              bgColor="white"
              border="border border-light-gray rounded-lg"
              aria-labelledby="product title input"
              type="text"
              placeholder="ex: Handmade leather bag"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              value={formValues.productDescription}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                onInputChange("productDescription", e)
              }
              className="p-2 border border-light-gray focus:border-medium-gray min-h-[100px] md:min-h-[150px]"
              aria-labelledby="product description input"
              placeholder="Describe your product"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Product variants</label>
            <div className="flex gap-4 flex-wrap">
              {formValues.productVariants.map((variant, index) => (
                <div className="flex items-center gap-2" key={variant.id}>
                  <Input
                    value={variant.variantName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleVariantChange(index, e.target.value)
                    }
                    placeholder="Variant name"
                    bgColor="white"
                    border="border border-light-gray rounded-lg"
                  />
                  <span>
                    <IoClose
                      className="cursor-pointer"
                      onClick={() => handleDeleteVariant(variant.id)}
                      size={25}
                      color="red"
                    />
                  </span>
                </div>
              ))}
              <Button
                title="Add Another"
                className="!w-fit px-6 py-2 flex items-center gap-2"
                type="button"
                rounded="lg"
                bgColor="black"
                titleColor="white"
                onClick={handleAddVariant}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Product Images (Max. 5)
            </label>
            <Upload
              value={formValues.productImages}
              onChange={(files) => handleChangeForm("productImages", files)}
              multiple={true}
            />
          </div>
        </section>

        {/* right section */}
        <section className="max-w-full w-full space-y-4 md:max-w-[30%]">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="price">
              Price (GEL)
            </label>
            <Input
              name="price"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onInputChange("productPrice", e)
              }
              value={formValues.productPrice}
              bgColor="white"
              border="border border-light-gray rounded-lg"
              aria-labelledby="product price input"
              type="text"
              placeholder="0.00"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="quantity">
              Quantity
            </label>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onInputChange("productQuantity", e)
              }
              value={formValues.productQuantity}
              name="quantity"
              bgColor="white"
              border="border border-light-gray rounded-lg"
              aria-labelledby="product quantity input"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="quantity">
              Discount
            </label>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onInputChange("productDiscount", e)
              }
              value={formValues.productDiscount}
              name="discount"
              bgColor="white"
              border="border border-light-gray rounded-lg"
              aria-labelledby="product quantity input"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Category</label>
            <Dropdown>
              <Dropdown.Trigger className="text-left border border-light-gray p-2">
                {formValues.productCategory
                  ? formValues.productCategory.categoryName
                  : "Select category"}
              </Dropdown.Trigger>
              <Dropdown.Menu className="!top-11" expandMode="absolute">
                {categories.map((category) => (
                  <Dropdown.Item
                    key={category.id}
                    onSelect={() =>
                      handleChangeForm("productCategory", category)
                    }
                  >
                    {category.categoryName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {formValues.productCategory && (
            <div className="flex flex-col gap-2">
              <label>Subcategory</label>
              <Dropdown>
                <Dropdown.Trigger className="text-left border border-light-gray p-2">
                  {formValues.productSubCategory
                    ? formValues.productSubCategory.subCategoryName
                    : "Select subcategory"}
                </Dropdown.Trigger>
                <Dropdown.Menu className="!top-11" expandMode="absolute">
                  {formValues.productCategory?.subCategories.map(
                    (subCategory) => (
                      <Dropdown.Item
                        key={subCategory.id}
                        onSelect={() =>
                          handleChangeForm("productSubCategory", subCategory)
                        }
                      >
                        {subCategory.subCategoryName}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </section>
      </div>
      <div className="flex justify-end">
        <Button
          rounded="lg"
          title="Add product"
          type="submit"
          bgColor="black"
          titleColor="white"
          className="py-2 p-4 max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default AddProductForm;
