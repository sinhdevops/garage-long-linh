import Image from "next/image";
import { CallLink, FloatingContact, MessengerLink, StickyContactBar } from "@/components/ContactButtons";
import { Gallery, type Album } from "@/components/Gallery";
import {
  ArrowRightIcon,
  BikeIcon,
  CameraIcon,
  CarIcon,
  ChatIcon,
  CheckIcon,
  ChevronIcon,
  ClockIcon,
  FacebookIcon,
  GiftIcon,
  HammerIcon,
  MapPinIcon,
  MessengerIcon,
  PhoneIcon,
  SeatIcon,
  ShieldIcon,
  SparkleIcon,
  SprayIcon,
  SteeringIcon,
  WheelIcon,
  WrenchIcon,
  ZaloIcon,
} from "@/components/icons";
import { directionsHref, mapEmbedSrc, site, telHref } from "@/lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ------------------------------------------------------------------ data */

const nav = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#hinh-anh", label: "Hình ảnh" },
  { href: "#uu-dai", label: "Ưu đãi" },
  { href: "#lien-he", label: "Liên hệ" },
];

const featured = [
  {
    title: "Gò hàn – sơn ô tô",
    img: "/assets/kia-door.webp",
    alt: "Cửa xe móp, bong tróc sơn trước khi gò sơn",
    desc: "Va quẹt, móp méo, trầy xước, bong sơn. Gò nắn lại đúng form rồi sơn dặm hoặc sơn toàn xe.",
    points: ["Gò nắn móp méo, hàn vá", "Sơn dặm hoặc sơn lại toàn xe", "Pha màu theo màu xe"],
  },
  {
    title: "Phục hồi xe tai nạn",
    img: "/assets/kia-rear.webp",
    alt: "Đuôi xe biến dạng sau tai nạn",
    desc: "Xe biến dạng, gỉ sét nặng, hư nhiều mảng. Xử lý từ khung vỏ đến lớp sơn cuối.",
    points: ["Nắn khung, vỏ xe biến dạng", "Xử lý gỉ sét, bả matit", "Sơn hoàn thiện, đánh bóng"],
  },
];

const otherServices = [
  { icon: SparkleIcon, label: "Đánh bóng, phục hồi sơn" },
  { icon: SeatIcon, label: "Sơn nội thất" },
  { icon: SteeringIcon, label: "Độ vô lăng ô tô" },
  { icon: BikeIcon, label: "Sơn xe máy" },
  { icon: WheelIcon, label: "Độ, tẩy lazang" },
  { icon: CarIcon, label: "Đồ chơi xe" },
  { icon: WrenchIcon, label: "Sửa chữa, bảo dưỡng" },
  { icon: SprayIcon, label: "Sơn ô tô các loại" },
];

const steps = [
  { img: "/assets/kia-door.webp", title: "Gò nắn, hàn", desc: "Đưa phần móp méo, biến dạng về lại đúng form." },
  { img: "/assets/kia-rust.webp", title: "Xử lý gỉ, bả matit", desc: "Làm sạch gỉ sét, bả và chà phẳng bề mặt." },
  { img: "/assets/paint-masking.webp", title: "Che chắn, sơn lót", desc: "Che kỹ kính, đèn, rồi phun lớp lót bám chắc." },
  { img: "/assets/paint-red-door.webp", title: "Sơn màu, đánh bóng", desc: "Lên màu trong phòng sơn kín cho bóng đều." },
];

const orderSteps = [
  {
    icon: CameraIcon,
    title: "Chụp & gửi ảnh xe",
    desc: "Chụp toàn xe và cận chỗ hư, gửi qua Messenger hoặc Zalo.",
  },
  {
    icon: ChatIcon,
    title: "Nhận báo giá",
    desc: "Thợ xem ảnh, báo giá và hẹn ngày đưa xe tới.",
  },
  {
    icon: CarIcon,
    title: "Mang xe tới, nhận xe đẹp",
    desc: "Làm xong báo anh chị qua lấy xe, bóng đẹp như mới.",
  },
];

