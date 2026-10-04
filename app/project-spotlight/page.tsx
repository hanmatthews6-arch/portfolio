export const metadata = {
  title: "Project Spotlight — Hannah Matthews",
  description: "A deep dive into a featured project.",
};

export default function ProjectSpotlightPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Featured</p>
        <h1 className="text-2xl font-semibold tracking-tight">Project Spotlight</h1>
        <p className="text-neutral-500 leading-relaxed max-w-xl">
          A closer look at a select project — the problem, the process, and the outcome.
        </p>
      </div>
    </div>
  );
}
