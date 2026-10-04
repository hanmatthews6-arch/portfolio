import Link from "next/link";
import { projects, posts } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const recentPost = posts[0];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-5">
        <div className="space-y-1">
          <p className="text-sm text-neutral-500 tracking-wide uppercase">Product Design Engineer</p>
          <h1 className="text-3xl font-semibold tracking-tight">Hannah Matthews</h1>
          <p className="text-sm text-neutral-500">B.S. Mechanical Engineering, Minor in Computer Science</p>
          <p className="text-sm text-neutral-500">University of Colorado Boulder</p>
        </div>
        <p className="text-neutral-600 leading-relaxed max-w-lg">
          Mechanical engineer specializing in consumer product design for the beauty industry.
          Based in Santa Monica, I manage end-to-end packaging development at HCT by kdc/one —
          from 3D modeling and prototyping in SolidWorks to injection mold tool validation,
          technical drawing approval, and coordinating with overseas suppliers to bring products to market.
        </p>
        <div className="flex items-center gap-4 pt-1">
          <Link
            href="/beauty"
            className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors"
          >
            View Launched Customer Projects
          </Link>
        </div>
      </section>

      {/* Currently */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Currently</h2>
        <ul className="space-y-2">
          {[
            "Design engineering custom packaging for cosmetic companies",
            "Leading sustainability packaging initiatives at HCT by kdc/one",
            "Daily collaboration with global suppliers, driving packaging from tooling validation to market launch",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
              <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "SolidWorks (1500+ hrs)",
            "Design for Assembly",
            "Design for Manufacturing",
            "GD&T",
            "Injection Molding",
            "Blow Molding",
            "Injection Blow Molding",
            "AQL Inspection",
            "CPK Analysis",
          ].map((skill) => (
            <span key={skill} className="text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Selected Work</h2>
          <Link href="/projects" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
            All projects →
          </Link>
        </div>
        <div className="space-y-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="block border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium group-hover:text-neutral-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-neutral-500">{project.description}</p>
                </div>
                <span className="text-xs text-neutral-400 shrink-0">{project.year}</span>
              </div>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