const whyUs = [
  { icon: ShieldIcon, title: "Phòng sơn kín riêng", desc: "Sơn trong buồng kín, hạn chế bụi bám, màu lên đều và bóng." },
  { icon: CameraIcon, title: "Báo giá qua ảnh", desc: "Biết giá trước khi mang xe tới, không phải chạy ra xưởng hỏi." },
  { icon: HammerIcon, title: "Ô tô & xe máy", desc: "Từ va quẹt nhỏ đến xe tai nạn biến dạng đều nhận làm." },
  { icon: GiftIcon, title: "Tặng kèm khi sơn", desc: "Đánh bóng toàn xe và tẩy lazang miễn phí khi sơn tại xưởng." },
];

const albums: Album[] = [
  {
    id: "truoc",
    label: "Xe khách mang tới",
    note: "Tình trạng xe lúc khách mang tới xưởng. Chạm vào ảnh để xem lớn.",
    shots: [
      { src: "/assets/kia-at-garage.webp", caption: "Xe tai nạn đậu trước xưởng" },
      { src: "/assets/kia-door.webp", caption: "Cửa móp, bong tróc sơn" },
      { src: "/assets/kia-rust.webp", caption: "Hốc bánh gỉ sét nặng" },
      { src: "/assets/kia-side.webp", caption: "Hông xe trầy, móp nhiều chỗ" },
      { src: "/assets/kia-rear.webp", caption: "Đuôi xe biến dạng" },
      { src: "/assets/kia-hood.webp", caption: "Nắp ca-pô móp, gỉ" },
    ],
  },
  {
    id: "phong-son",
    label: "Trong phòng sơn",
    note: "Các bước che chắn, phun lót, lên màu trong phòng sơn của xưởng.",
    shots: [
      { src: "/assets/paint-masking.webp", caption: "Che chắn kỹ trước khi phun" },
      { src: "/assets/paint-silver.webp", caption: "Lên màu bạc trong phòng sơn" },
      { src: "/assets/paint-dark.webp", caption: "Màu xám bóng sau khi phun" },
      { src: "/assets/paint-red-door.webp", caption: "Cửa xe lên màu đỏ" },
      { src: "/assets/paint-red-bumper.webp", caption: "Cản xe sơn bóng" },
      { src: "/assets/paint-booth-red.webp", caption: "Bộ cửa sau khi sơn" },
    ],
  },
];

const faqs = [
  {
    q: "Không có bảng giá thì sao biết giá?",
    a: "Mỗi xe hư mỗi kiểu nên khó ra bảng giá cố định. Anh chị chụp ảnh chỗ hư (toàn xe và cận) gửi qua Messenger hoặc Zalo, thợ xem rồi báo giá cụ thể.",
  },
  {
    q: "Sửa mất bao lâu?",
    a: "Tùy mức độ hư và diện tích cần sơn. Xưởng sẽ báo thời gian dự kiến cùng lúc báo giá để anh chị sắp xếp.",
  },
  {
    q: "Có nhận sơn xe máy không?",
    a: "Có. Xưởng nhận sơn cả ô tô và xe máy, ngoài ra còn đánh bóng, độ và tẩy lazang, độ vô lăng, sơn nội thất.",
  },
  {
    q: "Ưu đãi tặng đánh bóng áp dụng thế nào?",
    a: "Khi sơn xe tại xưởng, anh chị được tặng đánh bóng toàn xe và tẩy lazang. Nhắn tin để hỏi chi tiết cho xe của mình.",
  },
  {
    q: "Xưởng ở đâu, đi từ Đồng Hới có xa không?",
    a: `Xưởng ở ${site.address.full}. Bấm "Chỉ đường" để Google Maps dẫn đường từ chỗ anh chị đang đứng.`,
  },
];

/* ------------------------------------------------------------------ page */

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <QuickContact />
        <Services />
        <Process />
        <Media />
        <HowToOrder />
        <Offer />
        <WhyUs />
        {site.reviews.length > 0 ? <Reviews /> : null}
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <StickyContactBar />
      <FloatingContact />
    </>
  );
}

