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
    description: '3 tháng (156 giờ)',
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Quy Mô Lớp Học',
    description: '10-15 học viên/lớp',
    icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Giáo Trình',
    description: 'Minna no Nihongo N5',
    icon: <MenuBookIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const syllabus = [
  {
    title: 'Chữ Viết',
    content: 'Hiragana, Katakana, 100 Kanji cơ bản',
  },
  {
    title: 'Ngữ Pháp',
    content: 'Cấu trúc câu cơ bản, thì hiện tại và quá khứ, các trợ từ cơ bản',
  },
  {
    title: 'Từ Vựng',
    content: '800 từ vựng thông dụng trong cuộc sống hàng ngày',
  },
  {
    title: 'Kỹ Năng',
    content: 'Giao tiếp cơ bản, tự giới thiệu, mua sắm, đặt phòng',
  },
];

interface N5CoursePageProps {
  type?: 'online' | 'offline';
}

const N5CoursePage: React.FC<N5CoursePageProps> = ({ type = 'offline' }) => {
  const navigate = useNavigate();

  const courseTitle = `Khóa học N5 - ${type === 'online' ? 'Online' : 'Offline'}`;
  const courseDescription = type === 'online' 
    ? 'Khóa học JLPT N5 online linh hoạt về thời gian, phù hợp cho người đi làm hoặc sinh viên bận rộn.'
    : 'Khóa học JLPT N5 offline dành cho người mới bắt đầu, giúp bạn xây dựng nền tảng vững chắc với tiếng Nhật.';

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
            src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3"
            alt="N5 Course"
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
            Sẵn sàng bắt đầu hành trình?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Đăng ký ngay để nhận ưu đãi đặc biệt cho khóa học N5
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

export default N5CoursePage;
