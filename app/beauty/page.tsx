import { beautyProducts } from "@/lib/data";

export const metadata = {
  title: "Beauty — Hannah Matthews",
  description: "Cosmetic and beauty products I've worked on.",
};

const CATEGORIES = ["All", "Skincare", "Makeup", "Fragrance", "Haircare", "Body"];

export default function BeautyPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Launched Customer Projects</h1>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
          Managed end-to-end consumer product design through 3D modeling and prototyping, injection mold tool validation, and technical drawing approval — ensuring successful product launches for some of the world&apos;s most recognized beauty brands.
        </p>
      </div>

      {/* Product Grid */}
      {beautyProducts.length === 0 ? (
        <p className="text-sm text-neutral-400">Products coming soon.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {beautyProducts.map((product) => (
            <a
              key={product.id}
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Image */}
              <div className="aspect-square bg-white overflow-hidden mb-3 relative">
                {product.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.imageUrl}
                    alt={`${product.brand} ${product.name}`}
                    className={`w-full h-full ${product.objectFit === "contain" ? "object-contain" : "object-cover"}`}
                    style={{ mixBlendMode: "multiply", ...(product.objectPosition ? { objectPosition: product.objectPosition } : {}) }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-neutral-300 font-medium tracking-widest uppercase">
                      {product.brand}
                    </span>
                  </div>
                )}
                {/* External link indicator */}
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-sm text-neutral-600 text-xs">
                  ↗
                </span>
              </div>

              {/* Info */}
              <div className="space-y-0.5">
                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                  {product.brand}
                </p>
                <p className="text-sm font-medium text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                  {product.name}
                </p>
                <p className="text-xs text-neutral-400">{product.role}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
