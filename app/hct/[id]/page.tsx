import Link from "next/link";
import { notFound } from "next/navigation";

const hctDetails: Record<string, {
  name: string;
  collection: string;
  category: string;
  image: string;
  overview: string;
  sections: { title: string; content?: string; bullets?: string[]; images?: string[] }[];
}> = {
  "nora-compact": {
    name: "Nora Compact",
    collection: "Nora",
    category: "Face",
    image: "/hct/nora-compact.jpg",
    overview: "The Nora Compact is a mono-material PET powder compact I developed at HCT by KDC/One as part of the Nora sustainability collection. The goal was to create a fully recyclable, elegant compact that brands could adopt without compromising on premium aesthetics.",
    sections: [
      {
        title: "The Brief",
        content: "The brief was to design a compact that could be made entirely from a single material — eliminating the mixed-material construction that makes most cosmetic packaging impossible to recycle. It needed to feel premium, function reliably, and fit within the Nora family's rounded-square design language.",
      },
      {
        title: "Material Selection",
        bullets: [
          "Monomaterial PET construction — eliminates the need to separate materials before recycling",
          "PET chosen for its clarity, durability, and established recycling infrastructure",
          "ABS-free design — removes one of the most common barriers to cosmetic packaging recyclability",
          "Optional mirror available without compromising recyclability of the base unit",
        ],
      },
      {
        title: "Design Engineering",
        content: "Worked with an industrial designer to model and prototype the small blush compact. After viewing the prototype, decided to scale the compact into a pressed powder compact. The pan was updated to use a stock pan to reduce tooling cost.",
        bullets: [
          "PET monomaterial compact",
          "2-piece cap and 2-piece base, sonic welded",
          "Mirror attached to the inner cap",
          "Outer clasp to close the compact",
        ],
      },
      {
        title: "Design Updates",
        content: "After reviewing the initial design, the mini blush compact was modified into a powder size compact utilizing a stock pan to reduce tooling cost. The design went through three key stages:",
        images: [
          "/hct/nora-compact-1.jpg",
          "/hct/nora-compact-2.jpg",
        ],
        bullets: [
          "Mini blush compact — original concept establishing the Nora silhouette",
          "Larger powder compact — scaled up for powder formula but too large and overpackaged",
          "Resized powder compact — scaled back down, preserving the look without excess",
        ],
      },
      {
        title: "Technical Drawing Approval",
        content: "Key considerations resolved during the technical drawing and tooling phase:",
        bullets: [
          "Ensure the compact could be purchased without the mirror for full recyclability",
          "Gate location — worked with the supplier to place a single gate on the side of the hinge",
        ],
      },
      {
        title: "Sustainability Goals",
        content: "The Nora Compact was developed as part of HCT's broader sustainability initiative to bring mono-material and refillable packaging options to market. By designing with end-of-life in mind from the start, the compact can enter standard PET recycling streams without requiring disassembly.",
      },
      {
        title: "Available for Brands",
        content: "The Nora Compact is a stock component available for brands through HCT by KDC/One. It can be customized with brand-specific decoration, color, and finish options. Contact HCT directly to discuss sampling and minimum order quantities.",
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detail = hctDetails[id];
  if (!detail) return {};
  return { title: `${detail.name} — Hannah Matthews` };
}

export default async function HCTDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detail = hctDetails[id];
  if (!detail) notFound();

  return (
    <div className="space-y-10">
      <Link href="/hct" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
        ← HCT Stock
      </Link>

      <div className="space-y-3">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
          {detail.collection} Collection · {detail.category}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{detail.name}</h1>
        <p className="text-neutral-500 leading-relaxed max-w-xl">{detail.overview}</p>
      </div>

      {/* Hero Image */}
      <div className="w-full overflow-hidden rounded-lg bg-neutral-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={detail.image}
          alt={detail.name}
          className="w-full object-contain max-h-80"
        />
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {detail.sections.map((section) => (
          <div key={section.title} className="space-y-3">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">{section.title}</h2>
            {section.content && (
              <p className="text-sm text-neutral-600 leading-relaxed">{section.content}</p>
            )}
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-1">
                {section.images.map((src, i) => (
                  <div key={i} className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${section.title} ${i + 1}`}
                      className="w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-neutral-600">
                    <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
