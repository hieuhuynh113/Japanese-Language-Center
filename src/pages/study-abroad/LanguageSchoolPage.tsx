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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const schools = [
  {
    name: 'Tokyo Japanese Language School',
    image: '/images/schools/tokyo-japanese.jpg',
    location: 'Tokyo',
    description: 'Một trong những trường dạy tiếng Nhật hàng đầu tại Tokyo, với lịch sử hơn 30 năm đào tạo.',
    features: [
      'Thành lập năm 1988',
      'Số lượng học viên: 800+',
      'Tỷ lệ đỗ JLPT N2: 90%',
      'Hỗ trợ việc làm thêm',
      'Ký túc xá hiện đại',
    ],
    courses: ['Khóa dài hạn', 'Khóa ngắn hạn', 'Khóa luyện thi JLPT'],
    tuition: '¥700,000/năm',
    rating: 4.8,
  },
  {
    name: 'Osaka International School',
    image: '/images/schools/osaka-international.jpg',
    location: 'Osaka',
    description: 'Trường ngôn ngữ quốc tế với môi trường học tập đa văn hóa và cơ sở vật chất hiện đại.',
    features: [
      'Thành lập năm 1995',
      'Số lượng học viên: 600+',
      'Tỷ lệ đỗ JLPT N2: 85%',
      'Chương trình thực tập',
      'Hỗ trợ nhà ở',
    ],
    courses: ['Khóa học cơ bản', 'Khóa Business Japanese', 'Khóa chuẩn bị du học'],
    tuition: '¥650,000/năm',
    rating: 4.6,
  },
  {
    name: 'Fukuoka Language Academy',
    image: '/images/schools/fukuoka-academy.jpg',
    location: 'Fukuoka',
    description: 'Trường ngôn ngữ với chi phí học tập hợp lý và môi trường sống thân thiện.',
    features: [
      'Thành lập năm 2000',
      'Số lượng học viên: 400+',
      'Tỷ lệ đỗ JLPT N2: 88%',
      'Chi phí sinh hoạt thấp',
      'Hỗ trợ tìm việc',
    ],
    courses: ['Khóa tiếng Nhật tổng hợp', 'Khóa học văn hóa', 'Khóa luyện thi EJU'],
    tuition: '¥600,000/năm',
    rating: 4.7,
  },
];

const LanguageSchoolPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Trường Nhật ngữ tại Nhật Bản
        </Typography>

        <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
          Khám phá các trường Nhật ngữ uy tín với chất lượng đào tạo hàng đầu
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {schools.map((school, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={school.image}
                    alt={school.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
                        {school.name}
                      </Typography>
                      <Rating value={school.rating} precision={0.1} readOnly size="small" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {school.location}
                      </Typography>
                    </Box>

                    <Typography paragraph color="text.secondary">
                      {school.description}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                      Đặc điểm nổi bật:
                    </Typography>
                    <List>
                      {school.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                      Các khóa học:
                    </Typography>
                    <List>
                      {school.courses.map((course, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <SchoolIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={course} />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h6" color="primary">
                        Học phí: {school.tuition}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={3} sx={{ p: 4, mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Tại sao chọn du học tại Nhật Bản?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Chất lượng đào tạo
                </Typography>
                <Typography>
                  Hệ thống giáo dục tiên tiến và chất lượng cao
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Môi trường quốc tế
                </Typography>
                <Typography>
                  Giao lưu với sinh viên từ nhiều quốc gia
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Văn hóa độc đáo
                </Typography>
                <Typography>
                  Trải nghiệm văn hóa Nhật Bản phong phú
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Cơ hội việc làm
                </Typography>
                <Typography>
                  Nhiều cơ hội việc làm sau khi tốt nghiệp
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Bạn muốn tìm hiểu thêm về các trường Nhật ngữ?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/study-abroad/consulting"
            sx={{ mt: 2 }}
          >
            Đăng ký tư vấn ngay
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default LanguageSchoolPage;
