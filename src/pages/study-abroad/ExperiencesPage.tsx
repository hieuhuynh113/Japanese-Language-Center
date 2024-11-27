import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Paper,
  Divider,
  useTheme,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    avatar: '/images/avatar1.jpg',
    school: 'Waseda University',
    program: 'Khoa học máy tính',
    rating: 5,
    content: `"Tôi đã có 2 năm học tập tuyệt vời tại Waseda University. Môi trường học tập quốc tế, 
    giảng viên nhiệt tình và cơ sở vật chất hiện đại đã giúp tôi phát triển toàn diện. 
    Hiện tại tôi đang làm việc tại một công ty IT lớn ở Tokyo."`,
    year: '2021-2023',
  },
  {
    name: 'Trần Thị B',
    avatar: '/images/avatar2.jpg',
    school: 'Tokyo Japanese Language School',
    program: 'Khóa học N2',
    rating: 5,
    content: `"Trường có phương pháp giảng dạy hiệu quả và môi trường thân thiện. 
    Tôi đã đạt N2 sau 1 năm học và hiện đang theo học đại học ở Nhật. 
    Các thầy cô luôn quan tâm và hỗ trợ sinh viên hết mình."`,
    year: '2020-2021',
  },
  {
    name: 'Lê Văn C',
    avatar: '/images/avatar3.jpg',
    school: 'Osaka University',
    program: 'Thạc sĩ Kỹ thuật',
    rating: 5,
    content: `"Được học tập và nghiên cứu tại Osaka University là trải nghiệm tuyệt vời. 
    Tôi có cơ hội tham gia nhiều dự án nghiên cứu và được làm việc với các giáo sư hàng đầu. 
    Học bổng MEXT đã giúp tôi tập trung hoàn toàn vào việc học."`,
    year: '2019-2021',
  },
];

const tips = [
  {
    title: 'Chuẩn bị trước khi đi',
    content: [
      'Nghiên cứu kỹ về trường và thành phố',
      'Học tiếng Nhật cơ bản',
      'Chuẩn bị tài chính',
      'Làm visa và bảo hiểm',
    ],
  },
  {
    title: 'Cuộc sống tại Nhật',
    content: [
      'Tìm nhà ở phù hợp',
      'Đăng ký thẻ cư trú',
      'Mở tài khoản ngân hàng',
      'Tham gia bảo hiểm y tế',
    ],
  },
  {
    title: 'Học tập hiệu quả',
    content: [
      'Tham gia đầy đủ các lớp học',
      'Giao lưu với bạn bè quốc tế',
      'Tham gia câu lạc bộ',
      'Thực hành tiếng Nhật thường xuyên',
    ],
  },
  {
    title: 'Làm thêm tại Nhật',
    content: [
      'Xin giấy phép làm việc',
      'Tìm việc phù hợp với lịch học',
      'Cân bằng thời gian',
      'Tuân thủ quy định làm thêm',
    ],
  },
];

const ExperiencesPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              Kinh nghiệm du học Nhật Bản
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              sx={{ 
                mb: 4,
                opacity: 0.8,
              }}
            >
              Chia sẻ từ các du học sinh đi trước
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonials Section */}
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            mb: 4,
            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Câu chuyện thành công
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8, display: 'flex', alignItems: 'stretch' }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 2,
                    boxShadow: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto', p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ 
                          width: 64, 
                          height: 64, 
                          mr: 2,
                          border: '2px solid #4ECDC4',
                        }}
                      />
                      <Box>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{ 
                            fontWeight: 'bold',
                            color: '#2C3E50',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            color: '#4ECDC4',
                            fontWeight: 'medium',
                          }}
                        >
                          {testimonial.school}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.program} ({testimonial.year})
                        </Typography>
                      </Box>
                    </Box>
                    <Rating 
                      value={testimonial.rating} 
                      readOnly 
                      sx={{ 
                        mb: 2,
                        color: '#FF6B6B',
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{
                        fontStyle: 'italic',
                        color: '#34495E',
                        lineHeight: 1.6,
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tips Section */}
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            mb: 4,
            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Kinh nghiệm hữu ích
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8, display: 'flex', alignItems: 'stretch' }}>
          {tips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Paper
                  sx={{
                    p: 3,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 2,
                    boxShadow: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      '&::before': {
                        transform: 'translateX(0)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.3s ease-in-out',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#2C3E50',
                      fontWeight: 'bold',
                    }}
                  >
                    {tip.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2, 
                      flex: 1, 
                      m: 0,
                      '& li': {
                        color: '#34495E',
                        mb: 1,
                        '&::marker': {
                          color: '#4ECDC4',
                        }
                      }
                    }}
                  >
                    {tip.content.map((item, idx) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={idx}
                        sx={{ mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              color: '#2C3E50',
              fontWeight: 'bold',
            }}
          >
            Bạn muốn chia sẻ câu chuyện của mình?
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              color: '#34495E',
              mb: 4,
            }}
          >
            Hãy gửi câu chuyện du học của bạn để truyền cảm hứng cho các bạn khác
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              px: 4, 
              py: 1.5,
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF5B5B 30%, #3EBDB4 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Chia sẻ câu chuyện
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperiencesPage;
