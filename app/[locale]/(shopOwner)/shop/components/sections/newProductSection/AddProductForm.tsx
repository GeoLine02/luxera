import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import Upload from "@/app/ui/Upload";

const AddProductForm = () => {
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
              className="p-2 border border-light-gray focus:border-medium-gray min-h-[100px] md:min-h-[150px]"
              aria-labelledby="product description input"
              placeholder="Describe your product"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Product Images (Max. 5)
            </label>
            <Upload />
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
                GiftCards
              </Dropdown.Trigger>
              <Dropdown.Menu className="!top-11" expandMode="absolute">
                <Dropdown.Item>GiftCards</Dropdown.Item>
                <Dropdown.Item>Flowers</Dropdown.Item>
                <Dropdown.Item>Toys</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
