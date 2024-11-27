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
import { motion } from 'framer-motion';

const timetableData = {
  morning: [
    { time: '09:00-11:00', mon: 'N5-A', tue: 'N4-A', wed: 'N5-A', thu: 'N4-A', fri: 'N5-A', sat: 'N3-A', sun: '-' },
    { time: '11:00-13:00', mon: 'N4-B', tue: 'N3-B', wed: 'N4-B', thu: 'N3-B', fri: 'N4-B', sat: 'N5-B', sun: '-' },
  ],
  afternoon: [
    { time: '14:00-16:00', mon: 'N3-C', tue: 'N5-C', wed: 'N3-C', thu: 'N5-C', fri: 'N3-C', sat: 'N4-C', sun: '-' },
    { time: '16:00-18:00', mon: 'N5-D', tue: 'N4-D', wed: 'N5-D', thu: 'N4-D', fri: 'N5-D', sat: 'N3-D', sun: '-' },
  ],
  evening: [
    { time: '18:30-20:30', mon: 'N4-E', tue: 'N3-E', wed: 'N4-E', thu: 'N3-E', fri: 'N4-E', sat: 'N5-E', sun: '-' },
    { time: '20:30-22:30', mon: 'N5-F', tue: 'N4-F', wed: 'N5-F', thu: 'N4-F', fri: 'N5-F', sat: '-', sun: '-' },
  ],
};

const getLevelColor = (classCode: string) => {
  if (classCode === '-') return 'default';
  const level = classCode.split('-')[0];
  switch (level) {
    case 'N5':
      return 'success';
    case 'N4':
      return 'info';
    case 'N3':
      return 'warning';
    default:
      return 'default';
  }
};

const TimetablePage = () => {
  const renderTimeSlot = (classCode: string) => {
    if (classCode === '-') {
      return <Typography color="text.secondary">-</Typography>;
    }
    return (
      <Chip
        label={classCode}
        size="small"
        color={getLevelColor(classCode) as any}
        variant="outlined"
      />
    );
  };

  const renderTimetable = (title: string, data: typeof timetableData.morning) => (
    <TableContainer component={Paper} elevation={2} sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Thời gian</TableCell>
            <TableCell align="center">Thứ 2</TableCell>
            <TableCell align="center">Thứ 3</TableCell>
            <TableCell align="center">Thứ 4</TableCell>
            <TableCell align="center">Thứ 5</TableCell>
            <TableCell align="center">Thứ 6</TableCell>
            <TableCell align="center">Thứ 7</TableCell>
            <TableCell align="center">Chủ nhật</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="center">{renderTimeSlot(row.mon)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.tue)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.wed)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.thu)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.fri)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.sat)}</TableCell>
              <TableCell align="center">{renderTimeSlot(row.sun)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Thời Khóa Biểu
        </Typography>

        <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
          Lịch học các lớp tại Trung tâm Tiếng Nhật
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Grid item>
              <Chip label="N5" color="success" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="N4" color="info" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="N3" color="warning" variant="outlined" />
            </Grid>
          </Grid>

          {renderTimetable('Buổi Sáng', timetableData.morning)}
          {renderTimetable('Buổi Chiều', timetableData.afternoon)}
          {renderTimetable('Buổi Tối', timetableData.evening)}
        </Box>

        <Box sx={{ bgcolor: 'background.default', p: 4, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Ghi chú:
          </Typography>
          <Typography paragraph color="text.secondary">
            • Mỗi lớp học 2 tiếng, tuần 3 buổi
          </Typography>
          <Typography paragraph color="text.secondary">
            • Học viên có thể chọn lịch học phù hợp với thời gian của mình
          </Typography>
          <Typography paragraph color="text.secondary">
            • Lớp học tối đa 15 học viên để đảm bảo chất lượng
          </Typography>
        </Box>

        <Box textAlign="center" sx={{ mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="/schedule/openings"
          >
            Xem lịch khai giảng
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default TimetablePage;
