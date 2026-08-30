"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { semesters } from "@/data/semesters";
import { resources, CATEGORY_LABEL } from "@/data/resources";
import AdSlot from "@/components/AdSlot";

export default function SearchResults() {
  const params = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const subjectHits = useMemo(() => {
    if (!q) return [];
    const hits: { semesterId: number; semesterName: string; subject: string }[] = [];
    for (const sem of semesters) {
      for (const sub of sem.subjects) {
        if (sub.name.toLowerCase().includes(q)) {
          hits.push({ semesterId: sem.id, semesterName: sem.name, subject: sub.name });
        }
      }
    }
    return hits;
  }, [q]);

  const fileHits = useMemo(() => {
    if (!q) return [];
    return resources.filter(
      (r) => r.subject.toLowerCase().includes(q) || r.label.toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-700">
          🔍 &quot;{params.get("q") || ""}&quot; ke liye results
        </h1>

        <AdSlot variant="banner" className="my-6" />

        {!q ? (
          <p className="text-gray-500">Kuch search karke dekhein.</p>
        ) : (
          <>
            <section className="mt-6">
              <h2 className="text-xl font-bold text-gray-800">Subjects</h2>
              {subjectHits.length === 0 ? (
                <p className="mt-2 text-sm text-gray-400">Koi subject nahi mila.</p>
              ) : (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {subjectHits.map((h, i) => (
                    <a
                      key={i}
                      href={`/semester/${h.semesterId}`}
                      className="animate-slide-up rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <p className="font-medium text-gray-800">{h.subject}</p>
                      <p className="text-xs text-gray-400">{h.semesterName}</p>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-bold text-gray-800">Files</h2>
              {fileHits.length === 0 ? (
                <p className="mt-2 text-sm text-gray-400">Koi file nahi mili.</p>
              ) : (
                <div className="mt-3 space-y-2">
                  {fileHits.map((f, i) => (
                    <a
                      key={i}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex animate-slide-up items-center justify-between rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{f.label}</p>
                        <p className="text-xs text-gray-400">
                          {f.subject} · Sem {f.semesterId} · {CATEGORY_LABEL[f.category]}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-blue-600">Open →</span>
                    </a>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
