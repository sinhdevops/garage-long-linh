import { directionsHref, site, telHref } from "@/lib/site";
import { MapPinIcon, MessengerIcon, PhoneIcon, ZaloIcon } from "./icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function MessengerLink({
  className = "",
  children,
  track = "messenger",
}: {
  className?: string;
  children: React.ReactNode;
  track?: string;
}) {
  return (
    <a href={site.messenger} {...ext} data-track={track} className={className}>
      {children}
    </a>
  );
}

export function CallLink({
  className = "",
  children,
  phone = site.phones[0].tel,
  track = "call",
}: {
  className?: string;
  children: React.ReactNode;
  phone?: string;
  track?: string;
}) {
  return (
    <a href={telHref(phone)} data-track={track} className={className}>
      {children}
    </a>
  );
}

/** Mobile bottom bar: always visible, one tap to contact. */
export function StickyContactBar() {
  return (
    <nav
      aria-label="Liên hệ nhanh"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-1 px-2 py-2">
        <CallLink className="flex w-14 flex-col items-center justify-center gap-0.5 rounded-xl text-[11px] whitespace-nowrap font-semibold text-call active:bg-surface">
          <PhoneIcon className="size-5" />
          Gọi
        </CallLink>
        {site.zalo ? (
          <a
            href={site.zalo}
            {...ext}
            data-track="zalo"
            className="flex w-14 flex-col items-center justify-center gap-0.5 rounded-xl text-[11px] whitespace-nowrap font-semibold text-zalo active:bg-surface"
          >
            <ZaloIcon className="size-5" />
            Zalo
          </a>
        ) : null}
        <a
          href={directionsHref}
          {...ext}
          data-track="directions"
          className="flex w-14 flex-col items-center justify-center gap-0.5 rounded-xl text-[11px] whitespace-nowrap font-semibold text-ink active:bg-surface"
        >
          <MapPinIcon className="size-5" />
          Chỉ đường
        </a>
        <MessengerLink
          track="messenger-sticky"
          className="cta-pulse ml-1 flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-messenger px-3 text-[15px] font-bold whitespace-nowrap text-white"
        >
          <MessengerIcon className="size-5" />
          Gửi ảnh báo giá
        </MessengerLink>
      </div>
    </nav>
  );
}

/** Desktop: floating buttons in the bottom-right corner. */
export function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-5 z-40 hidden flex-col items-end gap-3 md:flex">
      {site.zalo ? (
        <a
          href={site.zalo}
          {...ext}
          data-track="zalo-float"
          aria-label="Chat Zalo"
          className="grid size-12 place-items-center rounded-full bg-white text-zalo shadow-[var(--shadow-pop)] transition hover:scale-105"
        >
          <ZaloIcon className="size-7" />
        </a>
      ) : null}
      <CallLink
        track="call-float"
        className="grid size-12 place-items-center rounded-full bg-call text-white shadow-[var(--shadow-pop)] transition hover:scale-105"
      >
        <PhoneIcon className="size-5" />
        <span className="sr-only">Gọi {site.phones[0].display}</span>
      </CallLink>
      <MessengerLink
        track="messenger-float"
        className="cta-pulse flex h-14 items-center gap-2 rounded-full bg-messenger pr-5 pl-4 font-bold text-white shadow-[var(--shadow-pop)] transition hover:scale-[1.03]"
      >
        <MessengerIcon className="size-6" />
        Gửi ảnh xe báo giá
      </MessengerLink>
    </div>
  );
}
