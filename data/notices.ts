// ============================================================
// YAHAN HOME PAGE KE NOTICE BOARD KE NOTICES AATE HAIN
// Naya notice add karne ke liye niche array me ek naya object daal dein.
// Sabse upar wala notice sabse pehle dikhega.
// ============================================================

export type Notice = {
  title: string;
  message: string;
  date: string;
};

export const notices: Notice[] = [
  {
    title: "Welcome",
    message: "MITRCkamaal par aapka swagat hai! Yahan se apne semester ke notes, assignments, practical files aur PYQ download karein.",
    date: "21 July 2026",
  },
];
