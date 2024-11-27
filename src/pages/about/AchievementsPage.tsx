import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: 'Học Viên Đỗ JLPT',
    value: '1000+',
    description: 'Học viên đã đạt chứng chỉ JLPT các cấp độ từ N5 đến N1',
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Học Viên Du Học',
    value: '200+',
    description: 'Học viên được nhận vào các trường Đại học tại Nhật Bản',
    icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Giải Thưởng',
    value: '15+',
    description: 'Giải thưởng về chất lượng đào tạo và dịch vụ giáo dục',
    icon: <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Việc Làm Tại Nhật',
    value: '300+',
    description: 'Học viên được nhận vào làm việc tại các công ty Nhật Bản',
    icon: <WorkIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const timelineEvents = [
  {
    year: '2015',
    title: 'Thành Lập Trung Tâm',
    description: 'Khai trương cơ sở đầu tiên với 5 lớp học',
  },
  {
    year: '2017',
    title: 'Mở Rộng Quy Mô',
    description: 'Khai trương thêm 2 cơ sở mới, tăng số lượng lớp học lên 15',
  },
  {
    year: '2019',
    title: 'Hợp Tác Quốc Tế',
    description: 'Ký kết hợp tác với 5 trường đại học tại Nhật Bản',
  },
  {
    year: '2021',
    title: 'Chuyển Đổi Số',
    description: 'Triển khai platform học trực tuyến và mở rộng đào tạo online',
  },
  {
    year: '2023',
    title: 'Phát Triển Bền Vững',
    description: 'Top 10 trung tâm đào tạo tiếng Nhật uy tín tại Việt Nam',
  },
];

const AchievementsPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Thành Tích
          </Typography>
        </motion.div>

        {/* Key Achievements */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{achievement.icon}</Box>
                    <Typography variant="h4" component="div" color="primary" gutterBottom>
                      {achievement.value}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Timeline */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Chặng Đường Phát Triển
        </Typography>
        <Box sx={{ position: 'relative' }}>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  mb: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    maxWidth: '400px',
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {event.year}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {event.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: 2,
                      height: '100%',
                      bgcolor: 'primary.main',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: 20,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: 2,
                      height: '100%',
                      bgcolor: 'primary.main',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: 20,
                    },
                  }}
                />
                <Box sx={{ flex: 1, maxWidth: '400px' }} />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AchievementsPage;
