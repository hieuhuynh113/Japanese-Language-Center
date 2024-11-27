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
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import SupportIcon from '@mui/icons-material/Support';
import { motion } from 'framer-motion';

const studyPrograms = [
  {
    title: 'Học viện Nhật ngữ',
    icon: SchoolIcon,
    image: '/images/study-abroad/language-school.jpg',
    duration: '1-2 năm',
    description: 'Chương trình học tiếng Nhật chuyên sâu tại các học viện uy tín.',
    features: [
      'Lớp học quy mô nhỏ',
      'Giáo viên người Nhật giàu kinh nghiệm',
      'Hỗ trợ thi JLPT',
      'Hoạt động ngoại khóa phong phú',
    ],
    route: '/study-abroad/language-school',
  },
  {
    title: 'Cao đẳng - Đại học',
    icon: AccountBalanceIcon,
    image: '/images/study-abroad/university.jpg',
    duration: '2-4 năm',
    description: 'Du học tại các trường cao đẳng và đại học hàng đầu Nhật Bản.',
    features: [
      'Đa dạng ngành học',
      'Cơ sở vật chất hiện đại',
      'Cơ hội nghiên cứu',
      'Học bổng hấp dẫn',
    ],
    route: '/study-abroad/university',
  },
  {
    title: 'Trường Cao đẳng',
    icon: BusinessIcon,
    image: '/images/study-abroad/college.jpg',
    duration: '2-3 năm',
    description: 'Chương trình đào tạo thực tiễn tại các trường cao đẳng Nhật Bản.',
    features: [
      'Đào tạo kỹ năng nghề',
      'Thực hành nhiều',
      'Cơ hội việc làm cao',
      'Chi phí hợp lý',
    ],
    route: '/study-abroad/college',
  },
];

const whyJapan = [
  {
    title: 'Chất lượng giáo dục',
    icon: SchoolIcon,
    description: 'Hệ thống giáo dục tiên tiến với nhiều trường đại học top đầu châu Á.',
  },
  {
    title: 'Cơ hội việc làm',
    icon: WorkIcon,
    description: 'Nhiều cơ hội việc làm tại các công ty hàng đầu thế giới.',
  },
  {
    title: 'Học bổng đa dạng',
    icon: AttachMoneyIcon,
    description: 'Nhiều chương trình học bổng từ chính phủ và các tổ chức giáo dục.',
  },
  {
    title: 'Văn hóa độc đáo',
    icon: FlightTakeoffIcon,
    description: 'Trải nghiệm văn hóa phong phú và lối sống an toàn, hiện đại.',
  },
];

const additionalServices = [
  {
    title: 'Tư vấn Du học',
    icon: SupportIcon,
    description: 'Được tư vấn chi tiết về lộ trình du học phù hợp.',
    route: '/study-abroad/consulting',
  },
  {
    title: 'Học bổng',
    icon: AttachMoneyIcon,
    description: 'Thông tin về các chương trình học bổng du học Nhật Bản.',
    route: '/study-abroad/scholarships',
  },
  {
    title: 'Đối tác Trường học',
    icon: BusinessIcon,
    description: 'Danh sách các trường đối tác uy tín tại Nhật Bản.',
    route: '/study-abroad/partners',
  },
  {
    title: 'Kinh nghiệm Du học',
    icon: FlightTakeoffIcon,
    description: 'Chia sẻ kinh nghiệm từ cựu du học sinh.',
    route: '/study-abroad/experiences',
  },
];

const StudyAbroadPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Du học Nhật Bản
        </Typography>

        <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
          Khám phá cơ hội học tập và phát triển sự nghiệp tại đất nước mặt trời mọc
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {studyPrograms.map((program, index) => (
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
                    image={program.image}
                    alt={program.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <program.icon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                      <Typography variant="h5" component="h2">
                        {program.title}
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Thời gian: {program.duration}
                    </Typography>

                    <Typography paragraph color="text.secondary">
                      {program.description}
                    </Typography>

                    <List>
                      {program.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      component={RouterLink}
                      to={program.route}
                      variant="contained"
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

        <Paper elevation={3} sx={{ p: 4, mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Tại sao chọn du học Nhật Bản?
          </Typography>

          <Grid container spacing={4}>
            {whyJapan.map((reason, index) => (
              <Grid item xs={12} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box textAlign="center">
                    <reason.icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      {reason.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {reason.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Dịch vụ Hỗ trợ Du học
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {additionalServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <service.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h6" gutterBottom align="center">
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary" align="center" paragraph>
                      {service.description}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        component={RouterLink}
                        to={service.route}
                        variant="outlined"
                        color="primary"
                      >
                        Chi tiết
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Bạn muốn được tư vấn về du học Nhật Bản?
          </Typography>
          <Button
            component={RouterLink}
            to="/study-abroad/consulting"
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Đăng ký tư vấn ngay
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default StudyAbroadPage;
