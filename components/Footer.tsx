const QUICK_LINKS = [
  { href: "/notes", label: "Notes" },
  { href: "/assignment", label: "Assignments" },
  { href: "/files", label: "Practical Files" },
  { href: "/pyq", label: "PYQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-700 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-8 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">MITRCkamaal</h3>
          <p className="mt-2 text-sm text-blue-100">
            Free college notes, assignments, practical files aur PYQ — sab ek jagah.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-yellow-300">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-100">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-yellow-300">Semesters</h4>
          <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-blue-100">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <li key={s}>
                <a href={`/semester/${s}`} className="transition hover:text-white">
                  Semester {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-yellow-300">College</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-100">
            <li>
              <a
                href="https://btu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                BTU Bikaner
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-600 py-4 text-center text-sm text-blue-100">
        © 2026 MITRCKamaal | Team members
                           Saurabh singh       Sumit kumar
                           Yashvardhan singh   Tushar meena
      </div>
    </footer>
  );
}
