import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Facility {
  title: string;
  description: string;
  image: string;
}

const facilities: Facility[] = [
  {
    title: 'Phòng Học Hiện Đại',
    description: 'Phòng học được trang bị đầy đủ thiết bị hiện đại, máy chiếu, âm thanh chất lượng cao và bảng tương tác.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    title: 'Thư Viện Tài Liệu',
    description: 'Thư viện với hơn 1000 đầu sách tiếng Nhật, tài liệu học tập và khu vực tự học yên tĩnh.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80',
  },
  {
    title: 'Phòng Thực Hành Giao Tiếp',
    description: 'Không gian riêng biệt để thực hành hội thoại, với các thiết bị ghi âm và phần mềm học tập tương tác.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
  },
  {
    title: 'Khu Vực Giải Trí',
    description: 'Không gian thư giãn với phòng chiếu phim Nhật Bản, khu vực đọc manga và tổ chức hoạt động văn hóa.',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
];

const FacilitiesPage = () => {
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

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Cơ Sở Vật Chất
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {facilities.map((facility, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7))',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        opacity: 1,
                      },
                      '& .MuiCardMedia-root': {
                        transition: 'transform 0.5s ease-in-out',
                      },
                      '&:hover .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={facility.image}
                        alt={facility.title}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(5px)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                        },
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <Typography 
                          gutterBottom 
                          variant="h5" 
                          component="h2"
                          sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #FF0000, #FF0066)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {facility.title}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{
                            opacity: 0.9,
                            transition: 'opacity 0.3s ease-in-out',
                            '&:hover': {
                              opacity: 1
                            }
                          }}
                        >
                          {facility.description}
                        </Typography>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FacilitiesPage;
