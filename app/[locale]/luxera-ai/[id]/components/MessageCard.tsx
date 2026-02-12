"use client";

import { useTypeWriter } from "@/app/hooks/useTypeWriter";
import { MessageProductType } from "@/app/types/ai";
import Button from "@/app/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MessageCardProps {
  content: string;
  products?: MessageProductType[];
  isTyping?: boolean;
}

const MessageCard = ({
  content,
  products,
  isTyping = false,
}: MessageCardProps) => {
  const router = useRouter();
  const { displayedText, isComplete } = useTypeWriter({
    text: content,
    speed: 30, // Adjust speed as needed (milliseconds per character)
    isActive: isTyping,
  });

  return (
    <div className="text-white w-full lg:max-w-[50%] bg-dark-gray p-4 rounded-xl">
      <p>{displayedText}</p>

      {/* Only show products after typing is complete */}
      {isComplete && products && products.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          {products.map((product) => (
            <div
              className="flex gap-4 border p-2 rounded-xl border-medium-gray items-center"
              key={product.link}
            >
              <Image
                className="rounded-xl max-w-[150px] object-cover aspect-square"
                width={130}
                height={130}
                src={product.imageUrl}
                alt=""
              />
              <div className="space-y-2 w-full">
                <h1 className="text-lg md:text-2xl font-bold max-w-[90%] whitespace-nowrap truncate">
                  {product.variantName}
                </h1>
                <div className="flex gap-2 items-center">
                  <span className="md:text-lg text-gray-400 line-through">
                    {product.variantPrice?.toFixed(2)} Gel
                  </span>
                  <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
                    -{product.variantDiscount}%
                  </span>
                </div>
                <Button
                  onClick={() =>
                    router.push(
                      `/product/${product.variantName}-${product.productId}`,
                    )
                  }
                  className="py-1.5 md:py-3 font-medium sm:max-w-1/2"
                  rounded="lg"
                  title="Visit Product"
                  type="button"
                  bgcolor="lightPink"
                  titleColor="black"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageCard;
