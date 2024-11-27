import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Avatar,
  Paper,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  School as SchoolIcon,
  AttachMoney as MoneyIcon,
  Event as DateIcon,
  Check as CheckIcon,
  Assignment as AssignmentIcon,
  ArrowBack as ArrowBackIcon,
  FormatQuote as FormatQuoteIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { scholarships } from '../../data/scholarships';

const ScholarshipDetailPage = () => {
  const { scholarshipId } = useParams<{ scholarshipId: string }>();
  const navigate = useNavigate();
  const scholarship = scholarships.find((s) => s.id === scholarshipId);

  if (!scholarship) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Không tìm thấy thông tin học bổng
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/study-abroad/scholarships')}
          >
            Quay lại danh sách học bổng
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          color="inherit"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          Trang chủ
        </Link>
        <Link
          color="inherit"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/study-abroad/scholarships');
          }}
        >
          Học bổng
        </Link>
        <Typography color="text.primary">{scholarship.title}</Typography>
      </Breadcrumbs>

      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/study-abroad/scholarships')}
        sx={{ mb: 4 }}
      >
        Quay lại danh sách học bổng
      </Button>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" component="h1">
                    {scholarship.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {scholarship.provider}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" paragraph>
                {scholarship.description}
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MoneyIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Giá trị học bổng</Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {scholarship.value}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DateIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Thời hạn</Typography>
                  </Box>
                  <Typography variant="body1">{scholarship.duration}</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  Quyền lợi
                </Typography>
                <List>
                  {scholarship.benefits.map((benefit, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <AssignmentIcon color="primary" sx={{ mr: 1 }} />
                  Yêu cầu
                </Typography>
                <List>
                  {scholarship.requirements.map((requirement, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={requirement} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <Chip
                label={`Hạn nộp: ${scholarship.deadline}`}
                color="primary"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>

        {/* Success Stories Section */}
        <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 4 }}>
          Câu chuyện thành công
        </Typography>
        <Grid container spacing={4}>
          {scholarship.successStories.map((story, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={story.avatar}
                        alt={story.name}
                        sx={{ width: 64, height: 64, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6">{story.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {story.university}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.major} | {story.year}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ position: 'relative', pl: 3 }}>
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          left: -5,
                          top: -10,
                          color: 'primary.light',
                          opacity: 0.3,
                          fontSize: 40,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic' }}
                      >
                        {story.quote}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: 'primary.light',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Bạn muốn ứng tuyển học bổng này?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              px: 4,
              py: 1.5,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Liên hệ tư vấn
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ScholarshipDetailPage;
