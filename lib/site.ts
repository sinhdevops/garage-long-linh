// ---------------------------------------------------------------------------
// ALL garage info lives here. To change a phone number, address or link, edit
// this file only. Fields marked TODO still need confirming with the owner.
// ---------------------------------------------------------------------------

export const site = {
  name: "Garage Long Lĩnh",
  tagline: "Gò sơn · Phục hồi xe tai nạn",
  shortDesc: "Chuyên gò hàn, sơn ô tô – xe máy, phục hồi xe tai nạn tại Quảng Ninh, Quảng Bình.",

  // Hotlines (from the storefront sign)
  phones: [
    { display: "038 801 0979", tel: "0388010979" },
    { display: "091 116 1679", tel: "0911161679" },
  ],

  // Messenger: fanpage "Sơn xe Quảng Bình"
  messenger: "https://m.me/sonxequangbinh",
  fanpage: "https://www.facebook.com/sonxequangbinh/",

  // TODO: confirm which number the garage uses for Zalo. Set to null to hide the Zalo button.
  zalo: "https://zalo.me/0388010979" as string | null,

  // Address as written on the storefront sign (21 Hùng Vương).
  // TODO: the ads video says "20 Hùng Vương, TT Quán Hàu" and the fanpage says "19 Hùng Vương, Đồng Hới". Confirm.
  address: {
    line1: "21 Hùng Vương",
    line2: "Quảng Ninh, Quảng Bình",
    full: "21 Hùng Vương, Quảng Ninh, Quảng Bình",
  },
  geo: { lat: 17.4138123, lng: 106.6438702 },
  mapsPlace:
    "https://www.google.com/maps/place/Garage+Long+L%C4%A9nh/@17.4138123,106.6438702,17z",

  // TODO: confirm real opening hours. Until then, ask customers to call ahead.
  hours: "Gọi trước để được hẹn giờ, khỏi chờ",

  // Real customer reviews only (with their consent). The section stays hidden while this is empty.
  reviews: [] as { name: string; car: string; text: string }[],
} as const;

export const telHref = (tel: string) => `tel:${tel}`;
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&output=embed`;
