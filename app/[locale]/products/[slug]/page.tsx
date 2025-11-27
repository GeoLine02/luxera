// import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const paramsResolved = await params;
  // const locale = paramsResolved.locale || "en";
  const slug = paramsResolved.slug;
  if (!slug) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="px-5 py-6 lg:px-11">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <div className="space-y-4">
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
        </div> */}
        {/* <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          {price && (
            <div className="text-xl font-semibold">{String(price)} GEL</div>
          )}
          {description && (
            <p className="text-gray-700 whitespace-pre-line">{description}</p>
          )}
        </div> */}
      </div>
    </div>
  );
}
