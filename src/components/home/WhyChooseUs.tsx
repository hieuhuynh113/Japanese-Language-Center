import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Kinh nghiệm lâu năm',
    description: 'Có kinh nghiệm hơn 10 năm về đào tạo Nhật Ngữ và tư vấn hồ sơ du học Nhật Bản.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    title: 'Trung tâm đầu tiên',
    description: 'Là trung tâm đầu tiên tại Nha Trang Khánh Hòa được cấp phép về đào tạo tiếng Nhật và tư vấn hồ sơ du học Nhật Bản.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: 'Tỷ lệ đỗ cao',
    description: 'Tỷ lệ học viên đỗ trong các kỳ thì tiếng Nhật như JLPT, Nat-test... từ 90% trở lên.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48 }} />,
    title: 'Tỷ lệ visa cao',
    description: 'Tỷ lệ xin visa du học Nhật Bản luôn đạt ở mức cao từ 80%-90%. Được các đối tác Nhật Bản đánh giá cao.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 48 }} />,
    title: 'Đổi mới sáng tạo',
    description: 'Chúng tôi luôn luôn đổi mới sáng tạo áp dụng các phương pháp học tập cũng như công nghệ mới vào đào tạo tiếng Nhật.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: 'Linh hoạt học tập',
    description: 'Là trung tâm đầu tiên áp dụng cho học Viên có thể vừa học Online vừa học trực tiếp.',
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Tại sao chọn chúng tôi?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <Box sx={{ mb: 2, color: 'secondary.light' }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
