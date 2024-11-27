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
    title: 'Giáo viên bản xứ',
    description: 'Đội ngũ giảng viên người Nhật giàu kinh nghiệm, nhiệt tình.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: 'Lớp học nhỏ',
    description: 'Tối đa 15 học viên/lớp để đảm bảo chất lượng giảng dạy.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 48 }} />,
    title: 'Cơ hội việc làm',
    description: 'Kết nối doanh nghiệp Nhật Bản, hỗ trợ tìm việc sau tốt nghiệp.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48 }} />,
    title: 'Du học Nhật Bản',
    description: 'Tư vấn du học toàn diện, hỗ trợ visa và các thủ tục cần thiết.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    title: 'Cam kết đầu ra',
    description: 'Đảm bảo học viên đạt chứng chỉ JLPT theo đúng trình độ.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ tư vấn viên luôn sẵn sàng giải đáp mọi thắc mắc.',
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
