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

export const studyTipsPosts: Post[] = [
  {
    id: 'study-1',
    title: '5 Phương pháp học Kanji hiệu quả nhất',
    date: '2024-01-10',
    image: 'https://meihoctiengnhat.com/wp-content/uploads/2024/06/Green-Colorful-Cute-Aesthetic-Group-Project-Presentation-2-1024x576.png',
    excerpt: 'Khám phá những phương pháp học Kanji hiệu quả giúp bạn nhớ lâu và áp dụng tốt trong việc đọc hiểu.',
    tags: ['Kanji', 'Học tập', 'Kỹ năng'],
    category: 'study-tips',
    video: 'https://www.youtube.com/embed/FjtVmWzSDKk',
    content: `## 1. Phương pháp Radicals (Bộ thủ)
Kanji được cấu tạo từ các thành phần nhỏ hơn gọi là radicals. Việc học và nhận biết các radicals sẽ giúp bạn dễ dàng nhớ và phân biệt các chữ Kanji. Ví dụ:
- 木 (ki - cây) là radical cơ bản
- 森 (mori - rừng) được tạo từ ba chữ 木
- 林 (hayashi - rừng nhỏ) được tạo từ hai chữ 木

## 2. Phương pháp Mnemonic (Liên tưởng)
Tạo các câu chuyện hay hình ảnh liên tưởng để nhớ Kanji. Ví dụ:
- 休 (nghỉ ngơi) = 人 (người) + 木 (cây) → Hình ảnh một người dựa vào cây để nghỉ ngơi
- 明 (sáng) = 日 (mặt trời) + 月 (mặt trăng) → Mặt trời và mặt trăng cùng tỏa sáng

## 3. Phương pháp Spaced Repetition (Lặp lại ngắt quãng)
- Sử dụng các ứng dụng như Anki hoặc WaniKani
- Ôn tập theo lịch trình khoa học
- Tăng dần khoảng cách ôn tập khi đã nhớ tốt

## 4. Phương pháp Context (Ngữ cảnh)
- Học Kanji trong câu và văn cảnh thực tế
- Đọc nhiều văn bản tiếng Nhật
- Ghi chú và học từ những tình huống thực tế

## 5. Phương pháp Writing (Viết tay)
- Luyện viết Kanji theo bộ thủ
- Chú ý thứ tự nét viết
- Thực hành viết hàng ngày

## Lưu ý khi học Kanji
- Học từ dễ đến khó
- Tập trung vào các Kanji thông dụng trước
- Kết hợp nhiều phương pháp học khác nhau
- Kiên trì và học đều đặn mỗi ngày

## Kết luận
Không có phương pháp nào là hoàn hảo cho tất cả mọi người. Hãy thử nghiệm và tìm ra phương pháp phù hợp nhất với bản thân. Điều quan trọng là kiên trì và thực hành đều đặn.`,
  },
  {
    id: 'study-2',
    title: 'Top 10 ứng dụng học tiếng Nhật tốt nhất 2024',
    date: '2024-01-08',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
    excerpt: 'Tổng hợp các ứng dụng học tiếng Nhật hiệu quả nhất, giúp bạn học mọi lúc mọi nơi.',
    tags: ['Ứng dụng', 'Học tập', 'Công nghệ'],
    category: 'study-tips',
    video: 'https://youtu.be/QMqtvWoPUnQ?si=OMHh08tL_U5LXTLH',
    content: `## 1. Duolingo
### Ưu điểm
- Miễn phí
- Giao diện thân thiện
- Gamification tốt
- Học theo chủ đề

### Nhược điểm
- Thiếu giải thích ngữ pháp chi tiết
- Đôi khi câu dịch không tự nhiên

## 2. Anki
### Ưu điểm
- Hệ thống SRS hiệu quả
- Tùy chỉnh cao
- Cộng đồng chia sẻ deck lớn
- Đồng bộ đa thiết bị

### Nhược điểm
- Giao diện đơn giản
- Cần thời gian để làm quen

## 3. WaniKani
### Ưu điểm
- Chuyên về Kanji và từ vựng
- Hệ thống học có cấu trúc
- Mnemonics độc đáo
- Cộng đồng hỗ trợ tốt

### Nhược điểm
- Tốn phí
- Không thể tùy chỉnh thứ tự học

## 4. Memrise
### Ưu điểm
- Nhiều khóa học đa dạng
- Video clip người bản xứ
- Học qua trò chơi
- Phát âm chuẩn

### Nhược điểm
- Một số tính năng cần trả phí
- Không có giải thích ngữ pháp sâu

## 5. LingoDeer
### Ưu điểm
- Thiết kế cho người học tiếng Á
- Giải thích ngữ pháp chi tiết
- Bài tập đa dạng
- Phát âm chuẩn

### Nhược điểm
- Phí đăng ký cao
- Ít nội dung nâng cao

## 6. Kanji Study
### Ưu điểm
- Chuyên sâu về Kanji
- Thứ tự nét viết animation
- Quiz đa dạng
- Tùy chỉnh cao

### Nhược điểm
- Chỉ tập trung vào Kanji
- Một số tính năng cần mua

## 7. Bunpo
### Ưu điểm
- Tập trung vào ngữ pháp
- Giải thích chi tiết
- Ví dụ thực tế
- Bài tập đa dạng

### Nhược điểm
- Giao diện đơn giản
- Cần trả phí để mở khóa

## 8. HelloTalk
### Ưu điểm
- Kết nối với người bản xứ
- Học qua trò chuyện thực tế
- Công cụ sửa lỗi
- Cộng đồng lớn

### Nhược điểm
- Phụ thuộc vào đối thoại
- Có thể gặp spam

## 9. Busuu
### Ưu điểm
- Khóa học có cấu trúc
- Phản hồi từ người bản xứ
- Chứng chỉ hoàn thành
- Offline mode

### Nhược điểm
- Cần trả phí để mở full tính năng
- Ít tùy chỉnh

## 10. Drops
### Ưu điểm
- Học từ vựng trực quan
- Animation đẹp mắt
- 5 phút mỗi ngày
- Không cần đăng ký

### Nhược điểm
- Chỉ tập trung từ vựng
- Giới hạn thời gian học free

## Lời khuyên khi chọn ứng dụng
- Xác định mục tiêu học tập
- Thử nghiệm nhiều ứng dụng
- Kết hợp nhiều ứng dụng
- Kiên trì sử dụng

## Kết luận
Mỗi ứng dụng đều có ưu nhược điểm riêng. Hãy chọn ứng dụng phù hợp với mục tiêu và phong cách học của bạn.`,
  },
];

const StudyTipsPage = () => {
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/news/study-tips/${postId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Mẹo Học Tiếng Nhật
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Khám phá những phương pháp và bí quyết học tiếng Nhật hiệu quả
        </Typography>

        <Grid container spacing={4}>
          {studyTipsPosts.map((post, index) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea onClick={() => handlePostClick(post.id)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {post.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(post.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          <Pagination count={3} color="primary" size="large" />
        </Box>
      </motion.div>
    </Container>
  );
};

export default StudyTipsPage;