/* ------------------------------------------------------------- sections */

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/90 text-white backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5" aria-label={site.name}>
          <Image src="/assets/logo.png" alt="" width={40} height={42} className="h-10 w-auto rounded-md" priority />
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold tracking-[0.2em] text-white/60">GARAGE</span>
            <span className="block text-[17px] font-extrabold text-brand">LONG LĨNH</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <CallLink
          track="call-header"
          className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-brand px-3.5 text-sm font-bold text-ink"
        >
          <PhoneIcon className="size-4" />
          <span>{site.phones[0].display}</span>
        </CallLink>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      {/* glow + texture */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-[520px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 size-[420px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="container-x relative grid items-center gap-10 pt-8 pb-24 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:pb-32">
        <div>
          <span className="badge border border-brand/30 bg-brand/10 text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            {site.tagline} · Ô tô – Xe máy
          </span>
          <h1 className="mt-4 text-[34px] leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]">
            Xe nát cỡ này <br />
            <span className="text-brand">vẫn cứu được!</span>
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/75 sm:text-lg">
            Gò nắn, xử lý gỉ, sơn lại trong phòng sơn kín, trả xe <strong className="text-white">bóng đẹp như mới</strong>.
            Gửi ảnh xe qua Messenger để biết giá trước khi mang tới.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <MessengerLink track="messenger-hero" className="btn-brand h-14 text-base">
              <MessengerIcon className="size-5" />
              Gửi ảnh xe – Báo giá liền
            </MessengerLink>
            <CallLink track="call-hero" className="btn-ghost-light h-14 text-base">
              <PhoneIcon className="size-5" />
              Gọi {site.phones[0].display}
            </CallLink>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {["Báo giá qua ảnh, khỏi chạy ra xưởng", "Có phòng sơn kín riêng", "Tặng đánh bóng + tẩy lazang khi sơn", "Nhận cả xe tai nạn nặng"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-ink">
                    <CheckIcon className="size-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/assets/garage-front.webp"
              alt="Mặt tiền Garage Long Lĩnh với phòng sơn"
              width={1448}
              height={1086}
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-[var(--shadow-pop)]">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-[#8a6d00]">
              <MapPinIcon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] text-muted">Xưởng tại</span>
              <span className="block text-sm font-bold">{site.address.full}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="stripes h-2 w-full opacity-90" />
    </section>
  );
}

function QuickContact() {
  const items = [
    {
      href: site.messenger,
      external: true,
      track: "messenger-quick",
      icon: <MessengerIcon className="size-6" />,
      color: "bg-messenger/10 text-messenger",
      title: "Messenger",
      sub: "Gửi ảnh xe báo giá",
    },
    {
      href: telHref(site.phones[0].tel),
      external: false,
      track: "call-quick",
      icon: <PhoneIcon className="size-6" />,
      color: "bg-call/10 text-call",
      title: "Gọi ngay",
      sub: site.phones[0].display,
    },
    ...(site.zalo
      ? [
        {
          href: site.zalo,
          external: true,
          track: "zalo-quick",
          icon: <ZaloIcon className="size-7" />,
          color: "bg-zalo/10 text-zalo",
          title: "Zalo",
          sub: "Nhắn Zalo cho xưởng",
        },
      ]
      : []),
    {
      href: directionsHref,
      external: true,
      track: "directions-quick",
      icon: <MapPinIcon className="size-6" />,
      color: "bg-brand-50 text-[#8a6d00]",
      title: "Chỉ đường",
      sub: "Mở Google Maps",
    },
  ];
  return (
    <section aria-label="Liên hệ nhanh" className="container-x relative z-10 -mt-10 sm:-mt-12">
      <div className="card grid grid-cols-2 gap-px overflow-hidden bg-line p-0 lg:grid-cols-4">
        {items.map((it) => (
          <a
            key={it.title}
            href={it.href}
            {...(it.external ? ext : {})}
            data-track={it.track}
            className="group flex flex-col items-start gap-2.5 bg-white p-4 transition hover:bg-surface sm:flex-row sm:items-center sm:gap-3 sm:p-5"
          >
            <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${it.color}`}>{it.icon}</span>
            <span className="min-w-0 leading-tight">
              <span className="block font-bold">{it.title}</span>
              <span className="block truncate text-[13px] text-muted">{it.sub}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, desc, center = false }: { eyebrow: string; title: React.ReactNode; desc?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2 mt-3">{title}</h2>
      {desc ? <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-base">{desc}</p> : null}
    </div>
  );
}

function Services() {
  return (
    <section id="dich-vu" className="section">
      <div className="container-x">
        <SectionHead
          eyebrow="Dịch vụ chính"
          title={
            <>
              Móp méo, tai nạn – <span className="bg-brand px-1.5">giao Long Lĩnh</span>
            </>
          }
          desc="Hai việc xưởng làm nhiều nhất: gò sơn và phục hồi xe tai nạn. Làm kỹ từ khung vỏ đến lớp sơn cuối."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featured.map((f) => (
            <article key={f.title} className="card flex flex-col overflow-hidden sm:flex-row md:flex-col xl:flex-row">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 md:aspect-[16/10] md:w-full xl:aspect-auto xl:w-2/5">
                <Image src={f.img} alt={f.alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-extrabold">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.desc}</p>
                <ul className="mt-4 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[15px]">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-call" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
                <MessengerLink
                  track={`messenger-service-${f.title}`}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-[15px] font-bold text-ink underline decoration-brand decoration-4 underline-offset-4"
                >
                  Gửi ảnh hỏi giá <ArrowRightIcon className="size-4" />
                </MessengerLink>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold">Dịch vụ khác</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {otherServices.map(({ icon: Icon, label }) => (
            <div key={label} className="card flex items-center gap-3 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-ink">
                <Icon className="size-5" />
              </span>
              <span className="text-[14px] leading-snug font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="quy-trinh" className="section bg-night text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="badge bg-brand/15 text-brand">Quy trình xử lý</span>
          <h2 className="h2 mt-3">4 bước để xe về lại như mới</h2>
          <p className="mt-3 text-white/70">Làm đủ từng bước, không bỏ công đoạn, để lớp sơn bám chắc và bền màu.</p>
        </div>
        <ol className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl bg-night-2 ring-1 ring-white/10 sm:w-auto">
              <div className="relative aspect-[4/5]">
                <Image src={s.img} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 72vw" className="object-cover" />
                <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-full bg-brand text-base font-extrabold text-ink">
                  {i + 1}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-center text-xs text-white/45 sm:hidden">Vuốt ngang để xem tiếp →</p>
      </div>
    </section>
  );
}

function Media() {
  return (
    <section id="hinh-anh" className="section">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl bg-night shadow-[var(--shadow-pop)]">
            <video
              className="aspect-[9/16] w-full"
              src="/assets/ads.mp4"
              poster="/assets/ads-poster.webp"
              controls
              playsInline
              preload="none"
            />
          </div>
          <div>
            <SectionHead
              eyebrow="Video thực tế"
              title="Xem xưởng làm một chiếc xe tai nạn"
              desc="Từ chiếc xe móp méo, gỉ sét đến lúc lên màu trong phòng sơn. Anh chị bấm play để xem, có tiếng thuyết minh."
            />
            <div className="mt-6 rounded-2xl border border-[#f3d36b] bg-brand-50 p-4 text-[15px] text-[#5c4a00]">
              <strong>Mẹo gửi ảnh để báo giá nhanh:</strong> chụp 1 ảnh toàn xe, 2–3 ảnh cận chỗ móp hoặc trầy, chụp ban ngày đủ sáng.
            </div>
            <MessengerLink track="messenger-media" className="btn-dark mt-5">
              <MessengerIcon className="size-5" /> Gửi ảnh xe của anh chị
            </MessengerLink>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-extrabold sm:text-2xl">Hình ảnh tại xưởng</h3>
          <div className="mt-4">
            <Gallery albums={albums} />
          </div>
          <a
            href={site.fanpage}
            {...ext}
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-messenger"
          >
            <FacebookIcon className="size-5" /> Xem thêm xe đã làm trên fanpage <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHead center eyebrow="Đặt lịch dễ" title="Chỉ 3 bước, không cần ra xưởng hỏi giá" />
        <ol className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {orderSteps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative flex gap-4 rounded-2xl border border-line bg-surface p-5 md:flex-col md:p-6">
              <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brand">
                <Icon className="size-6" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand text-xs font-extrabold text-ink">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="text-[17px] font-bold">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <MessengerLink track="messenger-order" className="btn-brand w-full sm:w-auto">
            <MessengerIcon className="size-5" /> Bắt đầu: gửi ảnh xe
          </MessengerLink>
          <CallLink track="call-order" className="btn-outline w-full sm:w-auto">
            <PhoneIcon className="size-5" /> Hoặc gọi {site.phones[0].display}
          </CallLink>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="uu-dai" className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-6 text-ink sm:p-10">
          <div className="stripes absolute inset-y-0 right-0 hidden w-24 opacity-90 sm:block" />
          <div className="relative max-w-2xl">
            <span className="badge bg-ink text-brand">
              <GiftIcon className="size-4" /> Ưu đãi khi sơn xe
            </span>
            <h2 className="mt-4 text-[28px] leading-tight font-extrabold sm:text-4xl">
              Tặng đánh bóng toàn xe <br className="hidden sm:block" />+ tẩy lazang
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/75 sm:text-base">
              Sơn xe tại Long Lĩnh được tặng kèm đánh bóng toàn xe và tẩy lazang, nhận xe về sáng bóng từ thân tới mâm.
            </p>
            <MessengerLink track="messenger-offer" className="btn-dark mt-6 w-full sm:w-auto">
              <MessengerIcon className="size-5" /> Nhắn tin nhận ưu đãi
            </MessengerLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="pb-14 sm:pb-20">
      <div className="container-x">
        <SectionHead eyebrow="Vì sao chọn Long Lĩnh" title="Làm kỹ, báo giá rõ, xưởng có phòng sơn" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-ink text-brand">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHead eyebrow="Khách nói gì" title="Khách đã sửa xe tại Long Lĩnh" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {site.reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-line bg-surface p-5">
              <blockquote className="text-[15px] leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <strong>{r.name}</strong> <span className="text-muted">· {r.car}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead
          eyebrow="Hỏi đáp"
          title="Anh chị thường hỏi"
          desc="Chưa thấy câu mình cần? Nhắn Messenger hoặc gọi, xưởng trả lời liền."
        />
        <div className="divide-y divide-line rounded-2xl border border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="group px-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronIcon className="size-5 shrink-0 text-muted transition group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="lien-he" className="section">
      <div className="container-x">
        <SectionHead eyebrow="Liên hệ" title="Ghé xưởng Long Lĩnh" />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <div className="card p-5 sm:p-6">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-[#8a6d00]">
                  <MapPinIcon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Địa chỉ</p>
                  <p className="font-semibold">{site.address.line1}</p>
                  <p className="font-semibold">{site.address.line2}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-call/10 text-call">
                  <PhoneIcon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Hotline</p>
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={telHref(p.tel)}
                      data-track={`call-contact-${p.tel}`}
                      className="block text-lg font-bold hover:underline"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-ink">
                  <ClockIcon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Giờ làm việc</p>
                  <p className="font-semibold">{site.hours}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-messenger/10 text-messenger">
                  <FacebookIcon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Fanpage</p>
                  <a href={site.fanpage} {...ext} className="font-semibold hover:underline">
                    Sơn xe Quảng Bình
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href={directionsHref} {...ext} data-track="directions-contact" className="btn-dark">
                <MapPinIcon className="size-5" /> Chỉ đường
              </a>
              <MessengerLink track="messenger-contact" className="btn bg-messenger text-white">
                <MessengerIcon className="size-5" /> Nhắn tin
              </MessengerLink>
            </div>
          </div>
          <div className="card min-h-[320px] overflow-hidden p-0">
            <iframe
              title={`Bản đồ ${site.name}`}
              src={mapEmbedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-night text-white">
      <div className="stripes h-2 w-full" />
      <div className="container-x py-14 text-center sm:py-20">
        <h2 className="h2">
          Xe đang móp, trầy, hay vừa bị tai nạn?
          <span className="mt-1 block text-brand">Gửi ảnh, Long Lĩnh báo giá liền!</span>
        </h2>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
          <MessengerLink track="messenger-final" className="btn-brand h-14 text-base">
            <MessengerIcon className="size-5" /> Nhắn tin gửi ảnh xe
          </MessengerLink>
          <div className="grid grid-cols-2 gap-3">
            {site.phones.map((p) => (
              <CallLink key={p.tel} phone={p.tel} track={`call-final-${p.tel}`} className="btn-ghost-light text-sm">
                <PhoneIcon className="size-4" /> {p.display}
              </CallLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pb-28 text-white/60 md:pb-8">
      <div className="container-x flex flex-col gap-4 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="" width={32} height={34} className="h-8 w-auto rounded" />
          <div>
            <p className="font-semibold text-white">{site.name}</p>
            <p>{site.address.full}</p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} {site.name}. Gò sơn · Phục hồi xe tai nạn.</p>
      </div>
    </footer>
  );
}
