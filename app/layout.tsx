import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hannah Matthews",
  description: "Product Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-tight hover:text-neutral-500 transition-colors">
              Hannah Matthews
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/projects" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                Projects
              </Link>
<Link href="/beauty" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                Launched Customer Projects
              </Link>
              <Link href="/hct" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                HCT Stock
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-neutral-200">
          <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
            <span className="text-xs text-neutral-400">© {new Date().getFullYear()} Hannah Matthews</span>
            <div className="flex items-center gap-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">LinkedIn</a>
              <a href="mailto:hello@hannahmatthews.com" className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
