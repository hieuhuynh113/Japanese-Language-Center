import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  useTheme,
} from '@mui/material';
import {
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Flight as FlightIcon,
  AccountBalance as AccountBalanceIcon,
  Work as WorkIcon,
  Check as CheckIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const consultingServices = [
  {
    icon: SchoolIcon,
    title: 'Tư vấn chọn trường',
    description: 'Hỗ trợ lựa chọn trường học phù hợp với năng lực và nguyện vọng của học viên.',
    details: [
      'Phân tích hồ sơ học tập',
      'Đề xuất trường phù hợp',
      'Thông tin chi tiết về trường',
      'So sánh các lựa chọn',
    ],
    color: '#2196F3',
  },
  {
    icon: AssignmentIcon,
    title: 'Hồ sơ du học',
    description: 'Hướng dẫn chuẩn bị và hoàn thiện hồ sơ du học đầy đủ.',
    details: [
      'Chuẩn bị hồ sơ học tập',
      'Viết bài luận cá nhân',
      'Dịch thuật công chứng',
      'Kiểm tra và hoàn thiện',
    ],
    color: '#FF9800',
  },
  {
    icon: FlightIcon,
    title: 'Thủ tục visa',
    description: 'Hỗ trợ toàn bộ quy trình xin visa du học Nhật Bản.',
    details: [
      'Chuẩn bị hồ sơ visa',
      'Hướng dẫn phỏng vấn',
      'Theo dõi tình trạng',
      'Giải quyết vấn đề phát sinh',
    ],
    color: '#4CAF50',
  },
  {
    icon: AccountBalanceIcon,
    title: 'Tư vấn tài chính',
    description: 'Lập kế hoạch tài chính và tìm kiếm học bổng.',
    details: [
      'Dự toán chi phí',
      'Tư vấn học bổng',
      'Kế hoạch tài chính',
      'Hướng dẫn chuyển tiền',
    ],
    color: '#E91E63',
  },
  {
    icon: WorkIcon,
    title: 'Hỗ trợ sinh hoạt',
    description: 'Hướng dẫn các vấn đề sinh hoạt tại Nhật Bản.',
    details: [
      'Tìm nhà ở',
      'Bảo hiểm y tế',
      'Việc làm thêm',
      'Đời sống sinh hoạt',
    ],
    color: '#9C27B0',
  },
];

const ConsultingPage = () => {
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
            Tư vấn du học Nhật Bản
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
          >
            Đồng hành cùng bạn trong hành trình du học Nhật Bản với đội ngũ tư vấn viên chuyên nghiệp
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {consultingServices.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          bgcolor: `${service.color}15`,
                          p: 1.5,
                          borderRadius: 2,
                          mr: 2,
                        }}
                      >
                        <service.icon sx={{ fontSize: 32, color: service.color }} />
                      </Box>
                      <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, minHeight: 48 }}
                    >
                      {service.description}
                    </Typography>
                    <List>
                      {service.details.map((detail, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckIcon sx={{ color: service.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.primary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 8,
            background: 'linear-gradient(45deg, #f3f9ff 30%, #e6f3ff 90%)',
            borderRadius: 4,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Đăng ký tư vấn
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Điền thông tin của bạn để nhận được tư vấn miễn phí từ đội ngũ chuyên gia
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Họ và tên"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Số điện thoại"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nội dung cần tư vấn"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1976D2 30%, #1EA7D2 90%)',
                        },
                      }}
                    >
                      Gửi yêu cầu tư vấn
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Thông tin liên hệ
                </Typography>
                <List>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <LocationIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Địa chỉ"
                      secondary="123 Đường ABC, Quận XYZ, TP.HCM"
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Điện thoại"
                      secondary="+84 123 456 789"
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary="tuvanduhoc@example.com"
                    />
                  </ListItem>
                </List>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Giờ làm việc
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Thứ 2 - Thứ 6: 8:00 - 17:30
                    <br />
                    Thứ 7: 8:00 - 12:00
                    <br />
                    Chủ nhật: Nghỉ
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ConsultingPage;
