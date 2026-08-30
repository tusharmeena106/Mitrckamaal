import { resources, CATEGORY_LABEL } from "@/data/resources";

export default function LatestUploads() {
  const latest = [...resources]
    .filter((r) => r.url.trim() !== "")
    .reverse()
    .slice(0, 6);

  return (
    <div className="animate-slide-up rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="flex items-center gap-2 text-xl font-bold text-black">
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        Latest Files
      </h3>

      <div className="mt-4 space-y-2">
        {latest.length === 0 ? (
          <p className="text-sm text-gray-400">Abhi tak koi file add nahi hui hai.</p>
        ) : (
          latest.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-slide-up flex items-center justify-between gap-3 rounded-xl border border-gray-100 px-4 py-2.5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-800">🔗 {r.label}</p>
                <p className="text-xs text-gray-400">
                  {r.subject} · Sem {r.semesterId} · {CATEGORY_LABEL[r.category]}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold text-blue-700">
                NEW
              </span>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
