import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const benefits = [
  {
    title: 'Lớp Học Trực Tiếp',
    description: 'Tương tác trực tiếp với giáo viên và bạn học trong môi trường năng động',
    icon: <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Giáo Viên Chuyên Môn',
    description: 'Đội ngũ giảng viên giàu kinh nghiệm, tận tâm hướng dẫn',
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Giáo Trình Chuẩn',
    description: 'Tài liệu học tập được biên soạn kỹ lưỡng theo chuẩn JLPT',
    icon: <AutoStoriesIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Chứng Chỉ Quốc Tế',
    description: 'Chuẩn bị tốt nhất cho kỳ thi JLPT với tỷ lệ đỗ cao',
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const features = [
  'Lớp học quy mô nhỏ (8-12 học viên)',
  'Thực hành giao tiếp thường xuyên',
  'Môi trường học tập thân thiện',
  'Tài liệu học tập đầy đủ',
  'Hoạt động ngoại khóa đa dạng',
  'Thi thử JLPT định kỳ',
  'Tư vấn học tập cá nhân',
  'Không gian học tập hiện đại',
];

const OfflineCoursePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            Khóa Học Offline
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Trải nghiệm học tiếng Nhật chất lượng cao trong môi trường chuyên nghiệp
          </Typography>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3"
            alt="Offline Learning"
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 2,
              mb: 6,
            }}
          />
        </motion.div>

        {/* Benefits Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Đặc Điểm Nổi Bật
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Schedule Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Lịch Học Linh Hoạt
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Lớp Sáng
                  </Typography>
                  <Typography variant="body1">
                    Thứ 2 - 4 - 6: 8:00 - 10:00
                  </Typography>
                  <Typography variant="body1">
                    Thứ 3 - 5 - 7: 8:00 - 10:00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Lớp Tối
                  </Typography>
                  <Typography variant="body1">
                    Thứ 2 - 4 - 6: 18:00 - 20:00
                  </Typography>
                  <Typography variant="body1">
                    Thứ 3 - 5 - 7: 18:00 - 20:00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            bgcolor: 'primary.light',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Sẵn sàng tham gia khóa học?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              px: 4,
              py: 1.5,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Đăng Ký Tư Vấn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OfflineCoursePage;
