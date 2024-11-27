import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupIcon from '@mui/icons-material/Group';
import { courses } from '../data/courses';

const CoursesPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          <motion.div variants={headerVariants}>
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Các khóa học
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item xs={12} md={4} key={course.id}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={course.image}
                        alt={course.title}
                        sx={{ objectFit: 'cover' }}
                      />
                    </motion.div>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Box sx={{ mb: 2 }}>
                            <Chip
                              label={course.level}
                              color="primary"
                              size="small"
                            />
                          </Box>
                        </motion.div>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {course.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {course.description}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <AccessTimeIcon
                              sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                            />
                            <Typography variant="body2">
                              Thời gian: {course.duration}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <EventNoteIcon
                              sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                            />
                            <Typography variant="body2">
                              Lịch học: {course.schedule}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <GroupIcon
                              sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                            />
                            <Typography variant="body2">
                              Hình thức: {course.type === 'online' ? 'Trực tuyến' : 'Tại trung tâm'}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="subtitle1" gutterBottom>
                          Nội dung khóa học:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                          {course.curriculum.slice(0, 3).map((item, index) => (
                            <Typography
                              component="li"
                              variant="body2"
                              key={index}
                              sx={{ mb: 0.5 }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </Box>

                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => navigate(`/courses/${course.id.split('-')[0]}`)}
                          >
                            Xem chi tiết
                          </Button>
                        </motion.div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default CoursesPage;
