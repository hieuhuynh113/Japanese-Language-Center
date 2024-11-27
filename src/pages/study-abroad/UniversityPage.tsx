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

const universities = [
  {
    name: 'Waseda University',
    location: 'Tokyo',
    ranking: '#1 Private University in Japan',
    programs: [
      'Khoa học máy tính',
      'Kinh tế học',
      'Quan hệ quốc tế',
      'Kỹ thuật',
    ],
    features: [
      'Học phí: ¥1,500,000/năm',
      'Học bổng MEXT',
      'Ký túc xá quốc tế',
      'Cơ hội nghiên cứu',
    ],
  },
  {
    name: 'Osaka University',
    location: 'Osaka',
    ranking: 'Top 5 National Universities',
    programs: [
      'Y học',
      'Công nghệ sinh học',
      'Khoa học vật liệu',
      'Kinh doanh quốc tế',
    ],
    features: [
      'Học phí: ¥1,200,000/năm',
      'Phòng thí nghiệm hiện đại',
      'Đối tác doanh nghiệp',
      'Hỗ trợ việc làm',
    ],
  },
  {
    name: 'Kyushu University',
    location: 'Fukuoka',
    ranking: 'Top 10 National Universities',
    programs: [
      'Nông nghiệp',
      'Môi trường',
      'Công nghệ thông tin',
      'Thiết kế',
    ],
    features: [
      'Học phí: ¥1,000,000/năm',
      'Campus xanh',
      'Chương trình trao đổi',
      'Nghiên cứu đổi mới',
    ],
  },
];

const requirements = [
  'Tốt nghiệp THPT',
  'JLPT N2 hoặc EJU',
  'GPA ≥ 3.0/4.0',
  'Khả năng tài chính',
];

const UniversityPage = () => {
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
              Du học Đại học
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Khám phá cơ hội học tập tại các trường đại học hàng đầu Nhật Bản
            </Typography>
          </Box>
        </motion.div>

        {/* Universities List */}
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Các trường đối tác
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {universities.map((university, index) => (
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
                      {university.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {university.location}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="secondary"
                      gutterBottom
                    >
                      {university.ranking}
                    </Typography>
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Ngành học:
                    </Typography>
                    <List>
                      {university.programs.map((program, idx) => (
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
                      {university.features.map((feature, idx) => (
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

export default UniversityPage;
