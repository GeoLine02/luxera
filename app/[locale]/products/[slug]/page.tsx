import { imageUrlFromStorage } from "@/app/services/homepage";
import { getProductBySlug } from "@/app/services/products";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
}) {
  const resolvedParams =
    typeof (params as any)?.then === "function"
      ? await (params as Promise<{ locale: string; slug: string }>)
      : (params as { locale: string; slug: string });
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  if (!slug) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  let product: any = null;
  try {
    const json = await getProductBySlug(locale, slug);
    product = json?.data ?? json; // support both wrapped and raw shapes
  } catch (e) {
    console.error("Failed to load product", e);
  }

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  const title = (product?.translations?.[0]?.title || product?.title || slug).toString();
  const price = product?.price;
  const images: string[] = Array.isArray(product?.images)
    ? product.images
        .map((img: any) => imageUrlFromStorage(img?.image_name))
        .filter(Boolean) as string[]
    : [];

  return (
    <div className="px-5 py-6 lg:px-11">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {images.length > 0 ? (
            images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={title}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded"
              />)
            )
          ) : (
            <div className="w-full h-[300px] bg-light-gray rounded" aria-hidden="true" />
          )}
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          {price && <div className="text-xl font-semibold">{price} GEL</div>}
          {product?.description && (
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
