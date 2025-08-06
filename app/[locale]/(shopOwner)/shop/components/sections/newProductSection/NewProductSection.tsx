import AddProductForm from "./AddProductForm";

const NewProductSection = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium text-dark-gray">
        Add New Product
      </h1>
      <AddProductForm />
    </div>
  );
};

export default NewProductSection;
