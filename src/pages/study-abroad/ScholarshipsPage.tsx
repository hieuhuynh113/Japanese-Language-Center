import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import {
  School as SchoolIcon,
  AttachMoney as MoneyIcon,
  DateRange as DateIcon,
  CheckCircle as CheckIcon,
  Assignment as AssignmentIcon,
  EmojiEvents as EmojiEventsIcon,
  StarBorder as StarIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const scholarships = [
  {
    id: 'mext',
    icon: SchoolIcon,
    title: 'Học Bổng Chính Phủ MEXT',
    provider: 'Bộ Giáo dục Nhật Bản (MEXT)',
    description: 'Học bổng toàn phần dành cho sinh viên quốc tế có thành tích học tập xuất sắc.',
    value: '¥143,000/tháng + miễn học phí',
    duration: '5 năm (bao gồm 1 năm học tiếng Nhật)',
    color: '#2196F3',
    benefits: [
      'Học phí được miễn hoàn toàn',
      'Trợ cấp sinh hoạt hàng tháng',
      'Vé máy bay khứ hồi',
      'Hỗ trợ nhà ở',
    ],
    requirements: [
      'Dưới 35 tuổi',
      'GPA trên 2.3/3.0',
      'JLPT N2 trở lên',
      'Sức khỏe tốt',
    ],
    deadline: 'Tháng 5 hàng năm',
  },
  {
    id: 'jasso',
    icon: MoneyIcon,
    title: 'Học Bổng JASSO',
    provider: 'Tổ chức Hỗ trợ Sinh viên Nhật Bản',
    description: 'Học bổng hỗ trợ sinh viên quốc tế có hoàn cảnh khó khăn.',
    value: '¥80,000/tháng',
    duration: '1 năm (có thể gia hạn)',
    color: '#4CAF50',
    benefits: [
      'Trợ cấp sinh hoạt hàng tháng',
      'Cơ hội gia hạn học bổng',
      'Hỗ trợ tìm nhà ở',
      'Tham gia các hoạt động văn hóa',
    ],
    requirements: [
      'GPA trên 2.3/3.0',
      'JLPT N3 trở lên',
      'Khó khăn tài chính',
      'Chưa nhận học bổng khác',
    ],
    deadline: 'Tháng 3 hàng năm',
  },
  {
    id: 'university',
    icon: EmojiEventsIcon,
    title: 'Học Bổng Đại Học',
    provider: 'Các trường đại học Nhật Bản',
    description: 'Học bổng dành cho sinh viên có thành tích học tập và hoạt động ngoại khóa xuất sắc.',
    value: '30-100% học phí',
    duration: 'Theo năm học',
    color: '#FF9800',
    benefits: [
      'Giảm học phí từ 30-100%',
      'Cơ hội thực tập tại doanh nghiệp',
      'Tham gia câu lạc bộ sinh viên',
      'Hỗ trợ học thuật',
    ],
    requirements: [
      'GPA cao',
      'JLPT N2 trở lên',
      'Thành tích nổi bật',
      'Hoạt động ngoại khóa',
    ],
    deadline: 'Theo từng trường',
  },
  {
    id: 'organization',
    icon: StarIcon,
    title: 'Học Bổng Tổ Chức',
    provider: 'Các tổ chức tư nhân Nhật Bản',
    description: 'Học bổng từ các tổ chức tư nhân dành cho sinh viên có tiềm năng lãnh đạo.',
    value: '¥100,000/tháng',
    duration: '2-3 năm',
    color: '#E91E63',
    benefits: [
      'Trợ cấp sinh hoạt hàng tháng',
      'Cơ hội thực tập',
      'Tham gia hội thảo lãnh đạo',
      'Kết nối doanh nghiệp',
    ],
    requirements: [
      'GPA trên 3.0/4.0',
      'JLPT N2 trở lên',
      'Kinh nghiệm lãnh đạo',
      'Kỹ năng giao tiếp tốt',
    ],
    deadline: 'Quanh năm',
  },
];

const ScholarshipsPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Học bổng du học Nhật Bản
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
          >
            Khám phá các cơ hội học bổng giá trị để thực hiện ước mơ du học của bạn
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {scholarships.map((scholarship, index) => (
            <Grid item xs={12} key={scholarship.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <Box
                            sx={{
                              bgcolor: `${scholarship.color}15`,
                              p: 1.5,
                              borderRadius: 2,
                              mr: 2,
                            }}
                          >
                            <scholarship.icon sx={{ fontSize: 32, color: scholarship.color }} />
                          </Box>
                          <Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                              {scholarship.title}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ color: scholarship.color, mb: 1 }}
                            >
                              {scholarship.provider}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {scholarship.description}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <MoneyIcon sx={{ color: scholarship.color, mr: 1 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              {scholarship.value}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <DateIcon sx={{ color: scholarship.color, mr: 1 }} />
                            <Typography variant="subtitle2" color="text.secondary">
                              {scholarship.duration}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: scholarship.color }}>
                          Quyền lợi
                        </Typography>
                        <List dense>
                          {scholarship.benefits.map((benefit, idx) => (
                            <ListItem key={idx} disableGutters>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckIcon sx={{ color: scholarship.color }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={benefit}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: scholarship.color }}>
                          Yêu cầu
                        </Typography>
                        <List dense>
                          {scholarship.requirements.map((requirement, idx) => (
                            <ListItem key={idx} disableGutters>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckIcon sx={{ color: scholarship.color }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={requirement}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        mt: 3,
                        pt: 3,
                        borderTop: 1,
                        borderColor: 'divider',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Chip
                        label={`Hạn nộp: ${scholarship.deadline}`}
                        sx={{
                          bgcolor: `${scholarship.color}15`,
                          color: scholarship.color,
                          fontWeight: 500,
                        }}
                      />
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/study-abroad/scholarships/${scholarship.id}`)}
                        sx={{
                          px: 4,
                          bgcolor: scholarship.color,
                          '&:hover': {
                            bgcolor: `${scholarship.color}dd`,
                            boxShadow: theme.shadows[8],
                          },
                        }}
                      >
                        Tìm hiểu thêm
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: 4,
            background: 'linear-gradient(45deg, #f3f9ff 30%, #e6f3ff 90%)',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Bạn cần tư vấn về học bổng?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Đội ngũ tư vấn của chúng tôi sẽ giúp bạn tìm kiếm và đăng ký học bổng phù hợp nhất
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              px: 6,
              py: 1.5,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2 30%, #1EA7D2 90%)',
              },
            }}
          >
            Liên hệ tư vấn
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ScholarshipsPage;
