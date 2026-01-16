import { ProductImageType } from "@/app/types/product";
import Image from "next/image";

interface ProductImagesProps {
  images: ProductImageType[];
  handleSelectImage: (image: ProductImageType) => void;
  selectedImage: ProductImageType | null;
}

const ProductImages = ({
  images,
  handleSelectImage,
  selectedImage,
}: ProductImagesProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-[120px] max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
      {images.map((image: ProductImageType, index: number) => {
        const isSelected = selectedImage?.imageUrl === image.imageUrl;

        return (
          <button
            onClick={() => handleSelectImage(image)}
            key={`${image.imageUrl}-${index}`}
            className={`relative w-[100px] h-[120px] cursor-pointer transition-all rounded-md overflow-hidden
              ${
                isSelected
                  ? "ring-2 ring-blue-500 opacity-100"
                  : "ring-1 ring-gray-200 opacity-70 hover:opacity-100"
              }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              fill
              sizes="100px"
              className="object-cover"
              src={image.imageUrl}
              alt={`Product thumbnail ${index + 1}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default ProductImages;
