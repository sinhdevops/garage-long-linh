import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import { ContactTracker } from "@/components/ContactTracker";
import { site } from "@/lib/site";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL to the real domain when deploying (used for the share image).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
// Set NEXT_PUBLIC_META_PIXEL_ID to turn on Meta Pixel (measures Messenger/call clicks from ads).
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} – Gò sơn, phục hồi xe tai nạn | Quảng Bình`,
  description: `${site.shortDesc} Gửi ảnh xe qua Messenger để được báo giá nhanh. Hotline ${site.phones[0].display}.`,
  openGraph: {
    title: `${site.name} – Xe nát cỡ này cũng cứu được!`,
    description: "Gò hàn, sơn ô tô – xe máy, phục hồi xe tai nạn. Gửi ảnh xe, báo giá liền.",
    images: [{ url: "/assets/garage-front.webp", width: 1448, height: 1086 }],
    locale: "vi_VN",
    type: "website",
  },
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#0d0e12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        {children}
        <ContactTracker />
        {pixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
