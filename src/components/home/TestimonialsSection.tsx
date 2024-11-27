import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
    role: 'Du học sinh tại Tokyo',
    rating: 5,
    comment:
      'Nhờ trung tâm mà mình đã đạt được ước mơ du học Nhật Bản. Giáo viên nhiệt tình, kiến thức chuyên sâu và thực tế.',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    role: 'Nhân viên công ty Nhật',
    rating: 5,
    comment:
      'Học tại trung tâm giúp mình tự tin giao tiếp với đối tác Nhật. Phương pháp giảng dạy rất hiệu quả.',
  },
  {
    id: 3,
    name: 'Lê Văn C',
    avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    role: 'Đạt N2 sau 1 năm',
    rating: 5,
    comment:
      'Môi trường học tập chuyên nghiệp, có nhiều hoạt động ngoại khóa thú vị để thực hành tiếng Nhật.',
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Học viên nói gì về chúng tôi
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  bgcolor: 'primary.main',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                <Box sx={{ position: 'relative' }}>
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: -10,
                      fontSize: 40,
                      color: 'primary.light',
                      opacity: 0.3,
                    }}
                  />
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontStyle: 'italic',
                      mb: 3,
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" component="div">
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {testimonial.role}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
