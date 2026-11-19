# Landing page – Garage Long Lĩnh

Next.js 16 (App Router, Tailwind v4), xuất ra **trang tĩnh** để up lên hosting nào cũng được.

## Chạy thử

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build và đưa lên mạng

```bash
npm run build      # tạo thư mục out/
```

- **Vercel / Netlify / Cloudflare Pages:** kết nối thư mục này, lệnh build `npm run build`, thư mục xuất `out`.
- **Hosting cPanel:** up toàn bộ nội dung trong `out/` vào `public_html`.

Biến môi trường (không bắt buộc):

| Biến | Dùng để |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Bật Meta Pixel; mỗi lần bấm Messenger/Gọi/Zalo/Chỉ đường sẽ gửi sự kiện `Contact` |
| `NEXT_PUBLIC_SITE_URL` | Tên miền thật (ví dụ `https://longlinh.vn`), để ảnh chia sẻ Facebook hiện đúng |

## Sửa thông tin

Toàn bộ số điện thoại, địa chỉ, link Messenger/Zalo, giờ làm việc, đánh giá khách nằm trong **`lib/site.ts`**.
Danh sách đánh giá (`reviews`) đang để trống nên mục "Khách nói gì" chưa hiện. Chỉ thêm đánh giá thật, có sự đồng ý của khách.

## Còn cần chốt với chủ garage

- [ ] Địa chỉ: bảng hiệu ghi **21 Hùng Vương, Quảng Ninh**, video ads ghi "20 Hùng Vương, TT Quán Hàu", fanpage ghi "19 Hùng Vương, Đồng Hới".
- [ ] Số nào dùng Zalo (đang để 0388 010 979). Nếu không dùng Zalo thì đặt `zalo: null`.
- [ ] Giờ mở cửa thật.
- [ ] Ảnh xe Kia xám sau khi làm xong, để thêm ảnh trước/sau.
- [ ] Ưu đãi "Sơn 2 mạng" nghĩa là gì (chưa đưa lên trang).

## Ảnh và video (`public/assets/`)

- `garage-front.webp`, `logo.png`: lấy từ ảnh bảng hiệu chủ garage gửi.
- `kia-*.webp`: khung hình trích từ video xe Kia tai nạn tại xưởng.
- `paint-*.webp`: khung hình trong phòng sơn (các clip đã đăng trên fanpage garage).
- `ads.mp4`: bản nén của `output/LongLinh_ads_v2.mp4`.
- Không dùng clip xưởng MG (raw file 3, 5 theo thứ tự `ls`).
