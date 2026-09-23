// ============================================================
// YAHAN HOME PAGE KE NOTICE BOARD KE NOTICES AATE HAIN
// Naya notice add karne ke liye niche array me ek naya object daal dein.
// Sabse upar wala notice sabse pehle dikhega.
//
// IMAGE ADD KARNE KA TARIKA:
// 1. Apni image file ko "public/notices/" folder me daal dein
//    (jaise: public/notices/nss-form.jpg)
// 2. Neeche "image" field me uska path likhein: "/notices/nss-form.jpg"
// Agar kisi notice me image nahi chahiye to "image" field hata dein ya
// use likhe hi nahi (ye optional hai).
// ============================================================

export type Notice = {
  title: string;
  message: string;
  date: string;
  image?: string;
};

export const notices: Notice[] = [
  {
    title: "National Service Scheme (NSS) Form",
    message:
      "MITRC College me National Service Scheme (NSS) ke form bhare ja rahe hain. Jisko bharna hai wo iska printout nikalwa le ya Rahish Sir se form mang le, aur bharne ke baad Dimpi Mam ke paas jama kar de.",
    date: "23 September 2026",
    image: "/notices/nss-form.jpg",
  },
  {
    title: "Welcome",
    message: "MITRCkamaal par aapka swagat hai! Yahan se apne semester ke notes, assignments, practical files aur PYQ download karein.",
    date: "21 July 2026",
  },
];
