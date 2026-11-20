"use client";

import { useEffect, useState } from "react";
import { reminder } from "@/data/reminder";

const STORAGE_KEY = `reminder-seen:${reminder.title}`;

// YouTube link ko embed link me badalta hai (watch, youtu.be, shorts, embed)
function getYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    let id: string | null = null;
    if (u.hostname === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (u.hostname.endsWith("youtube.com")) {
      if (u.pathname === "/watch") id = u.searchParams.get("v");
      else if (u.pathname.startsWith("/shorts/") || u.pathname.startsWith("/embed/"))
        id = u.pathname.split("/")[2];
    }
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
  } catch {
    return null;
  }
}

// Instagram reel/post link ko embed link me badalta hai
function getInstagramEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("instagram.com")) return null;
    const m = u.pathname.match(/^\/(?:[^/]+\/)?(reel|reels|p|tv)\/([^/?]+)/);
    if (!m) return null;
    const type = m[1] === "reels" ? "reel" : m[1];
    return `https://www.instagram.com/${type}/${m[2]}/embed`;
  } catch {
    return null;
  }
}

export default function ReminderPopup() {
  const [open, setOpen] = useState(false);

  // Website khulte hi popup dikhao
  useEffect(() => {
    if (!reminder.enabled) return;
    if (reminder.oncePerSession) {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) return;
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // storage block ho to bhi popup dikha do
      }
    }
    setOpen(true);
  }, []);

  // Escape dabane par band + piche ka scroll lock
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const youtubeEmbed = reminder.video ? getYouTubeEmbed(reminder.video) : null;
  const instagramEmbed = reminder.video ? getInstagramEmbed(reminder.video) : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="alertdialog"
      aria-modal="true"
      aria-label={reminder.title}
    >
      {/* Dark background - isme click karne par bhi band ho jayega */}
      <div
        className="absolute inset-0 animate-fade-in bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative max-h-[90vh] w-full max-w-md animate-scale-in overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Cross (close) button - upar right me */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white shadow-md transition hover:bg-black/80 active:scale-90"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Video (YouTube ya mp4) */}
        {reminder.video &&
          (instagramEmbed ? (
            <iframe
              src={instagramEmbed}
              title={reminder.title}
              className="h-[70vh] max-h-[640px] w-full bg-white"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : youtubeEmbed ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={youtubeEmbed}
                title={reminder.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              src={reminder.video}
              className="max-h-[60vh] w-full bg-black"
              controls
              autoPlay
              muted
              playsInline
            />
          ))}

        {/* Image */}
        {reminder.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={reminder.image}
            alt={reminder.title}
            className="max-h-[60vh] w-full object-contain bg-gray-50"
          />
        )}

        <div className="p-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="animate-wiggle inline-block">🔔</span> {reminder.title}
          </h3>
          {reminder.message && (
            <p className="mt-2 text-sm text-gray-600">{reminder.message}</p>
          )}
          {reminder.buttonText && reminder.buttonLink && (
            <a
              href={reminder.buttonLink}
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              {reminder.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
