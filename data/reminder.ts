// ============================================================
// YAHAN SE "WEBSITE KHULTE HI REMINDER POPUP" CONTROL HOTA HAI
//
// KAISE USE KAREIN:
// 1. enabled: true  -> popup dikhega | false -> popup band
// 2. title / message -> popup me jo likhna hai wo likhein
// 3. IMAGE lagane ke liye:
//      - image file ko "public/reminder/" folder me daalein
//        (jaise: public/reminder/offer.jpg)
//      - neeche image: "/reminder/offer.jpg" likhein
// 4. VIDEO lagane ke liye (image ki jagah, dono ek saath bhi chalenge):
//      - apni .mp4 file "public/reminder/" me daalein aur
//        video: "/reminder/intro.mp4" likhein
//      - YA seedha YouTube link daal dein:
//        video: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
//      - YA Instagram reel ka link daal dein:
//        video: "https://www.instagram.com/reel/XXXXXXXXXXX/"
//        (reel public account ki honi chahiye, private ho to nahi chalegi)
// 5. Jo cheez nahi chahiye (image/video/button) uski line hata dein
//    ya "" likh dein. Ye sab optional hain.
// 6. oncePerSession: true -> ek tab/session me sirf ek baar dikhega
//                    false -> har baar website open/refresh par dikhega
// ============================================================

export type Reminder = {
  enabled: boolean;
  title: string;
  message?: string;
  image?: string;
  video?: string;
  buttonText?: string;
  buttonLink?: string;
  oncePerSession: boolean;
};

export const reminder: Reminder = {
  enabled: true,
  title: "Reminder",
  message:
    "Apne semester ke notes, assignments aur PYQ time par download kar lein. Naye notices home page par dekhte rahein!",
  image: "/reminder/offer.jpg", // apni image se badal dein, ya line hata dein
  // video: "/reminder/intro.mp4",
  // video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  // video: "https://www.instagram.com/reel/Df2Irfuo1TJ/?knvt=MXVyOGhtOGxvaWx4cw==",
  buttonText: "Notices dekhein",
  buttonLink: "/#notices",
  oncePerSession: false,
};
