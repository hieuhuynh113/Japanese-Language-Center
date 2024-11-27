import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
} from '@mui/material';
import {
  Schedule as ScheduleIcon,
  Timer as TimerIcon,
  AttachMoney as PriceIcon,
  School as LevelIcon,
  CheckCircle as CheckIcon,
  ArrowBack as ArrowBackIcon,
  Laptop as OnlineIcon,
  Person as OfflineIcon,
} from '@mui/icons-material';
import { courses } from '../data/courses';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const CourseImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '16px',
  marginBottom: '24px',
});

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Container>
        <Typography variant="h4">Không tìm thấy khóa học</Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/courses')}
          sx={{ mt: 2 }}
        >
          Quay lại danh sách khóa học
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/courses')}
        sx={{ mb: 4 }}
      >
        Quay lại danh sách khóa học
      </Button>

      <CourseImage src={course.image} alt={course.title} />

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="h3" component="h1">
          {course.title}
        </Typography>
        <Chip
          icon={course.type === 'online' ? <OnlineIcon /> : <OfflineIcon />}
          label={course.type === 'online' ? 'Trực tuyến' : 'Tại trung tâm'}
          color={course.type === 'online' ? 'primary' : 'secondary'}
          sx={{ height: 32 }}
        />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>
              Mô tả khóa học
            </Typography>
            <Typography paragraph>{course.description}</Typography>

            <Box sx={{ my: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LevelIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Trình độ: {course.level}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimerIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Thời gian: {course.duration}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ScheduleIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Lịch học: {course.schedule}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PriceIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      Học phí: {course.price}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Nội dung khóa học
            </Typography>
            <List>
              {course.curriculum.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Yêu cầu đầu vào
                </Typography>
                <List>
                  {course.requirements.map((req, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={req} />
                    </ListItem>
                  ))}
                </List>
              </StyledPaper>
            </Grid>

            <Grid item xs={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Lợi ích khóa học
                </Typography>
                <List>
                  {course.benefits.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </StyledPaper>
            </Grid>

            <Grid item xs={12}>
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Đăng ký ngay
                </Typography>
                <Typography paragraph>
                  Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={() => navigate('/contact')}
                >
                  Đăng ký ngay
                </Button>
              </StyledPaper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetailPage;
