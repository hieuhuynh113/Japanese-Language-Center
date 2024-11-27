import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const colleges = [
  {
    name: 'Tokyo Technical College',
    location: 'Tokyo',
    programs: [
      'Công nghệ thông tin',
      'Thiết kế đồ họa',
      'Kỹ thuật ô tô',
      'Quản trị kinh doanh',
    ],
    features: [
      'Thời gian học: 2-3 năm',
      'Học phí: ¥1,200,000/năm',
      'Tỷ lệ có việc làm: 95%',
      'Hỗ trợ thực tập',
    ],
  },
  {
    name: 'Osaka Design College',
    location: 'Osaka',
    programs: [
      'Thiết kế thời trang',
      'Thiết kế nội thất',
      'Animation',
      'Game Design',
    ],
    features: [
      'Thời gian học: 2 năm',
      'Học phí: ¥1,100,000/năm',
      'Tỷ lệ có việc làm: 92%',
      'Studio hiện đại',
    ],
  },
  {
    name: 'Fukuoka Business College',
    location: 'Fukuoka',
    programs: [
      'Kế toán',
      'Marketing',
      'Du lịch & Khách sạn',
      'Thương mại quốc tế',
    ],
    features: [
      'Thời gian học: 2 năm',
      'Học phí: ¥1,000,000/năm',
      'Tỷ lệ có việc làm: 90%',
      'Đối tác doanh nghiệp lớn',
    ],
  },
];

const requirements = [
  'Tốt nghiệp THPT',
  'JLPT N3 hoặc tương đương',
  'Độ tuổi: 18-30',
  'Khả năng tài chính đảm bảo',
];

const CollegePage = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Du học Cao đẳng
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Học tập và phát triển kỹ năng chuyên môn tại Nhật Bản
            </Typography>
          </Box>
        </motion.div>

        {/* Colleges List */}
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Các trường đối tác
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {colleges.map((college, index) => (
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
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {college.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {college.location}
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Ngành học:
                    </Typography>
                    <List>
                      {college.programs.map((program, idx) => (
                        <ListItem key={idx} dense>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={program} />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Đặc điểm:
                    </Typography>
                    <List>
                      {college.features.map((feature, idx) => (
                        <ListItem key={idx} dense>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Tìm hiểu thêm
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Requirements Section */}
        <Paper sx={{ p: 4, mb: 8, bgcolor: 'primary.light' }}>
          <Typography variant="h4" gutterBottom>
            Điều kiện đăng ký
          </Typography>
          <Grid container spacing={2}>
            {requirements.map((req, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <SchoolIcon color="primary" />
                  <Typography variant="body1">{req}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Bắt đầu hành trình của bạn
          </Typography>
          <Typography variant="body1" paragraph>
            Đăng ký tư vấn miễn phí để nhận thông tin chi tiết về các trường và hỗ trợ làm hồ sơ
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Đăng ký tư vấn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CollegePage;
