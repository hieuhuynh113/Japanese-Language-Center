import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const news = [
  {
    id: 1,
    title: 'Khai giảng lớp N3 tháng 12/2023',
    category: 'Thông báo',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: '2023-11-25',
    excerpt:
      'Trung tâm thông báo khai giảng lớp N3 mới với nhiều ưu đãi đặc biệt cho học viên đăng ký sớm.',
  },
  {
    id: 2,
    title: 'Hội thảo du học Nhật Bản 2024',
    category: 'Sự kiện',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: '2023-11-20',
    excerpt:
      'Tham gia hội thảo để tìm hiểu về cơ hội du học Nhật Bản và các suất học bổng năm 2024.',
  },
  {
    id: 3,
    title: 'Kinh nghiệm thi JLPT N2',
    category: 'Chia sẻ',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: '2023-11-15',
    excerpt:
      'Tổng hợp kinh nghiệm và bí quyết chinh phục kỳ thi JLPT N2 từ các học viên xuất sắc.',
  },
];

const NewsSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
          }}
        >
          <Typography variant="h3" component="h2">
            Tin tức & Sự kiện
          </Typography>
          <Button
            component={Link}
            to="/news"
            variant="outlined"
            color="primary"
          >
            Xem tất cả
          </Button>
        </Box>
        <Grid container spacing={4}>
          {news.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={item.category}
                      color={
                        item.category === 'Thông báo'
                          ? 'primary'
                          : item.category === 'Sự kiện'
                          ? 'secondary'
                          : 'default'
                      }
                      size="small"
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component={Link}
                    to={`/news/${item.id}`}
                    sx={{
                      textDecoration: 'none',
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: 'text.secondary',
                    }}
                  >
                    <CalendarTodayIcon sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body2">
                      {new Date(item.date).toLocaleDateString('vi-VN')}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.excerpt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
