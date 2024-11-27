import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LaptopIcon from '@mui/icons-material/Laptop';
import VideocamIcon from '@mui/icons-material/Videocam';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const benefits = [
  {
    title: 'Lớp Học Trực Tuyến',
    description: 'Học mọi lúc mọi nơi thông qua nền tảng học trực tuyến hiện đại',
    icon: <LaptopIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Video Bài Giảng HD',
    description: 'Truy cập không giới hạn vào kho video bài giảng chất lượng cao',
    icon: <VideocamIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Tương Tác Trực Tiếp',
    description: 'Trao đổi trực tiếp với giáo viên và bạn học qua chat và video call',
    icon: <ChatIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Bài Tập & Kiểm Tra',
    description: 'Hệ thống bài tập và kiểm tra trực tuyến với phản hồi tức thì',
    icon: <AssignmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const features = [
  'Học linh hoạt 24/7',
  'Giáo trình chuẩn JLPT',
  'Tài liệu học tập số hóa',
  'Bài tập tương tác',
  'Phòng học ảo',
  'Hỗ trợ kỹ thuật 24/7',
  'Theo dõi tiến độ học tập',
  'Chứng chỉ hoàn thành khóa học',
];

const OnlineCoursePage = () => {
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
            Khóa Học Online
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Học tiếng Nhật mọi lúc, mọi nơi với phương pháp hiện đại
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
            src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3"
            alt="Online Learning"
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
            Tính Năng Nổi Bật
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
            Bắt đầu hành trình học tiếng Nhật online
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Đăng ký ngay để trải nghiệm phương pháp học hiện đại và hiệu quả
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
            Đăng Ký Học Thử Miễn Phí
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OnlineCoursePage;
