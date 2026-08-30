import { getResources, FileCategory } from "@/data/resources";

type Props = {
  semesterId: number;
  subject: string;
  category: FileCategory;
};

export default function ResourceList({ semesterId, subject, category }: Props) {
  const items = getResources(semesterId, subject, category);

  if (items.length === 0) {
    return <p className="text-sm text-gray-400">Abhi tak koi file add nahi hui hai.</p>;
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-gray-500">
        {items.length} file{items.length === 1 ? "" : "s"}
      </p>
      {items.map((r, i) => (
        <a
          key={`${r.label}-${i}`}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex animate-slide-up items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="truncate text-sm font-medium text-gray-800">🔗 {r.label}</p>
          <span className="shrink-0 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700">
            Open
          </span>
        </a>
      ))}
    </div>
  );
}
