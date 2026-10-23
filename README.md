# LonMusics Web 0.2.1 · GitHub Pages

**LonSuite · Music, your way.** Trình phát web tĩnh với Noto Sans, nền theo macOS Light/Dark và vàng champagne làm điểm nhấn. Giao diện lấy cảm hứng từ Spotify / YouTube Music, không sao chép thương hiệu của các dịch vụ này.

## Cách triển khai tại `https://lonmusics.github.io`

1. Đăng nhập GitHub, mở repository **`lonmusics/lonmusics.github.io`**.
2. Nhấn **Add file → Upload files**. Nếu repository còn trống, chọn **uploading an existing file**.
3. **Giải nén ZIP** này trước. Tải **toàn bộ các tệp và thư mục bên trong** lên root của repository, đặc biệt `index.html`, `styles.css`, `main.js`, `assets/`, `manifest.webmanifest`, `.nojekyll` (file ẩn có thể không cần thiết).
4. Nhấn **Commit changes**.
5. Mở **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)` → Save**.
6. Sau khi GitHub báo deploy thành công, truy cập **https://lonmusics.github.io**.

**Không** upload nguyên file ZIP vào GitHub Pages. `index.html` phải ở root, không nằm trong một thư mục bọc.

## Tính năng

- Trang chủ **Nhạc của tôi** dựa trên yêu thích, bài nghe gần đây, số lượt nghe đã lưu **trong trình duyệt hiện tại**. Gu nghe được gợi ý bằng quy tắc nghệ sĩ/thể loại/lịch sử, không phải AI cá nhân hóa kiểu Spotify.
- Tìm kiếm Audius và nhạc đã nhập, xem thịnh hành, tạo playlist, yêu thích, phát tiếp bài, hàng chờ **LonRadio** gợi ý tự động khi hết danh sách. Bài em thêm vào hàng chờ được phát ưu tiên.
- Tìm kiếm YouTube ngay trong LonMusics **khi có YouTube Data API Key**. Nếu chưa có key, dán trực tiếp link video/playlist YouTube để phát ngay (nếu video cho phép nhúng).
- YouTube được phát bằng **iframe player chính thức và luôn hiển thị video**, không tự tách tiếng, loại bỏ quảng cáo hay phát nền khi đóng trình phát.
- Nhấn tên bài/ảnh album trên thanh phát để mở **Now Playing** lớn, có tab lời bài hát (nếu tìm thấy trong LRCLIB) và hàng chờ. Có lời đồng bộ theo thời gian trên Audius/nhạc cá nhân khi LRCLIB cung cấp.
- Nhập nhạc cá nhân MP3, FLAC, WAV, ALAC/M4A, OGG... **nếu trình duyệt hỗ trợ**. File được giữ trong IndexedDB khi có quyền/dung lượng, không tải lên máy chủ.
- Điều khiển phát/tạm dừng, kế/trước, tua, âm lượng, trộn, lặp và media keys đối với Audius/nhạc cục bộ.
- Trình phát nguồn YouTube có nút phát/tua/âm lượng **ngay trong video**, và phải ở trạng thái hiển thị trong suốt thời gian xem/nghe.
- Chọn giao diện **Hệ thống / Sáng / Tối trực tiếp trên thanh trên cùng** (3 nút trên desktop, menu gọn trên màn nhỏ), không cần vào Cài đặt. Theo Hệ thống mặc định, tự theo dõi Light/Dark của macOS. Chạy desktop/mobile, không dùng thư viện frontend hay backend trả phí.

## Để tìm kiếm YouTube trong website

1. Vào [Google Cloud Console](https://console.cloud.google.com/apis/library/youtube.googleapis.com).
2. Tạo project miễn phí, bật **YouTube Data API v3**.
3. Tạo **API Key** (không phải OAuth client secret). Trong **Key restrictions**, dùng **Websites (HTTP referrers)** và cho phép `https://lonmusics.github.io/*`. Trong **API restrictions**, chỉ cho phép YouTube Data API v3.
4. Vào LonMusics → **Cài đặt → YouTube Data API Key** → dán key → Lưu.
5. Dùng thanh tìm kiếm để tìm trên Audius và YouTube. API Key lưu trong `localStorage` của thiết bị, **không** đưa vào code GitHub.

Mặc định YouTube Data API có giới hạn (quota). Nếu hết hạn mức hoặc key sai, trang thông báo lỗi YouTube; Audius, link YouTube và nhạc riêng vẫn hoạt động độc lập.

> Lưu ý bảo mật: API Key kiểu web có thể nhìn thấy trong network/devtools, vì vậy **phải giới hạn referrer và API**. Không nhập API Secret, mật khẩu, token OAuth hoặc thẻ thanh toán. Nếu Google yêu cầu bật thanh toán hay nâng cấp gói, em có thể **không bật** và tiếp tục dùng tính năng dán link.

## Hạn chế & quyền nội dung

- Đây là web tĩnh công khai. Không có cơ sở dữ liệu tài khoản hoặc đồng bộ đa thiết bị; dữ liệu lưu theo từng **origin**. Nếu chuyển từ Cloudflare sang GitHub Pages, playlist, lượt nghe và tệp nhạc đã nhập trên Cloudflare **không tự chuyển**. Tệp nhạc phải được thêm lại trên website mới.
- Audius có API phát nhạc công khai nhưng có thể lỗi/rate limit hoặc có bài không thể stream theo điều kiện của nguồn.
- Tìm kiếm YouTube yêu cầu key và quota của Google. Một số video có thể không cho nhúng, giới hạn vùng hoặc có quảng cáo. Không thể bảo đảm mọi bài hát thương mại đều nghe được.
- Lời từ LRCLIB có thể thiếu hoặc sai metadata. Nếu chia sẻ website công khai, cần kiểm tra quyền hiển thị lời bài hát và tuân thủ điều kiện của nguồn.
- Audio từ YouTube **không** được trộn với các file âm thanh khác dưới dạng một stream ẩn; LonRadio không tự phát YouTube nền khi khung video không hiển thị.
- Phát FLAC/ALAC từ file riêng không bảo đảm bit-perfect qua trình duyệt/Bluetooth; khả năng giải mã phụ thuộc thiết bị, codec và hệ điều hành.
- Google Fonts và dịch vụ YouTube/Audius/LRCLIB có thể nhận các request mạng khi người dùng dùng các chức năng tương ứng.

## Kiểm tra cục bộ

Dùng một static server bất kỳ trong thư mục chứa `index.html`, ví dụ:

```sh
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`. Không cần Node hoặc `npm install`.

Copyright: tài sản nhận diện LonSuite thuộc dự án LonMusics. Các bản ghi, video, bìa nhạc và lời bài hát thuộc chủ sở hữu tương ứng. Không cấp quyền phân phối lại nội dung bên thứ ba.
