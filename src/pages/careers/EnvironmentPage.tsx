import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const environments = [
  {
    title: 'Không gian làm việc hiện đại',
    description: 'Văn phòng được thiết kế theo phong cách Nhật Bản, tạo không gian thoải mái và sáng tạo cho nhân viên.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  },
  {
    title: 'Văn hóa doanh nghiệp',
    description: 'Môi trường làm việc chuyên nghiệp, thân thiện với văn hóa giao tiếp cởi mở và tôn trọng lẫn nhau.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Cơ hội phát triển',
    description: 'Nhiều cơ hội học tập và phát triển kỹ năng thông qua các khóa đào tạo và dự án thực tế.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Làm việc cùng đội ngũ giảng viên và nhân viên có trình độ cao, giàu kinh nghiệm trong lĩnh vực giáo dục.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

const EnvironmentPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Môi trường làm việc
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Khám phá môi trường làm việc chuyên nghiệp và năng động tại Trung tâm Tiếng Nhật
        </Typography>

        <Grid container spacing={4}>
          {environments.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Giá trị cốt lõi
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Chúng tôi tin rằng một môi trường làm việc tốt là nền tảng để phát triển sự nghiệp bền vững.
            Tại đây, mỗi nhân viên đều được tôn trọng, được lắng nghe và có cơ hội phát triển tối đa tiềm năng của mình.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default EnvironmentPage;
