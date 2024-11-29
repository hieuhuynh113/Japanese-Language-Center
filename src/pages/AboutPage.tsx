import React from 'react';
import { Container, Box, Typography, Grid, Paper, Divider, styled, Card, CardMedia } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { School, EmojiEvents, Group, Language, Timeline, Psychology, Public, WorkspacePremium } from '@mui/icons-material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StyledPaper = muiStyled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  minHeight: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.primary.light,
    '& .MuiTypography-root': {
      color: theme.palette.primary.contrastText,
    },
    '& .icon-wrapper': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'rotate(360deg) scale(1.1)',
    },
  },
}));

const IconWrapper = muiStyled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '50%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledDivider = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  margin: '2rem 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)',
    zIndex: 0
  },
  '& > *': {
    position: 'relative',
    background: '#fff',
    padding: '0 1rem',
    display: 'inline-block',
    zIndex: 1
  }
}));

const features = [
  {
    icon: <School />,
    title: 'Đào Tạo\nChất Lượng Cao',
    description: 'Giáo trình chuẩn quốc tế, giảng viên bản ngữ và Việt Nam có chứng chỉ giảng dạy quốc tế JFT/JLPT N1.',
  },
  {
    icon: <Psychology />,
    title: 'Phương Pháp\nĐộc Quyền',
    description: 'Áp dụng công nghệ AI và phương pháp "Immersive Learning" giúp học viên tiếp thu nhanh và nhớ lâu.',
  },
  {
    icon: <Group />,
    title: 'Cộng Đồng\nHọc Tập',
    description: 'Môi trường học tập năng động với các câu lạc bộ tiếng Nhật, văn hóa và cơ hội giao lưu với người Nhật.',
  },
  {
    icon: <WorkspacePremium />,
    title: 'Cam Kết\nChất Lượng',
    description: 'Đảm bảo đầu ra với chính sách học lại miễn phí và hoàn tiền nếu không đạt mục tiêu.',
  },
];

const milestones = [
  {
    icon: <Timeline />,
    year: '2010',
    title: 'Thành Lập',
    description: 'Khởi đầu với 2 lớp học và 30 học viên.',
  },
  {
    icon: <EmojiEvents />,
    year: '2015',
    title: 'Giải Thưởng',
    description: 'Top 10 trung tâm đào tạo tiếng Nhật xuất sắc tại Việt Nam.',
  },
  {
    icon: <Public />,
    year: '2020',
    title: 'Mở Rộng',
    description: 'Hợp tác với 50+ doanh nghiệp Nhật Bản.',
  },
];

const AboutPage: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ 
                fontWeight: 900,
                background: 'linear-gradient(45deg, #FF0000, #FF0066)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 3
              }}
            >
              Công ty cổ phần Sen Quốc Tế
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', mb: 6, fontStyle: 'italic' }}>
              "Nơi Tiếng Nhật Trở Thành Hành Trang Cho Tương Lai"
            </Typography>
          </motion.div>

          <Grid container spacing={6} alignItems="center">
            {/* Left side - Text content */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Box sx={{ textAlign: 'left' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      color: 'text.primary'
                    }}
                  >
                    Trong bối cảnh phát triển kinh tế nhanh chóng, hội nhập quốc tế sâu rộng, mối quan hệ Việt- Nhật ngày càng bền vững, công ty CP SEN Quốc tế ra đời như nhịp cầu nối Việt Nam – Nhật Bản.
                  </Typography>

                  <Card 
                    elevation={3} 
                    sx={{ 
                      mb: 4, 
                      background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                      borderRadius: 2
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        Các lĩnh vực hoạt động:
                      </Typography>
                      <Box sx={{ pl: 2 }}>
                        {[
                          'Đào tạo Nhật Ngữ',
                          'Tư vấn du học Nhật Bản',
                          'Giới thiệu việc làm tiếng Nhật',
                          'Biên phiên dịch tiếng Nhật',
                          'Sinh trắc vân tay'
                        ].map((service, index) => (
                          <Typography 
                            key={index}
                            variant="body1" 
                            sx={{ 
                              mb: 1,
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '"•"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                marginRight: 1
                              }
                            }}
                          >
                            {service}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Card>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.8,
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                      color: 'primary.main',
                      fontWeight: 500
                    }}
                  >
                    "Thành công của các bạn chính là sự tồn tại và phát triển của chúng tôi"
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Chúng tôi mong muốn sẽ mở đường tương lai và chắp cánh ước mơ du học Nhật Bản cho các bạn trẻ Việt Nam nói chung và các bạn trẻ Khánh Hòa nói riêng.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Right side - Image */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Card 
                  elevation={5}
                  sx={{ 
                    borderRadius: 4,
                    overflow: 'hidden',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://senquocte.com/wp-content/uploads/2023/05/trung-tam635x577.png"
                    alt="Sen Quốc Tế"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Box 
              sx={{ 
                maxWidth: '900px', 
                mx: 'auto', 
                mt: 6, 
                p: 4,
                borderRadius: 2,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                Tâm huyết với nghề, tận tâm với công việc, chúng tôi luôn cam kết nâng cao chất lượng giảng dạy và dịch vụ, giữ vững niềm tin nơi khách hàng và các đối tác.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  textAlign: 'left'
                }}
              >
                Thành lập từ tâm huyết của hội đồng cổ đông là những du học sinh Nhật Bản và là cựu sinh viên của trường ĐH Thủy Sản tiền thân của ĐH Nha Trang ngày nay. Công ty chúng tôi đang từng bước phát triển, khẳng định vị trí, nâng cao giá trị của mình trước Khách hàng, đối tác và bạn bè trong và ngoài nước.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <StyledDivider>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typography variant="h6" sx={{ px: 2, color: 'primary.main' }}>
                Điểm Khác Biệt
              </Typography>
            </motion.div>
          </StyledDivider>

          {/* Features Grid */}
          <Box sx={{ position: 'relative', mb: 12 }}>
            <Grid container spacing={4} sx={{ position: 'relative', py: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <StyledPaper elevation={3}>
                      <IconWrapper className="icon-wrapper" sx={{ mb: 3 }}>
                        {feature.icon}
                      </IconWrapper>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 'bold', 
                          minHeight: '64px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          whiteSpace: 'pre-line',
                          textAlign: 'center',
                          lineHeight: 1.2,
                          mb: 3
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          flexGrow: 1,
                          maxWidth: '280px',
                          mx: 'auto',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </StyledPaper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <StyledDivider>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Typography variant="h6" sx={{ px: 2, color: 'primary.main' }}>
                Hành Trình Phát Triển
              </Typography>
            </motion.div>
          </StyledDivider>

          {/* Milestones Timeline */}
          <Box sx={{ position: 'relative', mb: 8 }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #FF0000 0%, #FF0066 100%)',
                  display: { xs: 'none', md: 'block' },
                  transformOrigin: 'left'
                }}
              />
            </motion.div>
            <Grid container spacing={4} sx={{ position: 'relative' }}>
              {milestones.map((milestone, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Box sx={{ textAlign: 'center', position: 'relative' }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                      >
                        {milestone.icon}
                      </motion.div>
                      <Typography variant="h4" color="primary" gutterBottom>
                        {milestone.year}
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutPage;
