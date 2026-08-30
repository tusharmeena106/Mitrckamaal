import { notices } from "@/data/notices";

export default function NoticeBoard() {
  return (
    <div className="animate-slide-up rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="flex items-center gap-2 text-xl font-bold text-black">
        <span className="animate-wiggle inline-block">📢</span> Notices
      </h3>

      <div className="mt-4 space-y-3">
        {notices.length === 0 ? (
          <p className="text-sm text-gray-400">Koi notice nahi hai abhi.</p>
        ) : (
          notices.map((n, i) => (
            <div
              key={i}
              className="animate-slide-up rounded-xl border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3"
            >
              <p className="text-sm font-semibold text-gray-800">{n.title}</p>
              <p className="mt-0.5 text-sm text-gray-600">{n.message}</p>
              <p className="mt-1 text-xs text-gray-400">{n.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
