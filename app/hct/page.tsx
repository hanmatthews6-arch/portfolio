export const metadata = {
  title: "HCT Stock Packaging — Hannah Matthews",
  description: "Stock packaging components I've developed at HCT by KDC/One.",
};

import Link from "next/link";

type HCTProduct = {
  id: string;
  name: string;
  collection: string;
  category: string;
  description: string;
  features: string[];
  imageFile: string;
  hasDetail?: boolean;
};

const hctProducts: HCTProduct[] = [
  {
    id: "nora-compact",
    name: "Nora Compact",
    collection: "Nora",
    category: "Face",
    description: "A mono-material PET powder compact with an optional mirror, built for sustainability without sacrificing elegance.",
    features: [
      "Mono-material PET construction with optional mirror",
      "Rounded-square silhouette with soft edges",
      "Fully recyclable design",
    ],
    imageFile: "nora-compact.jpg",
    hasDetail: true,
  },
  {
    id: "kona-jar",
    name: "Kona Jar",
    collection: "Kona",
    category: "Skincare / Body / Hair",
    description: "A clean, rounded jar made from monomaterial PP, available in 50ml, 100ml, and 300ml with a premium double-wall feel.",
    features: [
      "Monomaterial PP for full recyclability",
      "Available in 50ml, 100ml, and 300ml",
      "Double-wall design for durability and premium hand feel",
    ],
    imageFile: "kona-jar.jpg",
  },
  {
    id: "nora-lip-gloss",
    name: "Nora Lip Gloss",
    collection: "Nora",
    category: "Lip",
    description: "A sleek, versatile lip gloss component built from PET — ABS-free and designed to fit seamlessly in the Nora family.",
    features: [
      "PET cap and bottle — eliminates traditional ABS",
      "Signature rounded-square Nora silhouette",
      "Improved recyclability and sustainable packaging",
    ],
    imageFile: "nora-lip-gloss.jpg",
  },
  {
    id: "block-chubby-lipgloss",
    name: "Block Chubby Lip Gloss",
    collection: "Block",
    category: "Lip",
    description: "A bold, chunky lip gloss component in the signature Block style — ABS-free, airtight, and designed to stand out on shelf and in hand.",
    features: [
      "ABS plastic-free construction for an eco-conscious packaging choice without sacrificing style",
      "Airtight, compact design compatible with glosses, high-pigment liquids, and multi-use formulations",
      "Clean, square profile ideal for showcasing product colors and elevating brand presentation",
    ],
    imageFile: "block-chubby-lipgloss.jpg",
  },
  {
    id: "nora-complexion-stick",
    name: "Nora Complexion Stick",
    collection: "Nora",
    category: "Face",
    description: "A refillable complexion stick with the signature Nora rounded-edge design — monomaterial, sustainable, and showcased at Cosmoprof Worldwide Bologna.",
    features: [
      "Refillable stick with monomaterial system for easy recyclability",
      "Versatile for color cosmetics and skincare formulations",
      "Sleek, ergonomic, on-the-go application experience",
    ],
    imageFile: "nora-complexion-stick.jpg",
  },
  {
    id: "block-compact",
    name: "Block Compact",
    collection: "Block",
    category: "Face",
    description: "A bold, classic compact inspired by the Block range — mono-material PET, ABS-free, with extra depth for baked powder formulas.",
    features: [
      "Mono-material PET, ABS-free for easy recycling",
      "Extra depth for baked powder formulas",
      "Optional mirror included",
    ],
    imageFile: "block-compact.jpg",
  },
];

export default function HCTPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">HCT by KDC/One</p>
        <h1 className="text-2xl font-semibold tracking-tight">Stock Packaging</h1>
        <p className="text-neutral-500">
          Sustainable, design-forward stock packaging components I&apos;ve developed at HCT.
          Available for brands looking for elevated, recyclable solutions.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-10">
        {hctProducts.map((product) => (
          <div key={product.id} className="group">
            {/* Image */}
            <div className="aspect-square bg-neutral-50 rounded-lg overflow-hidden mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/hct/${product.imageFile}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                    {product.collection} Collection
                  </p>
                  <p className="text-sm font-medium text-neutral-900">{product.name}</p>
                  <p className="text-xs text-neutral-400">{product.category}</p>
                </div>
              </div>
              <ul className="space-y-1 pt-1">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-neutral-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {product.hasDetail && (
                <Link
                  href={`/hct/${product.id}`}
                  className="inline-block text-xs text-neutral-400 hover:text-neutral-900 transition-colors pt-1"
                >
                  Learn more about the process →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
