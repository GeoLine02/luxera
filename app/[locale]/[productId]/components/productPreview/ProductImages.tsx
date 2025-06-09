import Image, { StaticImageData } from "next/image";

interface ProdcutImagesProps {
  images: StaticImageData[];
  setCurrentImage: React.Dispatch<React.SetStateAction<StaticImageData>>;
}

const ProductImages = ({ images }: ProdcutImagesProps) => {
  const handleChangeImage = () => {};

  return (
    <div className="space-y-4 overflow-y-auto max-h-[380px]">
      {images.map((image, index) => (
        <div onClick={handleChangeImage} className="cursor-pointer" key={index}>
          <Image
            className="w-[70px] h-[98px]"
            src={image}
            alt={"image link" + " " + image}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
