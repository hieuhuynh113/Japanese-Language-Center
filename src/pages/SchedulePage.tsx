import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const upcomingCourses = [
  {
    id: 1,
    level: 'N5',
    startDate: '2024-01-15',
    schedule: 'Thứ 2, 4, 6 (18:30 - 20:30)',
    duration: '3 tháng',
    slots: 15,
    slotsLeft: 5,
    status: 'Đang nhận đơn',
  },
  {
    id: 2,
    level: 'N4',
    startDate: '2024-01-20',
    schedule: 'Thứ 3, 5, 7 (18:30 - 20:30)',
    duration: '4 tháng',
    slots: 15,
    slotsLeft: 8,
    status: 'Đang nhận đơn',
  },
  {
    id: 3,
    level: 'N3',
    startDate: '2024-02-01',
    schedule: 'Thứ 2, 4, 6 (18:30 - 20:30)',
    duration: '6 tháng',
    slots: 12,
    slotsLeft: 12,
    status: 'Sắp mở đơn',
  },
];

const SchedulePage = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Lịch khai giảng
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Các khóa học sắp khai giảng tại trung tâm
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 6 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white' }}>Trình độ</TableCell>
                <TableCell sx={{ color: 'white' }}>Ngày khai giảng</TableCell>
                <TableCell sx={{ color: 'white' }}>Lịch học</TableCell>
                <TableCell sx={{ color: 'white' }}>Thời gian</TableCell>
                <TableCell sx={{ color: 'white' }}>Số lượng</TableCell>
                <TableCell sx={{ color: 'white' }}>Trạng thái</TableCell>
                <TableCell sx={{ color: 'white' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {upcomingCourses.map((course) => (
                <TableRow key={course.id} hover>
                  <TableCell>
                    <Typography variant="h6" color="primary">
                      {course.level}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {new Date(course.startDate).toLocaleDateString('vi-VN')}
                  </TableCell>
                  <TableCell>{course.schedule}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>
                    {course.slotsLeft}/{course.slots} chỗ trống
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={course.status}
                      color={
                        course.status === 'Đang nhận đơn'
                          ? 'success'
                          : 'warning'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      disabled={course.status !== 'Đang nhận đơn'}
                    >
                      Đăng ký
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Additional Information */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarTodayIcon
                  sx={{ fontSize: 40, color: 'primary.main', mr: 2 }}
                />
                <Typography variant="h6">Lịch học linh hoạt</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Nhiều ca học để bạn lựa chọn, phù hợp với thời gian của mình.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <GroupIcon
                  sx={{ fontSize: 40, color: 'primary.main', mr: 2 }}
                />
                <Typography variant="h6">Lớp học nhỏ</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Số lượng học viên giới hạn để đảm bảo chất lượng giảng dạy tốt
                nhất.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon
                  sx={{ fontSize: 40, color: 'primary.main', mr: 2 }}
                />
                <Typography variant="h6">Cam kết đầu ra</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Đảm bảo học viên đạt chứng chỉ JLPT sau khi hoàn thành khóa học.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Paper
          sx={{
            p: 4,
            mt: 6,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Bạn chưa tìm thấy lớp học phù hợp?
          </Typography>
          <Typography variant="body1" paragraph>
            Liên hệ với chúng tôi để được tư vấn và sắp xếp lịch học phù hợp nhất.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Tư vấn miễn phí
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default SchedulePage;
