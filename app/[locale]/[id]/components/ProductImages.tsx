// import Image from "next/image";

import { ProductImageType } from "@/app/types/product";

interface ProductImageProps {
  source: string;
  id: number;
}

const ProductImage = ({ id }: ProductImageProps) => {
  return (
    // <Image height={30} width={30} src={source} alt={source} />
    <div className="w-20 h-28 bg-light-pink flex items-center justify-center text-2xl">
      {id}
    </div>
  );
};

interface ProductImagesProps {
  images: ProductImageType[];
  handleSelectImage: (image: ProductImageType) => void;
}

const ProductImages = ({ images, handleSelectImage }: ProductImagesProps) => {
  return (
    <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto overflow-x-hidden">
      {images.map((image) => (
        <div onClick={() => handleSelectImage(image)} key={image.id}>
          <ProductImage source={image.source} id={image.id} />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
