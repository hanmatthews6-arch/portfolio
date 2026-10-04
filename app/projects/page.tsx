import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Hannah Matthews",
  description: "Engineering and design projects by Hannah Matthews.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-neutral-500">
          Engineering and design work from school and beyond.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <h2 className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed">{project.description}</p>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xs text-neutral-400 shrink-0 pt-0.5">{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
