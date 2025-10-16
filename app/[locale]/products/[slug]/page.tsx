import { imageUrlFromStorage } from "@/app/services/homepage";
import { getProductBySlug } from "@/app/services/products";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const paramsResolved = await params;
  const locale = paramsResolved.locale || "en";
  const slug = paramsResolved.slug;
  if (!slug) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  let product: unknown = null;
  try {
    const json = await getProductBySlug(locale, slug);
    product = (json as { data?: unknown })?.data ?? json; // support both wrapped and raw shapes
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

  const title =
    (
      (product as { translations?: unknown[] })?.translations?.[0] as {
        title?: string;
      }
    )?.title ||
    (product as { title?: string })?.title ||
    slug;
  const price = (product as { price?: string | number })?.price;
  const productImages = (product as { images?: unknown[] })?.images;
  const images: string[] = Array.isArray(productImages)
    ? productImages
        .map((img: unknown) =>
          imageUrlFromStorage((img as { image_name?: string })?.image_name)
        )
        .filter((src): src is string => Boolean(src))
    : [];

  const description = (product as { description?: string })?.description;

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
              />
            ))
          ) : (
            <div
              className="w-full h-[300px] bg-light-gray rounded"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          {price && (
            <div className="text-xl font-semibold">{String(price)} GEL</div>
          )}
          {description && (
            <p className="text-gray-700 whitespace-pre-line">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
