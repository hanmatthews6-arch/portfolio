import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Hannah Matthews`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="space-y-10">
      {/* Back */}
      <Link
        href="/projects"
        className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
      >
        ← All projects
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
          {project.category} · {project.year}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-neutral-500 leading-relaxed max-w-xl">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      {project.heroImage && (
        <div className="w-full bg-white overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full object-contain max-h-80"
          />
        </div>
      )}

      {/* Progression Images */}
      {project.progressionImages && project.progressionImages.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {project.progressionImages.map((img, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div className="flex-1 space-y-2">
                  <div className="aspect-square bg-white overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-center text-neutral-400 font-medium">{img.label}</p>
                </div>
                {i < project.progressionImages!.length - 1 && (
                  <span className="text-neutral-300 text-lg shrink-0 mb-5">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Images — only shown for projects without sections */}
      {!project.sections && project.images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {project.images.map((src, i) => (
            <div key={i} className="aspect-square bg-neutral-50 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${project.title} view ${i + 1}`}
                className="w-full h-full object-contain p-1"
              />
            </div>
          ))}
        </div>
      )}

      {/* Files */}
      {project.files && project.files.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Documents</h2>
          <div className="flex flex-wrap gap-3">
            {project.files.map((file) => (
              <a
                key={file.href}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium border border-neutral-200 px-4 py-2 rounded-md hover:border-neutral-400 transition-colors"
              >
                {file.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      {project.sections && project.sections.length > 0 ? (
        <div className="space-y-10">
          {project.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">{section.title}</h2>
              {section.content && (
                <p className="text-sm text-neutral-600 leading-relaxed">{section.content}</p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                      <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.images && section.images.length > 0 && (
                <div className={`grid gap-3 mt-2 ${section.images.length === 1 ? "grid-cols-1" : section.images.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
                  {section.images.map((src, i) => (
                    <div key={i} className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${section.title} image ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : project.highlights.length > 0 ? (
        <div className="space-y-3">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
