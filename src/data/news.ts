export interface NewsItem {
   id: string;
   title: string; // Tiêu đề ngắn gọn, súc tích
   description: string; // Tóm tắt nội dung để thu hút sự chú ý
   content: string; // Nội dung đầy đủ của bài viết
   image: string; // Hình ảnh chính đại diện cho bài viết
   gallery?: { // Bộ sưu tập hình ảnh minh họa thêm
     original: string;
     thumbnail: string;
     description?: string;
   }[];
   date: string; // Ngày đăng bài
   author: string; // Tên tác giả hoặc bộ phận quản lý tin tức
   category: 'event' | 'announcement' | 'culture'; // Phân loại bài viết
   tags: string[]; // Các từ khóa liên quan
 }
 

export const news: NewsItem[] = [
  {
    id: 'le-hoi-van-hoa-nhat-ban-2024',
    title: '🎏 Lễ hội Văn hóa Nhật Bản 2024 - Sắc màu Sakura tại Việt Nam',
    description: 'Trung tâm tiếng Nhật phối hợp cùng Hội Hữu nghị Việt-Nhật tổ chức Lễ hội Văn hóa Nhật Bản với nhiều hoạt động hấp dẫn và cơ hội trải nghiệm văn hóa độc đáo.',
    content: `
# 🎎 Lễ hội Văn hóa Nhật Bản 2024

## 📅 Thời gian & Địa điểm
- Thời gian: 20-21/07/2024 (8:00 - 21:00)
- Địa điểm: Công viên Văn hóa Tao Đàn, TP.HCM

## 🌸 Các hoạt động chính
1. **Trình diễn Văn hóa**
   - Biểu diễn trà đạo
   - Show diễn Yosakoi
   - Trình diễn Cosplay
   - Hòa tấu nhạc cụ truyền thống

2. **Trải nghiệm Thực tế**
   - Workshop làm sushi
   - Thử kimono
   - Thư pháp Nhật Bản
   - Origami workshop

3. **Ẩm thực Nhật Bản**
   - Khu vực ẩm thực đa dạng
   - Trình diễn nấu ăn
   - Thưởng thức sake

4. **Học tập & Giao lưu**
   - Giao lưu với du học sinh
   - Tư vấn du học
   - Mini game tiếng Nhật
   - Triển lãm giáo dục

## 🎫 Vé tham dự
- Vé thường: 100.000đ
- Vé VIP (bao gồm workshop): 250.000đ
- Miễn phí cho học viên của trung tâm
- Giảm 50% cho học sinh, sinh viên

## 🎁 Đặc biệt
- Quà tặng cho 200 khách đầu tiên mỗi ngày
- Cơ hội trúng vé máy bay khứ hồi đi Nhật
- Học bổng tiếng Nhật trị giá 10 triệu đồng

## 📞 Đăng ký tham dự
Đăng ký trước để nhận ưu đãi đặc biệt và đảm bảo chỗ tham gia các workshop
    `,
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800',
    gallery: [
      {
        original: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200',
        description: 'Trình diễn trà đạo truyền thống'
      },
      {
        original: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200',
        description: 'Workshop làm sushi'
      },
      {
        original: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800',
        thumbnail: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=200',
        description: 'Trình diễn Yosakoi'
      }
    ],
    date: '2024-07-20',
    author: 'Ban Văn hóa - Trung tâm Tiếng Nhật',
    category: 'culture',
    tags: ['lễ hội', 'văn hóa', 'sự kiện', 'workshop', 'ẩm thực', 'nghệ thuật']
  },
  {
    id: 'khai-giang-khoa-n5-thang-6',
    title: '🌟 Khóa học JLPT N5 - Khởi đầu hành trình chinh phục tiếng Nhật!',
    description: 'Cơ hội đặc biệt: Khóa học N5 khai giảng tháng 6/2024 với ưu đãi lên đến 20% và lộ trình học tập chuẩn quốc tế. Số lượng có hạn - Đăng ký ngay!',
    content: `
# 🎌 Khóa học JLPT N5 - Tháng 6/2024

## ✨ Điểm nổi bật
- 📚 Giáo trình chuẩn quốc tế
- 🎓 Giảng viên bản ngữ + Việt Nam
- 👥 Lớp học mini (15-20 học viên)
- 🎯 Cam kết đầu ra N5

## 📅 Thông tin khóa học
- Khai giảng: 01/06/2024
- Thời gian: 3 buổi/tuần × 120 phút
- Lịch học linh hoạt: Sáng | Chiều | Tối
- Học phí: 3.600.000đ/khóa

## 🎁 Ưu đãi đặc biệt
- Giảm 15% học phí cho 20 học viên đầu tiên
- Tặng thêm 5% cho học viên cũ
- Bộ giáo trình độc quyền trị giá 500.000đ
- 2 lần thi thử JLPT miễn phí

## 💫 Chương trình học
1. Phát âm & Hội thoại cơ bản
2. Ngữ pháp & Từ vựng N5
3. Luyện thi JLPT theo format chuẩn
4. Văn hóa Nhật Bản

## 📞 Đăng ký ngay
- ☎️ Hotline: 0123.456.789
- 🏢 Địa chỉ: 123 Nguyễn Văn A, Quận 1, TP.HCM
- 💻 Online: www.yamada.edu.vn

## 🌈 Tại sao chọn Yamada?
- 10+ năm kinh nghiệm đào tạo
- 95% học viên đạt chứng chỉ JLPT
- Môi trường học tập Nhật Bản
- Cơ hội việc làm sau tốt nghiệp

---
💡 *Khởi đầu hành trình chinh phục tiếng Nhật của bạn cùng Trung tâm Nhật ngữ Yamada ngay hôm nay!*
    `,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    gallery: [
      {
        original: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Lớp học N5 tại trung tâm'
      },
      {
        original: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Học viên thực hành hội thoại'
      },
      {
        original: 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Giáo trình và tài liệu học tập'
      }
    ],
    date: '2024-05-15',
    author: 'Admin',
    category: 'announcement',
    tags: ['Khai giảng', 'N5', 'Ưu đãi']
  },
  {
    id: 'le-hoi-van-hoa-nhat-ban',
    title: '🎎 Lễ Hội Văn Hóa Nhật Bản 2024 - Trải Nghiệm Nhật Bản Tại Việt Nam!',
    description: '🌸 Đắm chìm trong không gian văn hóa Nhật Bản với trà đạo, kimono, và nghệ thuật truyền thống. Sự kiện đặc biệt chỉ có tại Trung tâm Nhật ngữ Yamada!',
    content: `
# 🎌 Lễ Hội Văn Hóa Nhật Bản 2024

## 📅 Thời Gian & Địa Điểm
- 📆 Ngày: 20/07/2024 (Thứ Bảy)
- ⏰ Giờ: 8:00 - 17:00
- 📍 Địa điểm: Trung tâm Nhật ngữ Yamada
- 🎫 Vé vào cửa: 100.000đ (Miễn phí cho học viên)

## ✨ Trải Nghiệm Văn Hóa

### 🍵 Nghệ Thuật Trà Đạo
- Tìm hiểu nghi thức trà đạo cổ truyền
- Thực hành pha trà cùng chuyên gia Nhật Bản
- Thưởng thức matcha & bánh wagashi

### 👘 Kimono Experience
- Trải nghiệm mặc kimono truyền thống
- Chụp ảnh với phông nền đặc biệt
- Tư vấn về các loại kimono theo mùa

### 🎭 Nghệ Thuật Biểu Diễn
- 🥋 Demo Kendo & Aikido
- 🎋 Múa truyền thống
- 📜 Workshop Shodo (Thư pháp)
- 🎨 Trình diễn Origami

### 🍱 Ẩm Thực Nhật Bản
- Workshop làm sushi cùng đầu bếp
- Trải nghiệm ẩm thực vùng miền
- Thử món wagashi truyền thống

## 🎁 Đặc Biệt
- Quà tặng may mắn cho 100 khách đầu tiên
- Voucher giảm 20% khóa học tại trung tâm
- Bốc thăm trúng thưởng với phần quà giá trị

## 📝 Đăng Ký
- ☎️ Hotline: 0123.456.789
- 💻 Website: www.yamada.edu.vn/festival2024
- 📧 Email: festival@yamada.edu.vn

---
💡 *Hãy đến và cùng trải nghiệm một ngày đậm chất Nhật Bản!*
    `,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80',
    gallery: [
      {
        original: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Lễ hội văn hóa Nhật Bản'
      },
      {
        original: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Trà đạo truyền thống'
      },
      {
        original: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Kimono truyền thống'
      }
    ],
    date: '2024-06-01',
    author: 'Admin',
    category: 'event',
    tags: ['Lễ hội', 'Văn hóa', 'Sự kiện']
  },
  {
    id: 'ky-thi-jlpt-thang-7',
    title: '📝 JLPT 07/2024: Chuẩn Bị Và Chinh Phục!',
    description: '🎯 Thông tin chi tiết về kỳ thi JLPT tháng 7/2024 và khóa luyện thi đặc biệt với tỷ lệ đỗ cao tại Trung tâm Nhật ngữ Yamada.',
    content: `
# 📚 Kỳ Thi JLPT Tháng 7/2024

## ⏰ Thông Tin Quan Trọng
- 📅 Ngày thi: 07/07/2024
- ⚠️ Hạn đăng ký: 30/05/2024
- 🎯 Các cấp độ: N1 | N2 | N3 | N4 | N5
- 💰 Lệ phí: 
  - N1, N2: 800.000đ
  - N3, N4, N5: 600.000đ

## 🌟 Khóa Luyện Thi Đặc Biệt

### 📋 Thông Tin Khóa Học
- ⏱️ Thời gian: 01/05 - 30/06/2024
- 👥 Lớp học: 10-15 học viên
- 📊 Tỷ lệ đỗ: 90%+ các năm trước

### 💫 Điểm Nổi Bật
- 📚 Giáo trình chuẩn JLPT mới nhất
- 🎯 Đề thi thử + Giải đề chi tiết
- 👨‍🏫 Giảng viên kinh nghiệm 5+ năm
- 💡 Chiến thuật làm bài độc quyền

### ⭐ Ưu Đãi Học Phí
- 🎁 Giảm 20% khi đăng ký sớm
- 🎯 Tặng 3 đề thi thử + Mock test
- 📝 Miễn phí tài liệu bổ trợ

## 🕒 Lịch Học Linh Hoạt
- 🌅 Sáng: 8:00 - 10:00
- 🌞 Chiều: 14:00 - 16:00
- 🌙 Tối: 18:00 - 20:00

## 📞 Đăng Ký & Tư Vấn
- ☎️ Hotline: 0123.456.789
- 💻 Online: www.yamada.edu.vn/jlpt
- 🏢 Văn phòng: 123 Nguyễn Văn A, Q.1

---
💪 *Đăng ký ngay hôm nay để nắm chắc chứng chỉ JLPT trong tay!*
    `,
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    gallery: [
      {
        original: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Kỳ thi JLPT'
      },
      {
        original: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Lớp luyện thi'
      },
      {
        original: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
        description: 'Học viên ôn tập'
      }
    ],
    date: '2024-04-15',
    author: 'Admin',
    category: 'announcement',
    tags: ['JLPT', 'Thi cử', 'Luyện thi']
  }
];
