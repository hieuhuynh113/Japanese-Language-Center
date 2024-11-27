import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Event as EventIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  CheckCircle as CheckIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const upcomingCourses = [
  {
    level: 'N5',
    startDate: '15/01/2024',
    schedule: 'Thứ 2-4-6 (18:30-20:30)',
    duration: '4 tháng',
    maxStudents: 15,
    currentStudents: 8,
    price: '4,500,000 VND',
    features: [
      'Giáo trình Minna no Nihongo',
      'Tặng kèm tài liệu bổ trợ',
      'Luyện thi JLPT N5',
      'Giáo viên người Việt và người Nhật',
    ],
  },
  {
    level: 'N4',
    startDate: '20/01/2024',
    schedule: 'Thứ 3-5-7 (18:30-20:30)',
    duration: '4 tháng',
    maxStudents: 15,
    currentStudents: 10,
    price: '5,000,000 VND',
    features: [
      'Giáo trình Minna no Nihongo',
      'Tặng kèm tài liệu bổ trợ',
      'Luyện thi JLPT N4',
      'Giáo viên người Việt và người Nhật',
    ],
  },
  {
    level: 'N3',
    startDate: '22/01/2024',
    schedule: 'Thứ 2-4-6 (18:30-20:30)',
    duration: '6 tháng',
    maxStudents: 12,
    currentStudents: 5,
    price: '6,000,000 VND',
    features: [
      'Giáo trình Tobira',
      'Tặng kèm tài liệu bổ trợ',
      'Luyện thi JLPT N3',
      'Giáo viên người Nhật',
    ],
  },
];

const OpeningsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Lịch Khai Giảng
        </Typography>

        <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
          Các khóa học sắp khai giảng tại Trung tâm Tiếng Nhật
        </Typography>

        <Grid container spacing={4}>
          {upcomingCourses.map((course, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography variant="h4" component="h2" color="primary">
                        {course.level}
                      </Typography>
                      <Chip
                        label={`${course.currentStudents}/${course.maxStudents} học viên`}
                        color={course.currentStudents < course.maxStudents ? 'success' : 'error'}
                      />
                    </Box>

                    <List>
                      <ListItem disableGutters>
                        <ListItemIcon>
                          <EventIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Ngày khai giảng"
                          secondary={course.startDate}
                        />
                      </ListItem>

                      <ListItem disableGutters>
                        <ListItemIcon>
                          <TimeIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Lịch học"
                          secondary={course.schedule}
                        />
                      </ListItem>

                      <ListItem disableGutters>
                        <ListItemIcon>
                          <GroupIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Thời gian học"
                          secondary={course.duration}
                        />
                      </ListItem>

                      <ListItem disableGutters>
                        <ListItemIcon>
                          <MoneyIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Học phí"
                          secondary={course.price}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mt: 2 }}>
                      Đặc điểm khóa học:
                    </Typography>

                    <List dense>
                      {course.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <CheckIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2 }}
                      href="/contact"
                    >
                      Đăng ký ngay
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            Bạn cần tư vấn về khóa học?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{ mt: 2 }}
          >
            Liên hệ tư vấn
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default OpeningsPage;
