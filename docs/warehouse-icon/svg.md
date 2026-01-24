# 🎨 Bộ Icon Kế Toán (Accounting Icons)

Hệ thống icon chuyên nghiệp cho phần mềm kế toán, được thiết kế theo chuẩn Material Design.

## 📦 Tổng quan

Bộ icon gồm **21 icon** SVG vector chất lượng cao, phù hợp cho các popup, notification, và modal trong phần mềm kế toán.

## 🎯 Danh sách Icon

### 1. ✅ Thành Công (success.svg)
**Mô tả:** Thông báo giao dịch thành công, lưu dữ liệu hoàn tất  
**Màu chủ đạo:** Xanh lá (#4CAF50)  
**Sử dụng:** Popup xác nhận lưu thành công, giao dịch hoàn tất

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#4CAF50" opacity="0.2"/>
  <circle cx="100" cy="100" r="70" fill="#4CAF50" stroke="#2E7D32" stroke-width="3"/>
  <path d="M65 100L85 120L135 70" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="100" cy="100" r="85" stroke="#4CAF50" stroke-width="2" opacity="0.3"/>
</svg>
```

---

### 2. ❌ Lỗi (error.svg)
**Mô tả:** Thông báo lỗi, giao dịch thất bại, dữ liệu không hợp lệ  
**Màu chủ đạo:** Đỏ (#F44336)  
**Sử dụng:** Popup báo lỗi, validation không hợp lệ

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#F44336" opacity="0.2"/>
  <circle cx="100" cy="100" r="70" fill="#F44336" stroke="#C62828" stroke-width="3"/>
  <path d="M70 70L130 130M130 70L70 130" stroke="white" stroke-width="10" stroke-linecap="round"/>
  <circle cx="100" cy="100" r="85" stroke="#F44336" stroke-width="2" opacity="0.3"/>
</svg>
```

---

### 3. ⚠️ Cảnh Báo (warning.svg)
**Mô tả:** Cảnh báo dữ liệu, kiểm tra trước khi xác nhận  
**Màu chủ đạo:** Cam (#FF9800)  
**Sử dụng:** Cảnh báo trước khi xóa, cảnh báo số dư âm

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 20L180 170H20L100 20Z" fill="#FF9800" opacity="0.2"/>
  <path d="M100 30L170 165H30L100 30Z" fill="#FF9800" stroke="#F57C00" stroke-width="3"/>
  <path d="M100 80V120" stroke="white" stroke-width="8" stroke-linecap="round"/>
  <circle cx="100" cy="140" r="5" fill="white"/>
</svg>
```

---

### 4. ℹ️ Thông Tin (info.svg)
**Mô tả:** Thông tin hướng dẫn, gợi ý cho người dùng  
**Màu chủ đạo:** Xanh dương (#2196F3)  
**Sử dụng:** Tooltip hướng dẫn, thông tin hỗ trợ

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#2196F3" opacity="0.2"/>
  <circle cx="100" cy="100" r="70" fill="#2196F3" stroke="#1565C0" stroke-width="3"/>
  <circle cx="100" cy="70" r="6" fill="white"/>
  <path d="M100 90V140" stroke="white" stroke-width="8" stroke-linecap="round"/>
  <circle cx="100" cy="100" r="85" stroke="#2196F3" stroke-width="2" opacity="0.3"/>
</svg>
```

---

### 5. ❓ Xác Nhận (question.svg)
**Mô tả:** Hỏi xác nhận hành động, yêu cầu đồng ý  
**Màu chủ đạo:** Tím (#9C27B0)  
**Sử dụng:** Dialog xác nhận xóa, xác nhận hành động quan trọng

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#9C27B0" opacity="0.2"/>
  <circle cx="100" cy="100" r="70" fill="#9C27B0" stroke="#6A1B9A" stroke-width="3"/>
  <path d="M75 85C75 85 80 65 100 65C120 65 125 75 125 85C125 95 115 100 100 105V115" stroke="white" stroke-width="7" stroke-linecap="round"/>
  <circle cx="100" cy="135" r="5" fill="white"/>
</svg>
```

---

### 6. 📄 Hóa Đơn (invoice.svg)
**Mô tả:** Quản lý hóa đơn, chứng từ kế toán  
**Màu chủ đạo:** Xanh nhạt (#1976D2)  
**Sử dụng:** Module hóa đơn, quản lý chứng từ

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="30" width="100" height="140" rx="5" fill="#E3F2FD" stroke="#1976D2" stroke-width="3"/>
  <rect x="65" y="50" width="70" height="8" rx="2" fill="#1976D2"/>
  <rect x="65" y="70" width="50" height="6" rx="2" fill="#90CAF9"/>
  <rect x="65" y="85" width="60" height="6" rx="2" fill="#90CAF9"/>
  <rect x="65" y="100" width="45" height="6" rx="2" fill="#90CAF9"/>
  <path d="M50 125H150" stroke="#1976D2" stroke-width="2" stroke-dasharray="5,5"/>
  <rect x="65" y="135" width="40" height="8" rx="2" fill="#4CAF50"/>
  <text x="110" y="143" font-size="12" fill="#4CAF50" font-weight="bold">TỔNG</text>
</svg>
```

---

### 7. 💵 Tiền Mặt (money.svg)
**Mô tả:** Giao dịch tiền mặt, thu chi  
**Màu chủ đạo:** Xanh lá đậm (#4CAF50)  
**Sử dụng:** Phiếu thu, phiếu chi tiền mặt

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="70" width="140" height="80" rx="8" fill="#4CAF50" stroke="#2E7D32" stroke-width="3"/>
  <circle cx="100" cy="110" r="25" fill="#FFF59D" stroke="#F9A825" stroke-width="2"/>
  <text x="100" y="120" font-size="35" fill="#2E7D32" font-weight="bold" text-anchor="middle">$</text>
  <circle cx="50" cy="85" r="8" fill="#81C784"/>
  <circle cx="150" cy="135" r="8" fill="#81C784"/>
  <rect x="35" y="60" width="130" height="10" rx="3" fill="#66BB6A" opacity="0.5"/>
</svg>
```

---

### 8. 🏦 Ngân Hàng (bank.svg)
**Mô tả:** Giao dịch ngân hàng, chuyển khoản  
**Màu chủ đạo:** Xanh navy (#1976D2)  
**Sử dụng:** Module ngân hàng, chuyển khoản

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 40L40 80H160L100 40Z" fill="#1976D2" stroke="#0D47A1" stroke-width="2"/>
  <rect x="60" y="85" width="15" height="60" fill="#1976D2"/>
  <rect x="92.5" y="85" width="15" height="60" fill="#1976D2"/>
  <rect x="125" y="85" width="15" height="60" fill="#1976D2"/>
  <rect x="35" y="150" width="130" height="15" fill="#1976D2" stroke="#0D47A1" stroke-width="2"/>
  <rect x="35" y="165" width="130" height="8" fill="#0D47A1"/>
</svg>
```

---

### 9. 📊 Báo Cáo (report.svg)
**Mô tả:** Báo cáo tài chính, thống kê  
**Màu chủ đạo:** Cam nhạt (#FF9800)  
**Sử dụng:** Module báo cáo, dashboard thống kê

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="40" width="120" height="130" rx="5" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>
  <rect x="60" y="60" width="80" height="6" rx="2" fill="#FF9800"/>
  <rect x="60" y="75" width="60" height="4" rx="2" fill="#FFB74D"/>
  <rect x="60" y="100" width="20" height="40" rx="2" fill="#4CAF50"/>
  <rect x="90" y="80" width="20" height="60" rx="2" fill="#2196F3"/>
  <rect x="120" y="90" width="20" height="50" rx="2" fill="#FF9800"/>
</svg>
```

---

### 10. 🧮 Máy Tính (calculator.svg)
**Mô tả:** Tính toán, kiểm tra số liệu  
**Màu chủ đạo:** Xám đen (#37474F)  
**Sử dụng:** Công cụ tính toán, kiểm tra số liệu

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="30" width="100" height="140" rx="10" fill="#37474F" stroke="#263238" stroke-width="3"/>
  <rect x="60" y="45" width="80" height="25" rx="3" fill="#B2DFDB"/>
  <circle cx="75" cy="90" r="8" fill="#546E7A"/>
  <circle cx="100" cy="90" r="8" fill="#546E7A"/>
  <circle cx="125" cy="90" r="8" fill="#546E7A"/>
  <circle cx="75" cy="110" r="8" fill="#546E7A"/>
  <circle cx="100" cy="110" r="8" fill="#546E7A"/>
  <circle cx="125" cy="110" r="8" fill="#546E7A"/>
  <circle cx="75" cy="130" r="8" fill="#546E7A"/>
  <circle cx="100" cy="130" r="8" fill="#546E7A"/>
  <rect x="115" y="122" width="20" height="16" rx="3" fill="#4CAF50"/>
</svg>
```

---

### 11. 📅 Lịch (calendar.svg)
**Mô tả:** Kỳ kế toán, thời hạn nộp thuế  
**Màu chủ đạo:** Đỏ (#F44336)  
**Sử dụng:** Quản lý kỳ kế toán, deadline

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="50" width="120" height="110" rx="8" fill="#FFEBEE" stroke="#C62828" stroke-width="3"/>
  <rect x="40" y="50" width="120" height="30" rx="8" fill="#F44336"/>
  <rect x="70" y="35" width="8" height="25" rx="4" fill="#B71C1C"/>
  <rect x="122" y="35" width="8" height="25" rx="4" fill="#B71C1C"/>
  <circle cx="65" cy="100" r="5" fill="#E57373"/>
  <circle cx="85" cy="100" r="5" fill="#E57373"/>
  <circle cx="105" cy="100" r="5" fill="#E57373"/>
  <circle cx="125" cy="100" r="5" fill="#E57373"/>
  <circle cx="65" cy="120" r="5" fill="#E57373"/>
  <circle cx="85" cy="120" r="5" fill="#E57373"/>
  <circle cx="105" cy="120" r="5" fill="#F44336"/>
  <circle cx="125" cy="120" r="5" fill="#E57373"/>
  <circle cx="65" cy="140" r="5" fill="#E57373"/>
  <circle cx="85" cy="140" r="5" fill="#E57373"/>
</svg>
```

---

### 12. 📋 Thuế (tax.svg)
**Mô tả:** Khai báo thuế, quản lý thuế  
**Màu chủ đạo:** Xanh lá (#4CAF50)  
**Sử dụng:** Module thuế, khai báo thuế

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="40" width="100" height="120" rx="5" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/>
  <path d="M100 60L120 80L110 90L100 80L90 90L80 80L100 60Z" fill="#4CAF50"/>
  <rect x="70" y="105" width="60" height="8" rx="2" fill="#66BB6A"/>
  <rect x="70" y="120" width="60" height="8" rx="2" fill="#66BB6A"/>
  <rect x="70" y="135" width="40" height="8" rx="2" fill="#4CAF50"/>
  <text x="100" y="100" font-size="14" fill="#2E7D32" font-weight="bold" text-anchor="middle">TAX</text>
</svg>
```

---

### 13. 💾 Lưu Dữ Liệu (save.svg)
**Mô tả:** Lưu thông tin, cập nhật dữ liệu  
**Màu chủ đạo:** Xanh dương nhạt (#03A9F4)  
**Sử dụng:** Nút lưu, cập nhật thông tin

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="45" width="100" height="110" rx="5" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  <rect x="50" y="45" width="100" height="30" fill="#03A9F4"/>
  <rect x="70" y="55" width="15" height="15" rx="2" fill="#B3E5FC"/>
  <rect x="65" y="90" width="70" height="8" rx="2" fill="#4FC3F7"/>
  <rect x="65" y="105" width="70" height="8" rx="2" fill="#4FC3F7"/>
  <rect x="65" y="120" width="50" height="8" rx="2" fill="#4FC3F7"/>
  <path d="M140 135L150 145L165 130" stroke="#4CAF50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

### 14. 🗑️ Xóa (delete.svg)
**Mô tả:** Xóa dữ liệu, hủy giao dịch  
**Màu chủ đạo:** Đỏ (#F44336)  
**Sử dụng:** Nút xóa, hủy bỏ chứng từ

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="55" width="60" height="10" rx="2" fill="#F44336"/>
  <path d="M85 55V50C85 47 87 45 90 45H110C113 45 115 47 115 50V55" stroke="#D32F2F" stroke-width="2"/>
  <rect x="65" y="65" width="70" height="90" rx="5" fill="#FFCDD2" stroke="#D32F2F" stroke-width="3"/>
  <rect x="80" y="80" width="6" height="60" rx="2" fill="#F44336"/>
  <rect x="97" y="80" width="6" height="60" rx="2" fill="#F44336"/>
  <rect x="114" y="80" width="6" height="60" rx="2" fill="#F44336"/>
</svg>
```

---

### 15. 🖨️ In Ấn (print.svg)
**Mô tả:** In báo cáo, chứng từ  
**Màu chủ đạo:** Xanh dương (#1976D2)  
**Sử dụng:** In hóa đơn, in báo cáo

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="40" width="80" height="35" rx="3" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>
  <rect x="45" y="75" width="110" height="60" rx="8" fill="#90CAF9" stroke="#0D47A1" stroke-width="3"/>
  <circle cx="140" cy="95" r="5" fill="#1976D2"/>
  <rect x="60" y="110" width="80" height="50" rx="3" fill="white" stroke="#1976D2" stroke-width="2"/>
  <rect x="70" y="120" width="60" height="4" rx="1" fill="#1976D2"/>
  <rect x="70" y="130" width="50" height="4" rx="1" fill="#90CAF9"/>
  <rect x="70" y="140" width="55" height="4" rx="1" fill="#90CAF9"/>
</svg>
```

---

### 16. ⬆️ Tải Lên (upload.svg)
**Mô tả:** Upload file, import dữ liệu  
**Màu chủ đạo:** Xanh lá (#4CAF50)  
**Sử dụng:** Import Excel, upload chứng từ

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="90" width="100" height="70" rx="5" fill="#E8F5E9" stroke="#4CAF50" stroke-width="3"/>
  <path d="M100 50V120" stroke="#4CAF50" stroke-width="6" stroke-linecap="round"/>
  <path d="M80 70L100 50L120 70" stroke="#4CAF50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="60" y="145" width="80" height="5" rx="2" fill="#81C784"/>
</svg>
```

---

### 17. ⬇️ Tải Xuống (download.svg)
**Mô tả:** Download báo cáo, export dữ liệu  
**Màu chủ đạo:** Xanh dương (#2196F3)  
**Sử dụng:** Export Excel, tải báo cáo

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="90" width="100" height="70" rx="5" fill="#E3F2FD" stroke="#2196F3" stroke-width="3"/>
  <path d="M100 50V120" stroke="#2196F3" stroke-width="6" stroke-linecap="round"/>
  <path d="M80 100L100 120L120 100" stroke="#2196F3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="60" y="145" width="80" height="5" rx="2" fill="#64B5F6"/>
</svg>
```

---

### 18. 👤 Người Dùng (user.svg)
**Mô tả:** Quản lý người dùng, phân quyền  
**Màu chủ đạo:** Xanh dương (#1976D2)  
**Sử dụng:** Module user, phân quyền hệ thống

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="75" r="30" fill="#90CAF9" stroke="#1976D2" stroke-width="3"/>
  <path d="M50 160C50 130 70 110 100 110C130 110 150 130 150 160" fill="#64B5F6" stroke="#1976D2" stroke-width="3"/>
  <circle cx="100" cy="75" r="35" stroke="#2196F3" stroke-width="2" opacity="0.3"/>
</svg>
```

---

### 19. 🔒 Khóa (lock.svg)
**Mô tả:** Bảo mật, khóa chứng từ  
**Màu chủ đạo:** Vàng (#FFE082)  
**Sử dụng:** Khóa sổ, khóa chứng từ đã duyệt

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="95" width="80" height="70" rx="8" fill="#FFE082" stroke="#F57F17" stroke-width="3"/>
  <path d="M75 95V75C75 61 86 50 100 50C114 50 125 61 125 75V95" stroke="#F57F17" stroke-width="5" fill="none"/>
  <circle cx="100" cy="130" r="10" fill="#F57F17"/>
  <rect x="95" y="130" width="10" height="20" rx="2" fill="#F57F17"/>
</svg>
```

---

### 20. 🔓 Mở Khóa (unlock.svg)
**Mô tả:** Mở khóa chứng từ, cho phép chỉnh sửa  
**Màu chủ đạo:** Xanh lá (#4CAF50)  
**Sử dụng:** Mở khóa để sửa, mở khóa kỳ kế toán

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="95" width="80" height="70" rx="8" fill="#C8E6C9" stroke="#388E3C" stroke-width="3"/>
  <path d="M75 95V75C75 61 86 50 100 50C114 50 125 61 125 75V85" stroke="#388E3C" stroke-width="5" fill="none"/>
  <circle cx="100" cy="130" r="10" fill="#4CAF50"/>
  <rect x="95" y="130" width="10" height="20" rx="2" fill="#4CAF50"/>
</svg>
```

---

### 21. 🔍 Tìm Kiếm (search.svg)
**Mô tả:** Tra cứu chứng từ, tìm kiếm dữ liệu  
**Màu chủ đạo:** Xanh dương (#2196F3)  
**Sử dụng:** Tìm kiếm hóa đơn, tra cứu giao dịch

```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="85" cy="85" r="40" fill="none" stroke="#2196F3" stroke-width="6"/>
  <path d="M115 115L145 145" stroke="#2196F3" stroke-width="8" stroke-linecap="round"/>
  <circle cx="85" cy="85" r="50" fill="none" stroke="#64B5F6" stroke-width="2" opacity="0.5"/>
</svg>
```

---

## 📋 Hướng dẫn sử dụng

### Cách tích hợp vào dự án

#### 1. HTML trực tiếp
```html
<img src="icons/success.svg" alt="Success" width="48" height="48">
```

#### 2. CSS Background
```css
.success-icon {
  background-image: url('icons/success.svg');
  background-size: contain;
  width: 48px;
  height: 48px;
}
```

#### 3. React Component
```jsx
import SuccessIcon from './icons/success.svg';

function Notification() {
  return <img src={SuccessIcon} alt="Success" />;
}
```

#### 4. Inline SVG
```html
<!-- Copy trực tiếp code SVG vào HTML -->
<div class="notification">
  <svg width="48" height="48" viewBox="0 0 200 200">
    <!-- SVG content -->
  </svg>
  <p>Lưu thành công!</p>
</div>
```

## 🎨 Bảng màu

| Màu | Hex Code | Sử dụng |
|-----|----------|---------|
| Xanh lá | #4CAF50 | Success, Money, Save |
| Đỏ | #F44336 | Error, Delete, Warning Critical |
| Cam | #FF9800 | Warning, Alert |
| Xanh dương | #2196F3 | Info, Download, Search |
| Tím | #9C27B0 | Question, Confirm |
| Vàng | #F57F17 | Lock, Security |

## 📏 Kích thước khuyến nghị

- **Popup lớn:** 120x120px
- **Notification:** 64x64px  
- **Button icon:** 32x32px
- **List icon:** 24x24px

## 💡 Best Practices

1. **Nhất quán:** Sử dụng cùng một style icon trong toàn bộ ứng dụng
2. **Màu sắc:** Giữ nguyên màu gốc hoặc thay đổi theo theme của bạn
3. **Kích thước:** Luôn giữ tỷ lệ khung hình 1:1
4. **Accessibility:** Thêm `alt` text hoặc `aria-label` cho screen reader
5. **Performance:** Nên inline SVG cho icon nhỏ, dùng file riêng cho icon lớn

## 📦 Cấu trúc thư mục đề xuất

```
/icons
  ├── success.svg
  ├── error.svg
  ├── warning.

## Tác giả

Đặng Đức Chính - Cảm ơn vì đã tham khảo trang này!
