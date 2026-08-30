"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/assignment", label: "Assignments" },
  { href: "/files", label: "Practical Files" },
  { href: "/pyq", label: "PYQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <nav className="sticky top-0 z-40 bg-blue-700 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="/" className="shrink-0 text-2xl font-bold transition hover:opacity-90 md:text-3xl">
          MITRCkamaal
        </a>

        <form onSubmit={onSearch} className="order-3 w-full md:order-none md:w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍 Search subject, PDF..."
            className="w-full rounded-lg border-none px-3 py-2 text-sm text-gray-800 shadow-inner outline-none transition focus:scale-[1.02] focus:ring-2 focus:ring-yellow-300"
          />
        </form>

        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link hidden text-sm transition-colors hover:text-yellow-300 sm:inline"
            >
              {l.label}
            </a>
          ))}
          <button className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-gray-200 active:scale-95">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
