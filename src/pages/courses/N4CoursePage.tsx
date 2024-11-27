import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface CourseFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: CourseFeature[] = [
  {
    title: 'Thời Gian Học',
    description: '4 tháng (180 giờ)',
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Quy Mô Lớp Học',
    description: '10-15 học viên/lớp',
    icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Giáo Trình',
    description: 'Minna no Nihongo N4',
    icon: <MenuBookIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const syllabus = [
  {
    title: 'Chữ Viết',
    content: '150 Kanji mới, tổng hợp và ứng dụng',
  },
  {
    title: 'Ngữ Pháp',
    content: 'Mẫu câu phức tạp hơn, thể điều kiện, thể bị động, từ nối',
  },
  {
    title: 'Từ Vựng',
    content: '1500 từ vựng cho công việc và học tập',
  },
  {
    title: 'Kỹ Năng',
    content: 'Giao tiếp trong công việc, đọc hiểu văn bản đơn giản',
  },
];

interface N4CoursePageProps {
  type?: 'online' | 'offline';
}

const N4CoursePage: React.FC<N4CoursePageProps> = ({ type = 'offline' }) => {
  const navigate = useNavigate();

  const courseTitle = `Khóa học N4 - ${type === 'online' ? 'Online' : 'Offline'}`;
  const courseDescription = type === 'online' 
    ? 'Khóa học JLPT N4 online linh hoạt về thời gian, giúp bạn nâng cao khả năng tiếng Nhật một cách hiệu quả.'
    : 'Khóa học JLPT N4 offline giúp bạn phát triển kỹ năng tiếng Nhật toàn diện với sự hướng dẫn trực tiếp từ giáo viên.';

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
            {courseTitle}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            {courseDescription}
          </Typography>
        </motion.div>

        {/* Course Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-4.0.3"
            alt="N4 Course"
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 2,
              mb: 6,
            }}
          />
        </motion.div>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Syllabus Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Nội Dung Khóa Học
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {syllabus.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body1">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

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
            Sẵn sàng nâng cao trình độ?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Đăng ký ngay để nhận ưu đãi đặc biệt cho khóa học N4
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
            Đăng Ký Ngay
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default N4CoursePage;
