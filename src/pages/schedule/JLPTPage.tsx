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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Event as EventIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  AttachMoney as MoneyIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const jlptExams = [
  {
    date: '07/07/2024',
    registrationPeriod: '20/03/2024 - 20/04/2024',
    levels: ['N1', 'N2', 'N3', 'N4', 'N5'],
    locations: [
      'Hà Nội (Đại học Ngoại ngữ - ĐHQGHN)',
      'TP.HCM (Đại học Khoa học Xã hội và Nhân văn)',
      'Đà Nẵng (Đại học Ngoại ngữ - ĐH Đà Nẵng)',
    ],
    fee: '1,200,000 VND',
  },
  {
    date: '01/12/2024',
    registrationPeriod: '15/08/2024 - 15/09/2024',
    levels: ['N1', 'N2', 'N3', 'N4', 'N5'],
    locations: [
      'Hà Nội (Đại học Ngoại ngữ - ĐHQGHN)',
      'TP.HCM (Đại học Khoa học Xã hội và Nhân văn)',
      'Đà Nẵng (Đại học Ngoại ngữ - ĐH Đà Nẵng)',
    ],
    fee: '1,200,000 VND',
  },
];

const levelDetails = [
  {
    level: 'N5',
    description: 'Có thể hiểu một số câu và biểu hiện thường dùng trong tiếng Nhật cơ bản',
    vocabulary: '800 từ vựng',
    kanji: '100 chữ Kanji',
    duration: '150 phút',
  },
  {
    level: 'N4',
    description: 'Có thể hiểu tiếng Nhật cơ bản',
    vocabulary: '1,500 từ vựng',
    kanji: '300 chữ Kanji',
    duration: '150 phút',
  },
  {
    level: 'N3',
    description: 'Có thể hiểu tiếng Nhật được sử dụng trong các tình huống hàng ngày ở mức độ nhất định',
    vocabulary: '3,000 từ vựng',
    kanji: '650 chữ Kanji',
    duration: '170 phút',
  },
  {
    level: 'N2',
    description: 'Có thể hiểu tiếng Nhật được sử dụng trong các tình huống hàng ngày và trong một phạm vi rộng',
    vocabulary: '6,000 từ vựng',
    kanji: '1,000 chữ Kanji',
    duration: '170 phút',
  },
  {
    level: 'N1',
    description: 'Có thể hiểu tiếng Nhật được sử dụng trong mọi tình huống',
    vocabulary: '10,000 từ vựng',
    kanji: '2,000 chữ Kanji',
    duration: '170 phút',
  },
];

const JLPTPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Lịch Thi JLPT 2024
        </Typography>

        <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
          Thông tin chi tiết về kỳ thi Năng lực Nhật ngữ JLPT
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {jlptExams.map((exam, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <EventIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Ngày thi"
                          secondary={exam.date}
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <TimeIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Thời gian đăng ký"
                          secondary={exam.registrationPeriod}
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <DescriptionIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Cấp độ"
                          secondary={exam.levels.join(', ')}
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <LocationIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Địa điểm thi"
                          secondary={
                            <List dense>
                              {exam.locations.map((location, idx) => (
                                <ListItem key={idx}>
                                  <ListItemText secondary={location} />
                                </ListItem>
                              ))}
                            </List>
                          }
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <MoneyIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Lệ phí thi"
                          secondary={exam.fee}
                        />
                      </ListItem>
                    </List>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2 }}
                      href="https://www.jlpt.jp/e/application/overseas_list.html"
                      target="_blank"
                    >
                      Đăng ký thi
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Chi Tiết Các Cấp Độ JLPT
        </Typography>

        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cấp độ</TableCell>
                <TableCell>Mô tả</TableCell>
                <TableCell>Từ vựng</TableCell>
                <TableCell>Kanji</TableCell>
                <TableCell>Thời gian thi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {levelDetails.map((level) => (
                <TableRow key={level.level}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6" color="primary">
                      {level.level}
                    </Typography>
                  </TableCell>
                  <TableCell>{level.description}</TableCell>
                  <TableCell>{level.vocabulary}</TableCell>
                  <TableCell>{level.kanji}</TableCell>
                  <TableCell>{level.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box textAlign="center" sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            Cần luyện thi JLPT?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/schedule/openings"
            sx={{ mt: 2 }}
          >
            Xem lịch khai giảng
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default JLPTPage;
