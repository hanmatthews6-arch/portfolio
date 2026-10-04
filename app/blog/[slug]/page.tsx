import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Hannah Matthews`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <article className="space-y-10">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
      >
        ← Blog
      </Link>

      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs text-neutral-400">{post.date}</p>
        <h1 className="text-2xl font-semibold tracking-tight leading-snug">{post.title}</h1>
        <p className="text-neutral-500">{post.excerpt}</p>
      </header>

      <hr className="border-neutral-200" />

      {/* Content */}
      <div className="space-y-5 text-neutral-700 leading-relaxed">
        {paragraphs.map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="text-base font-semibold text-neutral-900 pt-4">
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("**") && block.endsWith("**")) {
            return (
              <p key={i} className="font-medium text-neutral-900">
                {block.replace(/\*\*/g, "")}
              </p>
            );
          }
          // Handle inline bold
          const parts = block.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={i} className="text-sm leading-7">
              {parts.map((part, j) =>
                part.startsWith("**") && part.endsWith("**") ? (
                  <strong key={j} className="font-medium text-neutral-900">
                    {part.replace(/\*\*/g, "")}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        })}
      </div>

      <hr className="border-neutral-200" />

      {/* Footer nav */}
      <div className="flex items-center justify-between text-sm">
        <Link href="/blog" className="text-neutral-400 hover:text-neutral-900 transition-colors">
          ← All posts
        </Link>
      </div>
    </article>
  );
}
