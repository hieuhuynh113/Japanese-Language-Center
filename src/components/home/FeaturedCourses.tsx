import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Rating,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';

const FeaturedCourses = () => {
  // Select first 3 courses to display
  const featuredCourses = courses.slice(0, 3);
  
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
          Khóa học tiêu biểu
        </Typography>
        <Grid container spacing={4}>
          {featuredCourses.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}>
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {course.title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {course.level}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {course.description}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      mb: 2,
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      minHeight: '24px'
                    }}>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                        ⏱️ {course.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                        💰 {course.price}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      component={Link}
                      to={`/courses/${course.id.split('-')[0]}`}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Xem chi tiết
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            to="/courses"
            variant="outlined"
            color="primary"
            size="large"
          >
            Xem tất cả khóa học
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedCourses;
