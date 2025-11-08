import { ProductImageType } from "@/app/types/product";
import Image from "next/image";

interface ProductImagesProps {
  images: ProductImageType[];
  handleSelectImage: (image: ProductImageType) => void;
}

const ProductImages = ({ images, handleSelectImage }: ProductImagesProps) => {
  return (
    <div className="flex flex-col gap-2 max-h-full overflow-y-auto overflow-x-hidden">
      {images.map((image: ProductImageType) => (
        <div onClick={() => handleSelectImage(image)} key={image.image}>
          <Image
            className="max-w-[70px] max-h-[98px]"
            width={200}
            height={300}
            src={image.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
