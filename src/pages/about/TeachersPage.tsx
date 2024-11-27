import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Teacher {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teachers: Teacher[] = [
  {
    name: 'Nguyễn Thị Anh',
    role: 'Giảng viên N2',
    description: '10 năm kinh nghiệm giảng dạy tiếng Nhật, tốt nghiệp ĐH Tokyo',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
  },
  {
    name: 'Trần Văn Minh',
    role: 'Giảng viên N3',
    description: 'Chuyên gia ngữ pháp với 8 năm kinh nghiệm, tốt nghiệp ĐH Osaka',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80',
  },
  {
    name: 'Lê Thị Hương',
    role: 'Giảng viên N4-N5',
    description: '5 năm kinh nghiệm, chuyên dạy lớp sơ cấp, tốt nghiệp ĐH Kyoto',
    image: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Phạm Đức Thành',
    role: 'Giảng viên N2',
    description: '7 năm kinh nghiệm, chuyên gia luyện thi JLPT, tốt nghiệp ĐH Waseda',
    image: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
];

const TeachersPage = () => {
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
            Đội Ngũ Giảng Viên
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {teachers.map((teacher, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      '& .MuiCardMedia-root': {
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={teacher.image}
                        alt={teacher.name}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Box>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          {teacher.name}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          color="primary"
                          sx={{ 
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #FF0000, #FF0066)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {teacher.role}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{
                            opacity: 0.8,
                            transition: 'opacity 0.3s ease-in-out',
                            '&:hover': {
                              opacity: 1
                            }
                          }}
                        >
                          {teacher.description}
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

export default TeachersPage;
