"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronIcon, CloseIcon } from "./icons";

export type Shot = { src: string; caption: string };
export type Album = { id: string; label: string; note: string; shots: Shot[] };

export function Gallery({ albums }: { albums: Album[] }) {
  const [tab, setTab] = useState(albums[0].id);
  const [open, setOpen] = useState<number | null>(null);
  const album = albums.find((a) => a.id === tab) ?? albums[0];
  const shots = album.shots;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <div>
      {/* Segmented tabs, styled like the design system's pill tabs */}
      <div role="tablist" className="inline-flex rounded-xl bg-white p-1 shadow-[var(--shadow-card)]">
        {albums.map((a) => (
          <button
            key={a.id}
            role="tab"
            aria-selected={a.id === tab}
            onClick={() => setTab(a.id)}
            className={`min-h-10 rounded-lg px-4 text-sm font-semibold transition ${
              a.id === tab ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">{album.note}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {shots.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setOpen(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-night text-left"
          >
            <Image
              src={s.src}
              alt={s.caption}
              fill
              sizes="(min-width:1024px) 16vw, (min-width:640px) 33vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5 pt-8 text-[12px] leading-snug font-medium text-white">
              {s.caption}
            </span>
          </button>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].caption}
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={close}
        >
          <div className="flex items-center justify-between p-3 text-white">
            <span className="text-sm text-white/70">
              {open + 1}/{shots.length}
            </span>
            <button aria-label="Đóng" className="grid size-11 place-items-center rounded-full bg-white/10">
              <CloseIcon className="size-5" />
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={shots[open].src} alt={shots[open].caption} fill sizes="100vw" className="object-contain" />
            <button
              aria-label="Ảnh trước"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white"
            >
              <ChevronIcon className="size-6 rotate-90" />
            </button>
            <button
              aria-label="Ảnh sau"
              onClick={() => step(1)}
              className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white"
            >
              <ChevronIcon className="size-6 -rotate-90" />
            </button>
          </div>
          <p className="p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-center text-sm text-white">
            {shots[open].caption}
          </p>
        </div>
      ) : null}
    </div>
  );
}
