import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  HealthAndSafety,
  School,
  LocalAtm,
  CardGiftcard,
  DirectionsBus,
  LocalHospital,
  BeachAccess,
  Celebration,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Chế độ lương thưởng',
    description: [
      'Lương cạnh tranh theo năng lực',
      'Thưởng các dịp lễ tết',
      'Thưởng theo hiệu quả công việc',
      'Tăng lương định kỳ',
    ],
    icon: <LocalAtm />,
  },
  {
    title: 'Đào tạo & Phát triển',
    description: [
      'Đào tạo nghiệp vụ chuyên môn',
      'Cơ hội học tiếng Nhật miễn phí',
      'Tham gia các khóa học kỹ năng',
      'Cơ hội thăng tiến rõ ràng',
    ],
    icon: <School />,
  },
  {
    title: 'Bảo hiểm & Sức khỏe',
    description: [
      'Bảo hiểm xã hội đầy đủ',
      'Bảo hiểm sức khỏe',
      'Khám sức khỏe định kỳ',
      'Hỗ trợ y tế',
    ],
    icon: <HealthAndSafety />,
  },
  {
    title: 'Phúc lợi khác',
    description: [
      'Du lịch công ty hàng năm',
      'Tiệc tất niên, sinh nhật',
      'Hỗ trợ đi lại',
      'Quà tặng các dịp đặc biệt',
    ],
    icon: <CardGiftcard />,
  },
];

const additionalBenefits = [
  {
    icon: <DirectionsBus />,
    text: 'Hỗ trợ đi lại, xăng xe',
  },
  {
    icon: <LocalHospital />,
    text: 'Chế độ chăm sóc sức khỏe toàn diện',
  },
  {
    icon: <BeachAccess />,
    text: 'Nghỉ phép có lương và nghỉ lễ theo quy định',
  },
  {
    icon: <Celebration />,
    text: 'Các hoạt động team building thường xuyên',
  },
];

const BenefitsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Phúc lợi & Đãi ngộ
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Khám phá những chế độ phúc lợi hấp dẫn khi trở thành thành viên của chúng tôi
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ mr: 2, color: 'primary.main' }}>
                        {benefit.icon}
                      </Box>
                      <Typography variant="h5" component="h2">
                        {benefit.title}
                      </Typography>
                    </Box>
                    <List>
                      {benefit.description.map((item, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Thêm về phúc lợi
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {additionalBenefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="body1">
                      {benefit.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default BenefitsPage;
