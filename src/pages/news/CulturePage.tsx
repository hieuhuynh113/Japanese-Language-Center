import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Box,
  Pagination,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  category?: string;
  video?: string;
}

export const culturePosts: Post[] = [
  {
    id: 'culture-1',
    title: 'Lễ hội Hanami - Ngắm hoa anh đào Nhật Bản',
    date: '2024-01-10',
    image: 'https://thegioidulich.com/upload/tintuc/tham-quan-du-lich-nhat-ban_28_3_2018_9_9_9.png',
    excerpt: 'Khám phá văn hóa ngắm hoa anh đào độc đáo của người Nhật và những địa điểm nổi tiếng nhất để thưởng thức Hanami.',
    content: `# Lễ hội Hanami - Nét văn hóa độc đáo của Nhật Bản

## Lịch sử và ý nghĩa

Hanami (花見) theo nghĩa đen là "ngắm hoa", là một phong tục truyền thống của Nhật Bản khi người dân tụ tập dưới những tán hoa anh đào (sakura) để thưởng thức vẻ đẹp của mùa xuân. Truyền thống này có từ thời Nara (710-784), ban đầu chỉ phổ biến trong giới quý tộc, sau đó lan rộng ra toàn dân.

## Thời điểm và địa điểm

### Thời gian lý tưởng
- Tokyo: Cuối tháng 3 đến đầu tháng 4
- Kyoto: Đầu tháng 4
- Hokkaido: Cuối tháng 4 đến đầu tháng 5

### Địa điểm nổi tiếng
1. **Công viên Ueno (Tokyo)**
   - Hơn 1000 cây anh đào
   - Không gian rộng rãi cho picnic
   - Dễ dàng tiếp cận bằng tàu điện

2. **Lâu đài Hirosaki (Aomori)**
   - 2600 cây anh đào
   - Kết hợp ngắm hoa với di tích lịch sử
   - Hồ nước phản chiếu hoa tuyệt đẹp

3. **Công viên Maruyama (Kyoto)**
   - Cây anh đào "weeping cherry" nổi tiếng
   - Đèn chiếu sáng về đêm
   - Không khí truyền thống đậm nét

## Văn hóa Hanami

### Hoạt động phổ biến
- Picnic dưới tán hoa
- Thưởng thức đồ ăn và sake
- Chụp ảnh kỷ niệm
- Ca hát và trò chuyện

### Phong tục
- Trải bạt xanh (blue sheet) dưới gốc cây
- Cử người giữ chỗ từ sáng sớm
- Mang theo đồ ăn tự nấu hoặc bento
- Thưởng thức sake dưới hoa

## Ẩm thực Hanami

### Món ăn truyền thống
1. Hanami Dango
   - Bánh dango ba màu
   - Tượng trưng cho mùa xuân
   - Vị ngọt nhẹ, dễ ăn

2. Bento đặc biệt
   - Cơm nắm sakura
   - Tempura tôm
   - Trứng cuộn
   - Rau củ theo mùa

### Đồ uống
- Sake hoa anh đào
- Trà xanh
- Bia Nhật

## Lời khuyên cho du khách

### Chuẩn bị
1. Kiểm tra dự báo thời tiết và lịch nở hoa
2. Đặt chỗ ở sớm (khách sạn thường kín phòng)
3. Mang theo:
   - Áo ấm (trời có thể lạnh)
   - Máy ảnh
   - Bạt trải
   - Đồ ăn và nước uống

### Phép lịch sự
- Không hái hoặc làm rụng hoa
- Dọn dẹp sạch sẽ sau khi picnic
- Tôn trọng không gian của người khác
- Hạn chế ồn ào quá mức

## Kết luận

Hanami không chỉ là dịp ngắm hoa, mà còn là thời điểm quý giá để tận hưởng mùa xuân, gặp gỡ bạn bè và gia đình. Đây là một trong những trải nghiệm văn hóa đặc sắc nhất khi đến Nhật Bản vào mùa xuân.`,
    tags: ['Lễ hội', 'Văn hóa', 'Du lịch'],
    category: 'culture'
  },
  {
    id: 'culture-2',
    title: 'Trà đạo - Nghệ thuật thưởng trà của người Nhật',
    date: '2024-01-08',
    image: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/ban-sao-shutterstock1908062413-1675500379018.jpg',
    excerpt: 'Tìm hiểu về nghệ thuật trà đạo, một phần không thể thiếu trong văn hóa truyền thống Nhật Bản.',
    content: `# Trà đạo Nhật Bản - Sado (茶道)

## Lịch sử và ý nghĩa

Trà đạo Nhật Bản, hay còn gọi là Chanoyu (茶の湯) hoặc Sado (茶道), là một nghi thức chuẩn bị và phục vụ trà xanh dạng bột (matcha) theo nghi thức truyền thống. Nghệ thuật này không chỉ đơn thuần là việc uống trà mà còn là sự kết hợp của nhiều yếu tố văn hóa, nghệ thuật và tinh thần Zen.

## Các nguyên tắc cơ bản

### 1. Bốn nguyên tắc cốt lõi
- Hòa (和) - Sự hài hòa
- Kính (敬) - Sự tôn trọng
- Thanh (清) - Sự thanh khiết
- Tịch (寂) - Sự tĩnh lặng

### 2. Không gian trà đạo
- Chashitsu (茶室) - Phòng trà
- Roji (露地) - Lối đi vườn trà
- Tokonoma (床の間) - Góc trưng bày

## Quy trình trà đạo

### 1. Chuẩn bị
- Dọn dẹp và sắp xếp phòng trà
- Chuẩn bị dụng cụ
- Đun nước
- Nghiền bột trà

### 2. Nghi thức chính
1. Chào đón khách
2. Dâng bánh ngọt
3. Chuẩn bị trà
4. Thưởng trà
5. Làm sạch dụng cụ
6. Kết thúc buổi trà

## Dụng cụ trà đạo

### Dụng cụ chính
1. Chawan (茶碗) - Bát trà
2. Chasen (茶筅) - Phới đánh trà
3. Chashaku (茶杓) - Thìa múc bột trà
4. Natsume (棗) - Hộp đựng bột trà
5. Kama (釜) - Ấm đun nước

### Dụng cụ phụ
- Fukusa (袱紗) - Khăn lụa lau dụng cụ
- Chakin (茶巾) - Khăn lau bát trà
- Tana (棚) - Kệ đựng dụng cụ

## Phép tắc trong buổi trà

### Dành cho khách
1. Đến đúng giờ
2. Mặc trang phục phù hợp
3. Rửa tay và súc miệng
4. Di chuyển nhẹ nhàng
5. Quan sát và học hỏi

### Cách thưởng trà
1. Nhận bát trà bằng tay phải
2. Đặt bát lên lòng bàn tay trái
3. Xoay bát 3 lần theo chiều kim đồng hồ
4. Uống từng ngụm nhỏ
5. Lau mép bát sau khi uống

## Ý nghĩa văn hóa

### 1. Tinh thần Zen
- Sống trong hiện tại
- Tập trung vào từng động tác
- Trân trọng khoảnh khắc

### 2. Thẩm mỹ
- Wabi-sabi (侘寂) - Vẻ đẹp của sự không hoàn hảo
- Ichigo-ichie (一期一会) - Trân trọng từng cuộc gặp gỡ

## Học trà đạo

### Nơi học
1. Các trường trà đạo truyền thống
2. Trung tâm văn hóa Nhật Bản
3. Khóa học ngắn hạn cho du khách

### Cấp độ
- Sơ cấp: Học cách thưởng trà cơ bản
- Trung cấp: Học cách pha trà
- Cao cấp: Nghiên cứu sâu về triết lý và nghệ thuật

## Kết luận

Trà đạo Nhật Bản không chỉ là một nghi thức uống trà mà còn là một nghệ thuật sống, một cách để tìm hiểu về văn hóa và con người Nhật Bản. Thông qua việc học và thực hành trà đạo, chúng ta có thể hiểu sâu sắc hơn về văn hóa và truyền thống Nhật Bản.`,
    tags: ['Văn hóa', 'Truyền thống'],
    category: 'culture'
  },
  {
    id: 'culture-3',
    title: 'Kimono - Trang phục truyền thống Nhật Bản',
    date: '2024-01-05',
    image: 'https://aloha.edu.vn/wp-content/uploads/2023/10/trang-phuc-nhat-ban.jpg',
    excerpt: 'Khám phá lịch sử, ý nghĩa và cách mặc kimono đúng cách trong văn hóa Nhật Bản.',
    content: `# Kimono - Trang phục truyền thống Nhật Bản

## Lịch sử và ý nghĩa

Kimono là trang phục truyền thống của Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Từ "kimono" trong tiếng Nhật có nghĩa là "đồ mặc", nhưng kimono không chỉ là một món đồ thời trang mà còn là biểu tượng của văn hóa và truyền thống Nhật Bản.

## Các loại kimono

### 1. Furisode
- Kimono có tay dài, thường mặc trong các dịp lễ hội và trang trọng
- Thêu hoa và lá trên vải

### 2. Kurotomesode
- Kimono màu đen, thường mặc trong các dịp tang lễ và trang trọng
- Thêu hoa và lá trên vải

### 3. Irotomesode
- Kimono màu sắc, thường mặc trong các dịp lễ hội và trang trọng
- Thêu hoa và lá trên vải

### 4. Yukata
- Kimono mùa hè, thường mặc trong các dịp lễ hội và picnic
- May từ vải cotton hoặc lanh

## Cách mặc kimono

### 1. Chuẩn bị
- Chọn kimono phù hợp với dịp lễ và trang phục
- Chuẩn bị obi (dải lưng) và các phụ kiện khác

### 2. Mặc kimono
1. Đặt kimono lên người
2. Cài khuy và kéo dây
3. Đội obi và các phụ kiện khác

### 3. Hoàn thiện
- Kiểm tra và điều chỉnh trang phục
- Thêm các phụ kiện khác như mũ, túi xách

## Phụ kiện kimono

### 1. Obi
- Dải lưng kimono
- Có nhiều loại obi khác nhau, tùy thuộc vào dịp lễ và trang phục

### 2. Geta
- Dép gỗ kimono
- Có nhiều loại geta khác nhau, tùy thuộc vào dịp lễ và trang phục

### 3. Tabi
- Tất kimono
- Có nhiều loại tabi khác nhau, tùy thuộc vào dịp lễ và trang phục

## Ý nghĩa văn hóa

### 1. Truyền thống
- Kimono là biểu tượng của văn hóa và truyền thống Nhật Bản
- Được mặc trong các dịp lễ hội và trang trọng

### 2. Nghệ thuật
- Kimono là một loại hình nghệ thuật truyền thống Nhật Bản
- Thêu hoa và lá trên vải là một kỹ thuật phức tạp

## Kết luận

Kimono là trang phục truyền thống Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Thông qua việc mặc kimono, chúng ta có thể hiểu sâu sắc hơn về văn hóa và truyền thống Nhật Bản.`,
    tags: ['Thời trang', 'Văn hóa'],
    category: 'culture'
  },
  {
    id: 'culture-4',
    title: 'Sumo - Môn võ truyền thống của đất nước Mặt trời mọc',
    date: '2024-01-03',
    image: 'https://vietcomtoday.vn/upload/images/httpcdncnncomcnnnextdamassets221128134901-04-lord-k2-sumo-15574775.jpg',
    excerpt: 'Tìm hiểu về lịch sử, luật lệ và những nghi thức trong môn võ sumo của Nhật Bản.',
    content: `# Sumo - Môn võ truyền thống Nhật Bản

## Lịch sử và ý nghĩa

Sumo là môn võ truyền thống của Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Từ "sumo" trong tiếng Nhật có nghĩa là "đấu vật", nhưng sumo không chỉ là một môn thể thao mà còn là biểu tượng của văn hóa và truyền thống Nhật Bản.

## Các loại sumo

### 1. Honbasho
- Giải đấu sumo chính thức
- Được tổ chức 6 lần trong năm

### 2. Jungyo
- Giải đấu sumo không chính thức
- Được tổ chức để chuẩn bị cho honbasho

### 3. Kohaku
- Giải đấu sumo dành cho các vận động viên trẻ
- Được tổ chức để tìm kiếm tài năng mới

## Luật lệ sumo

### 1. Sân đấu
- Sân đấu sumo là một vòng tròn có đường kính 4,5m
- Được làm từ đất sét và có một vòng tròn nhỏ ở giữa

### 2. Trang phục
- Vận động viên sumo mặc một loại quần đặc biệt gọi là "mawashi"
- Được làm từ vải cotton hoặc lanh

### 3. Luật chơi
1. Hai vận động viên sumo đối đầu nhau trong sân đấu
2. Mục tiêu là đẩy đối thủ ra khỏi sân đấu hoặc làm đối thủ chạm đất
3. Trận đấu được chia thành nhiều hiệp, mỗi hiệp kéo dài 4-5 phút

## Nghi thức sumo

### 1. Lễ khai mạc
- Được tổ chức trước mỗi trận đấu
- Bao gồm các nghi thức như chào cờ, đọc kinh và làm lễ

### 2. Lễ bế mạc
- Được tổ chức sau mỗi trận đấu
- Bao gồm các nghi thức như chào cờ, đọc kinh và làm lễ

### 3. Nghi thức ăn uống
- Vận động viên sumo ăn một loại thức ăn đặc biệt gọi là "chankonabe"
- Được làm từ thịt, cá và rau củ

## Ý nghĩa văn hóa

### 1. Truyền thống
- Sumo là biểu tượng của văn hóa và truyền thống Nhật Bản
- Được tổ chức trong các dịp lễ hội và trang trọng

### 2. Nghệ thuật
- Sumo là một loại hình nghệ thuật truyền thống Nhật Bản
- Bao gồm các yếu tố như trang phục, sân đấu và luật lệ

## Kết luận

Sumo là môn võ truyền thống Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Thông qua việc tìm hiểu về sumo, chúng ta có thể hiểu sâu sắc hơn về văn hóa và truyền thống Nhật Bản.`,
    tags: ['Thể thao', 'Văn hóa'],
    category: 'sports'
  },
  {
    id: 'culture-5',
    title: 'Nghệ thuật Origami - Gấp giấy Nhật Bản',
    date: '2024-01-01',
    image: 'https://duhocvietnhat.edu.vn/wp-content/uploads/nghe-thuat-gap-giay-origami-tai-nhat-ban-2.jpg',
    excerpt: 'Khám phá nghệ thuật gấp giấy origami và ý nghĩa văn hóa của nó trong đời sống người Nhật.',
    content: `# Nghệ thuật Origami - Gấp giấy Nhật Bản

## Lịch sử và ý nghĩa

Origami là nghệ thuật gấp giấy truyền thống của Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Từ "origami" trong tiếng Nhật có nghĩa là "đồ gấp", nhưng origami không chỉ là một loại hình nghệ thuật mà còn là biểu tượng của văn hóa và truyền thống Nhật Bản.

## Các loại origami

### 1. Origami truyền thống
- Gấp giấy theo các mẫu truyền thống
- Bao gồm các hình dạng như hoa, lá và chim

### 2. Origami hiện đại
- Gấp giấy theo các mẫu hiện đại
- Bao gồm các hình dạng như động vật, máy bay và tàu thủy

### 3. Origami nghệ thuật
- Gấp giấy theo các mẫu nghệ thuật
- Bao gồm các hình dạng như hoa, lá và chim được thiết kế theo phong cách nghệ thuật

## Kỹ thuật gấp origami

### 1. Kỹ thuật cơ bản
- Gấp giấy theo các nếp gấp cơ bản
- Bao gồm các nếp gấp như gấp đôi, gấp ba và gấp tư

### 2. Kỹ thuật nâng cao
- Gấp giấy theo các nếp gấp nâng cao
- Bao gồm các nếp gấp như gấp xoắn, gấp uốn và gấp cong

### 3. Kỹ thuật kết hợp
- Gấp giấy theo các nếp gấp kết hợp
- Bao gồm các nếp gấp như gấp đôi và gấp ba kết hợp với gấp xoắn và gấp uốn

## Ý nghĩa văn hóa

### 1. Truyền thống
- Origami là biểu tượng của văn hóa và truyền thống Nhật Bản
- Được tổ chức trong các dịp lễ hội và trang trọng

### 2. Nghệ thuật
- Origami là một loại hình nghệ thuật truyền thống Nhật Bản
- Bao gồm các yếu tố như giấy, nếp gấp và hình dạng

### 3. Giáo dục
- Origami được sử dụng trong giáo dục để phát triển kỹ năng và sáng tạo
- Bao gồm các hoạt động như gấp giấy, cắt giấy và dán giấy

## Kết luận

Origami là nghệ thuật gấp giấy truyền thống Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Thông qua việc tìm hiểu về origami, chúng ta có thể hiểu sâu sắc hơn về văn hóa và truyền thống Nhật Bản.`,
    tags: ['Nghệ thuật', 'Văn hóa'],
    category: 'arts'
  },
  {
    id: 'culture-6',
    title: 'Matsuri - Những lễ hội đặc sắc của Nhật Bản',
    date: '2023-12-30',
    image: 'https://kilala.vn/data/upload/article/10311/le-hoi-matsuri-la-mot-net-dep-trong-van-hoa-truyen-thong-xu-phu-tang.jpg',
    excerpt: 'Giới thiệu về các lễ hội truyền thống lớn của Nhật Bản và ý nghĩa văn hóa của chúng.',
    content: `# Matsuri - Những lễ hội đặc sắc của Nhật Bản

## Lịch sử và ý nghĩa

Matsuri là những lễ hội truyền thống của Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Từ "matsuri" trong tiếng Nhật có nghĩa là "lễ hội", nhưng matsuri không chỉ là một loại hình lễ hội mà còn là biểu tượng của văn hóa và truyền thống Nhật Bản.

## Các loại matsuri

### 1. Lễ hội mùa xuân
- Được tổ chức vào mùa xuân
- Bao gồm các lễ hội như lễ hội hoa anh đào và lễ hội mùa xuân

### 2. Lễ hội mùa hè
- Được tổ chức vào mùa hè
- Bao gồm các lễ hội như lễ hội mùa hè và lễ hội bãi biển

### 3. Lễ hội mùa thu
- Được tổ chức vào mùa thu
- Bao gồm các lễ hội như lễ hội mùa thu và lễ hội thu hoạch

### 4. Lễ hội mùa đông
- Được tổ chức vào mùa đông
- Bao gồm các lễ hội như lễ hội mùa đông và lễ hội tuyết

## Ý nghĩa văn hóa

### 1. Truyền thống
- Matsuri là biểu tượng của văn hóa và truyền thống Nhật Bản
- Được tổ chức trong các dịp lễ hội và trang trọng

### 2. Nghệ thuật
- Matsuri là một loại hình nghệ thuật truyền thống Nhật Bản
- Bao gồm các yếu tố như âm nhạc, múa và trang phục

### 3. Giáo dục
- Matsuri được sử dụng trong giáo dục để phát triển kỹ năng và sáng tạo
- Bao gồm các hoạt động như tham gia lễ hội, học múa và học âm nhạc

## Kết luận

Matsuri là những lễ hội truyền thống của Nhật Bản, có lịch sử lâu đời và ý nghĩa văn hóa sâu sắc. Thông qua việc tìm hiểu về matsuri, chúng ta có thể hiểu sâu sắc hơn về văn hóa và truyền thống Nhật Bản.`,
    tags: ['Lễ hội', 'Văn hóa'],
    category: 'culture'
  },
  {
    id: 'le-hoi-van-hoa-nhat-ban-2024',
    title: 'Lễ hội văn hóa Nhật Bản 2024',
    date: '2024-02-15',
    image: '/images/culture-festival-2024.jpg',
    excerpt: 'Sự kiện văn hóa Nhật Bản lớn nhất năm 2024 tại trung tâm, với nhiều hoạt động thú vị và ý nghĩa.',
    content: `# Lễ hội văn hóa Nhật Bản 2024

## Thông tin sự kiện
- **Thời gian**: 15/03/2024 - 17/03/2024
- **Địa điểm**: Trung tâm Tiếng Nhật Yamato
- **Đối tượng**: Tất cả học viên và người yêu thích văn hóa Nhật Bản

## Các hoạt động chính

### 1. Trải nghiệm văn hóa
- Thử kimono truyền thống
- Trà đạo
- Thư pháp Nhật Bản
- Origami

### 2. Ẩm thực Nhật Bản
- Workshop làm sushi
- Giới thiệu các món ăn truyền thống
- Trình diễn nghệ thuật ẩm thực

### 3. Biểu diễn nghệ thuật
- Múa truyền thống
- Taiko (trống Nhật)
- Cosplay

## Lịch trình chi tiết

### Ngày 15/03
- 9:00 - Khai mạc
- 10:00 - Workshop trà đạo
- 14:00 - Biểu diễn văn nghệ
- 16:00 - Workshop làm sushi

### Ngày 16/03
- 9:00 - Workshop thư pháp
- 13:00 - Trình diễn kimono
- 15:00 - Biểu diễn Taiko
- 17:00 - Tiệc giao lưu văn hóa

### Ngày 17/03
- 9:00 - Hội thi cosplay
- 13:00 - Trình diễn ẩm thực
- 15:00 - Bế mạc

## Đăng ký tham gia
Vui lòng đăng ký tại văn phòng trung tâm hoặc qua website trước ngày 10/03/2024.`,
    tags: ['Văn hóa', 'Sự kiện', 'Lễ hội'],
    category: 'culture'
  },
  {
    id: 'khai-giang-khoa-n5-thang-6',
    title: 'Khai giảng khóa N5 tháng 6',
    date: '2024-05-20',
    image: '/images/n5-course.jpg',
    excerpt: 'Thông tin chi tiết về khóa học N5 khai giảng tháng 6/2024 tại trung tâm.',
    content: `# Khóa học JLPT N5 - Tháng 6/2024

## Thông tin khóa học

### Thời gian và lịch học
- **Khai giảng**: 01/06/2024
- **Thời lượng**: 4 tháng
- **Lịch học**: 
  - Sáng: 8:00 - 10:00 (Thứ 3, 5, 7)
  - Tối: 18:00 - 20:00 (Thứ 2, 4, 6)

### Học phí và ưu đãi
- Học phí: 4,500,000 VNĐ/khóa
- Ưu đãi đăng ký sớm: Giảm 10% khi đăng ký trước 25/05/2024
- Ưu đãi học viên cũ: Giảm 15%

## Nội dung khóa học

### 1. Chương trình học
- Ngữ pháp cơ bản N5
- 100 kanji cơ bản
- Từ vựng 800 từ
- Luyện nghe, đọc, nói

### 2. Tài liệu học tập
- Minna no Nihongo I
- Giáo trình bổ trợ N5
- Tài liệu luyện thi

### 3. Hoạt động học tập
- Lớp học tương tác
- Bài tập về nhà
- Kiểm tra định kỳ
- Thi thử N5

## Quyền lợi học viên
- Tham gia câu lạc bộ tiếng Nhật miễn phí
- Được tham gia các hoạt động văn hóa
- Tư vấn du học Nhật Bản
- Hỗ trợ tìm việc làm

## Đăng ký và thông tin liên hệ
- Điện thoại: 0123.456.789
- Email: info@yamato.edu.vn
- Địa chỉ: 123 Nguyễn Văn A, Quận 1, TP.HCM`,
    tags: ['Khóa học', 'JLPT N5'],
    category: 'course'
  },
  {
    id: 'le-hoi-van-hoa-nhat-ban',
    title: 'Lễ hội văn hóa Nhật Bản',
    date: '2023-12-10',
    image: '/images/culture-festival.jpg',
    excerpt: 'Tổng kết lễ hội văn hóa Nhật Bản 2023 với nhiều hoạt động thú vị.',
    content: `# Lễ hội văn hóa Nhật Bản 2023 - Kết nối văn hóa

## Tổng quan sự kiện
Lễ hội văn hóa Nhật Bản 2023 đã diễn ra thành công tốt đẹp vào ngày 10/12/2023 tại Trung tâm Tiếng Nhật Yamato với sự tham gia của hơn 500 học viên và khách mời.

## Các hoạt động nổi bật

### 1. Trình diễn văn hóa
- Biểu diễn trà đạo truyền thống
- Show diễn Yukata và Kimono
- Biểu diễn võ thuật Kendo
- Trình diễn nghệ thuật gấp giấy Origami

### 2. Gian hàng ẩm thực
- Sushi và Sashimi
- Takoyaki
- Ramen
- Matcha và bánh wagashi

### 3. Khu vực trò chơi truyền thống
- Fukuwarai
- Kendama
- Karuta
- Kingyo-sukui

## Kết quả các cuộc thi

### 1. Cuộc thi cosplay
- Giải nhất: Nguyễn Văn A - Nhân vật Naruto
- Giải nhì: Trần Thị B - Nhân vật Sailor Moon
- Giải ba: Lê Văn C - Nhân vật One Piece

### 2. Cuộc thi hát tiếng Nhật
- Giải nhất: Phạm Thị D - Bài hát "Sakura"
- Giải nhì: Hoàng Văn E - Bài hát "Yume no Tsuzuki"
- Giải ba: Ngô Thị F - Bài hát "Chiisana Koi"

## Ấn tượng và phản hồi
- 95% người tham dự hài lòng với sự kiện
- Nhiều học viên mong muốn có thêm các sự kiện tương tự
- Góp phần tăng cường hiểu biết về văn hóa Nhật Bản

## Lời cảm ơn
Trung tâm xin chân thành cảm ơn tất cả học viên, đối tác và khách mời đã tham gia và đóng góp vào sự thành công của lễ hội.`,
    tags: ['Văn hóa', 'Sự kiện', 'Lễ hội'],
    category: 'culture'
  },
  {
    id: 'ky-thi-jlpt-thang-7',
    title: 'Kỳ thi JLPT tháng 7',
    date: '2024-05-15',
    image: '/images/jlpt-exam.jpg',
    excerpt: 'Thông tin về kỳ thi JLPT tháng 7/2024 và các khóa luyện thi.',
    content: `# Kỳ thi JLPT tháng 7/2024

## Thông tin kỳ thi

### Thời gian và địa điểm
- **Ngày thi**: 07/07/2024
- **Thời gian đăng ký**: 15/04/2024 - 15/05/2024
- **Địa điểm thi**: 
  - TP.HCM: Đại học Khoa học Xã hội và Nhân văn
  - Hà Nội: Đại học Ngoại ngữ - ĐHQG Hà Nội
  - Đà Nẵng: Đại học Ngoại ngữ - ĐH Đà Nẵng

### Lệ phí thi
- N1: 1,000,000 VNĐ
- N2: 900,000 VNĐ
- N3: 800,000 VNĐ
- N4: 700,000 VNĐ
- N5: 600,000 VNĐ

## Khóa luyện thi tại trung tâm

### 1. Khóa học cấp tốc (2 tháng)
- Thời gian: 15/05/2024 - 05/07/2024
- Học phí: 3,500,000 VNĐ
- Lịch học: 3 buổi/tuần
- Nội dung:
  - Ôn tập toàn diện
  - Luyện đề
  - Thi thử 2 lần

### 2. Khóa học 1-1
- Thời gian linh hoạt
- Học phí: 500,000 VNĐ/giờ
- Giáo viên chuyên môn cao
- Chương trình học cá nhân hóa

## Tài liệu và nguồn học

### 1. Tài liệu chính thức
- Sách luyện thi JLPT các cấp độ
- Đề thi mẫu
- Ngân hàng từ vựng và ngữ pháp

### 2. Tài liệu bổ trợ
- App luyện thi
- Website học online
- Tài liệu nghe

## Lời khuyên ôn thi

### 1. Quản lý thời gian
- Lập kế hoạch học tập chi tiết
- Phân bổ thời gian hợp lý
- Dành thời gian cho việc ôn tập

### 2. Phương pháp học
- Làm nhiều đề thi thử
- Học từ vựng theo chủ đề
- Luyện nghe thường xuyên

## Đăng ký và tư vấn
- Liên hệ: 0123.456.789
- Email: jlpt@yamato.edu.vn
- Văn phòng trung tâm`,
    tags: ['JLPT', 'Thi cử', 'Luyện thi'],
    category: 'exam'
  }
];

const CulturePage = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const postsPerPage = 6;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = culturePosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Box py={4}>
          <Typography variant="h4" gutterBottom>
            Văn hóa Nhật Bản
          </Typography>
          <Grid container spacing={3}>
            {currentPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  component={motion.div}
                  whileHover={{ y: -5 }}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActionArea onClick={() => navigate(`/news/culture/${post.id}`)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Box display="flex" gap={1} mt={1}>
                        {post.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={Math.ceil(culturePosts.length / postsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default CulturePage;
