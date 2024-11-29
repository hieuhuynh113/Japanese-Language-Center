import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Box,
  Pagination,
  Chip,
} from '@mui/material';
import {
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NewsFilter, { NewsFilters } from '../../components/NewsFilter';

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
  {
    id: 'study-3',
    title: 'Luyện nghe tiếng Nhật: Từ cơ bản đến nâng cao',
    date: '2024-01-15',
    image: 'https://www.kienminh.edu.vn/Upload/Editor/2021/12/10/2-8c70.png',
    excerpt: 'Hướng dẫn chi tiết cách luyện nghe tiếng Nhật hiệu quả từ level N5 đến N1.',
    tags: ['Luyện nghe', 'JLPT', 'Kỹ năng'],
    category: 'study-tips',
    video: 'https://youtu.be/L0E3O3xbLjM?si=PEFb30XZuJ6Fp0I3',
    content: `## 1. Chuẩn bị cơ bản
- Trang bị kiến thức ngữ pháp và từ vựng cơ bản
- Làm quen với âm và nhịp điệu tiếng Nhật
- Tập trung vào nghe hiểu nội dung chính

## 2. Nguồn tài liệu luyện nghe
### Cho người mới bắt đầu (N5-N4)
- NHK Easy News
- Japanese Pod 101
- Erin's Challenge
- Anime có phụ đề tiếng Nhật

### Cho trình độ trung cấp (N3)
- NHK News Web Easy
- Terrace House
- Podcast tiếng Nhật
- Tin tức NHK dành cho học sinh

### Cho trình độ cao cấp (N2-N1)
- NHK News
- TED Talks tiếng Nhật
- Phim, drama không phụ đề
- Radio tiếng Nhật

## 3. Phương pháp luyện nghe hiệu quả
### Shadowing
- Nghe và lặp lại ngay lập tức
- Tập trung vào ngữ điệu và phát âm
- Thực hành thường xuyên

### Dictation
- Nghe và viết lại nội dung
- Kiểm tra với script
- Phân tích lỗi sai

### Active Listening
- Đặt câu hỏi trước khi nghe
- Ghi chú ý chính
- Tóm tắt nội dung

## 4. Lịch trình luyện tập
### Hàng ngày
- 15 phút shadowing
- 30 phút nghe tin tức
- Xem 1 episode anime/drama

### Hàng tuần
- 2-3 giờ nghe đề thi JLPT
- Luyện dictation 2-3 lần
- Tham gia language exchange

## 5. Khắc phục khó khăn
### Vấn đề thường gặp
- Tốc độ nói quá nhanh
- Không nghe rõ từng từ
- Khó hiểu ngữ cảnh

### Giải pháp
- Bắt đầu với tốc độ chậm
- Tập trung vào từ khóa
- Học thêm về văn hóa Nhật

## Kết luận
Luyện nghe cần thói quen và kiên nhẫn. Hãy duy trì thói quen học đều đặn và tăng dần độ khó để đạt hiệu quả tốt nhất.`,
  },
  {
    id: 'study-4',
    title: 'Chinh phục kỳ thi JLPT N2 trong 6 tháng',
    date: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
    excerpt: 'Lộ trình và phương pháp học chi tiết giúp bạn đạt được chứng chỉ JLPT N2 trong vòng 6 tháng.',
    tags: ['JLPT', 'N2', 'Lộ trình'],
    category: 'study-tips',
    video: 'https://youtu.be/_D4h3TrU3Rg?si=RaYseDrC19dStYlE',
    content: `## Lộ trình 6 tháng
### Tháng 1-2: Nền tảng
- Ôn tập kiến thức N3
- Học 300 Kanji mới
- 500 từ vựng N2
- Ngữ pháp cơ bản N2

### Tháng 3-4: Tăng tốc
- 300 Kanji tiếp theo
- 1000 từ vựng N2
- Ngữ pháp nâng cao
- Luyện đề

### Tháng 5-6: Hoàn thiện
- Ôn tập toàn bộ
- Mock test hàng tuần
- Điểm yếu bổ sung
- Kỹ thuật làm bài thi

## Tài liệu học tập
### Sách giáo trình
- Shinkanzen Master N2
- Try! N2
- Somatome N2
- Kanzen Master N2

### Tài liệu online
- Nihongo So-matome app
- Japanese Test 4 You
- Bunpro
- Anki decks

## Phương pháp học
### Từ vựng & Kanji
- Học theo chủ đề
- Flashcards hàng ngày
- Đọc báo NHK
- Viết nhật ký

### Ngữ pháp
- Học mẫu câu
- Làm bài tập
- Luyện nói
- Viết văn

### Đọc hiểu
- Đọc báo hàng ngày
- Đọc truyện ngắn
- Tóm tắt nội dung
- Timing practice

### Nghe hiểu
- Shadowing
- Podcast
- News
- Drama

## Lịch học mẫu
### Thứ 2-6
- 6:00-7:00: Từ vựng mới
- 12:00-13:00: Ngữ pháp
- 19:00-21:00: Luyện đề

### Thứ 7-CN
- Ôn tập tổng hợp
- Mock test
- Sửa lỗi sai
- Kế hoạch tuần mới

## Tips quan trọng
### Quản lý thời gian
- Lập thời khóa biểu
- Tracking tiến độ
- Điều chỉnh kế hoạch
- Nghỉ ngơi hợp lý

### Phương pháp ôn tập
- Spaced repetition
- Active recall
- Mock tests
- Group study

## Kết luận
Chinh phục N2 trong 6 tháng là thách thức lớn nhưng hoàn toàn khả thi với kế hoạch và nỗ lực đúng đắn.`,
  },
  {
    id: 'study-5',
    title: 'Cải thiện phát âm tiếng Nhật như người bản xứ',
    date: '2024-01-25',
    image: 'https://duhoc.thanhgiang.com.vn/sites/default/files/39_1.jpg',
    excerpt: 'Hướng dẫn chi tiết cách phát âm chuẩn tiếng Nhật, từ nguyên âm cơ bản đến ngữ điệu tự nhiên.',
    tags: ['Phát âm', 'Giao tiếp', 'Kỹ năng'],
    category: 'study-tips',
    video: 'https://youtu.be/HGW9VgKuchw?si=O7PDEw2YcSlZFXUC',
    content: `## 1. Nguyên âm cơ bản
### Năm nguyên âm
- あ (a): Mở miệng tự nhiên
- い (i): Nở nụ cười nhẹ
- う (u): Môi tròn nhỏ
- え (e): Miệng hơi rộng
- お (o): Môi tròn lớn

### Luyện tập
- Phát âm riêng từng âm
- Kết hợp các nguyên âm
- Ghi âm và so sánh
- Sửa lỗi thường gặp

## 2. Phụ âm đặc biệt
### Âm đôi
- きょ (kyo)
- しゃ (sha)
- ちゅ (chu)
- にょ (nyo)

### Âm kéo dài
- おばあさん (obāsan)
- せんせい (sensei)
- とうきょう (Tōkyō)

### Âm促音 (っ)
- がっこう (gakkou)
- きって (kitte)
- ざっし (zasshi)

## 3. Accent và ngữ điệu
### Quy tắc accent
- Flat pattern
- High-low pattern
- Low-high pattern
- Pitch accent

### Thực hành
- Shadowing
- Recording
- Feedback từ native
- Correction exercises

## 4. Phương pháp luyện tập
### Cơ bản
- Nghe và bắt chước
- Ghi âm so sánh
- Lặp lại nhiều lần
- Tập trước gương

### Nâng cao
- Mimicry
- Karaoke tiếng Nhật
- Role-play
- Speech recording

## 5. Tài liệu học tập
### Online
- YouTube channels
- Pronunciation apps
- Online tutors
- Speech recognition tools

### Offline
- Sách phát âm
- CD/DVD học tập
- Language exchange
- Lớp học phát âm

## 6. Lỗi thường gặp
### Phát âm sai
- R và L
- つ và す
- ふ và ほ
- ざ và じゃ

### Ngữ điệu
- Accent sai
- Ngữ điệu đều
- Tốc độ không đều
- Nghỉ sai chỗ

## Kết luận
Phát âm chuẩn đòi hỏi thói quen và kiên nhẫn. Hãy thực hành đều đặn và tìm kiếm feedback từ người bản xứ.`,
  },
  {
    id: 'study-6',
    title: 'Học tiếng Nhật qua Manga và Anime',
    date: '2024-01-30',
    image: 'https://file.hstatic.net/1000302121/article/bia-min_4e59c28047b04733a73808a5950f4e44.png',
    excerpt: 'Cách tận dụng manga và anime để học tiếng Nhật hiệu quả, từ cơ bản đến nâng cao.',
    tags: ['Manga', 'Anime', 'Giải trí'],
    category: 'study-tips',
    video: 'https://youtu.be/5nNaSSBvpho?si=8dWO_JYQ-Ww81Xkt',
    content: `## 1. Lợi ích học qua manga/anime
### Ưu điểm
- Học ngôn ngữ tự nhiên
- Tiếp xúc văn hóa
- Duy trì động lực
- Học mọi lúc mọi nơi

### Nhược điểm
- Ngôn ngữ không formal
- Có thể có slang
- Cần lọc nội dung
- Thời gian học lâu

## 2. Chọn tài liệu phù hợp
### Cho người mới
- Doraemon
- Chi's Sweet Home
- Yotsuba&!
- Studio Ghibli films

### Trình độ trung cấp
- Death Note
- One Piece
- Naruto
- Detective Conan

### Trình độ cao cấp
- Monster
- Ghost in the Shell
- Perfect Blue
- Seinen manga

## 3. Phương pháp học
### Với Manga
- Đọc furigana
- Tra từ điển
- Ghi chép từ mới
- Luyện đọc kanji

### Với Anime
- Xem có phụ đề Nhật
- Shadowing
- Ghi âm practice
- Note ngữ pháp mới

## 4. Công cụ hỗ trợ
### Từ điển
- Jisho
- Akebi
- Google Translate
- Kanji Study

### Ứng dụng đọc manga
- Bilingual Manga
- Easy Japanese
- Manga Reader
- Kindle

## 5. Lịch trình học tập
### Hàng ngày
- Đọc 1 chapter manga
- Xem 1 tập anime
- Review từ vựng
- Practice speaking

### Hàng tuần
- Tổng kết từ mới
- Luyện ngữ pháp
- Test từ vựng
- Group discussion

## 6. Tips học hiệu quả
### Ghi chép
- Vocabulary notebook
- Grammar points
- Cultural notes
- Common phrases

### Thực hành
- Role-play scenes
- Write summaries
- Create dialogues
- Share with friends

## 7. Tránh các sai lầm
### Không nên
- Chỉ xem không học
- Bỏ qua ngữ pháp
- Học slang quá nhiều
- Không ghi chép

### Nên làm
- Balance học tập
- Verify với native
- Học có hệ thống
- Thực hành đều đặn

## Kết luận
Manga và anime là công cụ học tập thú vị và hiệu quả nếu biết cách sử dụng đúng và kết hợp với các phương pháp học truyền thống.`,
  },
];

const StudyTipsPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [filters, setFilters] = React.useState<NewsFilters>({
    search: '',
    category: '',
    selectedTags: [],
    dateRange: {
      start: '',
      end: '',
    },
  });
  const [bookmarkedPosts, setBookmarkedPosts] = React.useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedStudyTipsPosts');
    return saved ? JSON.parse(saved) : [];
  });

  const postsPerPage = 2;

  // Extract unique categories and tags
  const categories = Array.from(new Set(studyTipsPosts.map((item) => item.category))).filter((category): category is string => category !== undefined);
  const tags = Array.from(new Set(studyTipsPosts.flatMap((item) => item.tags)));

  // Apply filters to posts
  const filteredPosts = studyTipsPosts.filter((item) => {
    const matchesSearch = !filters.search || 
      item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory = !filters.category || item.category === filters.category;

    const matchesTags = filters.selectedTags.length === 0 ||
      filters.selectedTags.every(tag => item.tags.includes(tag));

    const itemDate = new Date(item.date);
    const matchesDateRange = 
      (!filters.dateRange.start || new Date(filters.dateRange.start) <= itemDate) &&
      (!filters.dateRange.end || new Date(filters.dateRange.end) >= itemDate);

    return matchesSearch && matchesCategory && matchesTags && matchesDateRange;
  });

  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (newFilters: NewsFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => {
      const newBookmarks = prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId];
      localStorage.setItem('bookmarkedStudyTipsPosts', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const handleShare = async (post: Post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.origin + `/news/study-tips/${post.id}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Góc học tập
      </Typography>

      <NewsFilter
        categories={categories}
        tags={tags}
        onFilterChange={handleFilterChange}
      />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {currentPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <Grid container>
                  <Grid item xs={12} md={4} 
                    onClick={() => navigate(`/news/study-tips/${post.id}`)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={post.image}
                      alt={post.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography 
                          variant="h6" 
                          gutterBottom 
                          onClick={() => navigate(`/news/study-tips/${post.id}`)}
                          sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        >
                          {post.title}
                        </Typography>
                        <Box>
                          <Tooltip title="Chia sẻ">
                            <IconButton onClick={() => handleShare(post)}>
                              <ShareIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={bookmarkedPosts.includes(post.id) ? "Bỏ lưu" : "Lưu"}>
                            <IconButton onClick={() => toggleBookmark(post.id)}>
                              {bookmarkedPosts.includes(post.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {new Date(post.date).toLocaleDateString('vi-VN')}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {post.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default StudyTipsPage;
