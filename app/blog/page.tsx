import Link from "next/link";
import { posts } from "@/lib/data";

export const metadata = {
  title: "Blog — Hannah Matthews",
  description: "Thoughts on design, engineering, and the space between.",
};

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="text-neutral-500">Thoughts on design, engineering, and the space between.</p>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <h2 className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-500">{post.excerpt}</p>
              </div>
              <span className="text-xs text-neutral-400 shrink-0 pt-0.5">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
