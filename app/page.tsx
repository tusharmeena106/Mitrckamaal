import AdSlot from "@/components/AdSlot";
import NoticeBoard from "@/components/NoticeBoard";
import LatestUploads from "@/components/LatestUploads";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative min-h-[600px] overflow-hidden bg-fixed"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover", // "cover" | "contain" | "150%" jaisa custom % bhi chal jayega
          backgroundPosition: "center", // "center" | "top" | "bottom" | "20% 40%" waghera
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Halka white overlay taaki text readable rahe - number kam karoge to photo zyada saaf dikhegi */}
        <div className="absolute inset-0 bg-white/0" />

        <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl animate-float" />
        <div className="pointer-events-none absolute top-10 right-0 h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl animate-float" />

        <section className="relative flex min-h-[600px] flex-col items-center justify-center text-center animate-fade-in">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 bg-clip-text text-transparent animate-gradient">
            Welcome to MITRCkamaal
          </h2>

          <p className="text-white-600 mt-5 text-white">
            Download College Notes, Assignments, Practical Files and Previous Year Papers for Free.
          </p>
          <a href="/semester/1">
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:scale-95">
              Explore Semester 1
            </button>
          </a>
        </section>
      </div>

      <div className="px-10">
        <AdSlot variant="banner" />
      </div>

      {/* Notices + Latest Uploads */}
      <section className="grid gap-6 px-10 py-10 md:grid-cols-2">
        <NoticeBoard />
        <LatestUploads />
      </section>

      {/* Semester Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
       {[1,2,3,4,5,6,7,8].map((sem, i) => (
  <a key={sem} href={`/semester/${sem}`}>
    <div
      style={{ animationDelay: `${i * 60}ms` }}
      className="animate-slide-up bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 hover:-rotate-1 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <h3 className="text-2xl font-bold text-black">
        Semester {sem}
      </h3>
    </div>
  </a>
))}
      </section>

      <div className="px-10 pb-10">
        <AdSlot variant="banner" />
      </div>
    </main>
  );
}
