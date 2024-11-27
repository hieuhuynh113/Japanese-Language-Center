import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  MonetizationOn as SalaryIcon,
  School as EducationIcon,
  Language as LanguageIcon,
  Description as DescriptionIcon,
  Business as CompanyIcon,
  ArrowBack as ArrowBackIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { jobPosts } from './JobsPage';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  const job = jobPosts.find(post => post.id === jobId);

  if (!job) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Không tìm thấy việc làm
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/news/jobs')}
          >
            Quay lại danh sách việc làm
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
              navigate('/news');
            }}
          >
            Tin tức
          </Link>
          <Link
            color="inherit"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/news/jobs');
            }}
          >
            Việc làm
          </Link>
          <Typography color="text.primary">{job.title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                {job.title}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {job.company}
              </Typography>

              <Box sx={{ my: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <LocationIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Địa điểm"
                          secondary={job.location}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <TimeIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Hình thức"
                          secondary={job.type}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SalaryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Mức lương"
                          secondary={`${job.salary} VNĐ/tháng`}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <LanguageIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Yêu cầu ngôn ngữ"
                          secondary={job.requirements.language}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <EducationIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Trình độ học vấn"
                          secondary={job.requirements.education}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Kinh nghiệm"
                          secondary={job.requirements.experience || "Không yêu cầu"}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Mô tả công việc
              </Typography>
              <Typography paragraph>
                {job.description || "Đang cập nhật..."}
              </Typography>

              <Typography variant="h6" gutterBottom>
                Yêu cầu công việc
              </Typography>
              <List>
                {job.requirements.details?.map((req, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Quyền lợi
              </Typography>
              <List>
                {job.benefits?.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 3 }}>
                {job.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{ mr: 1, mb: 1 }}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Thông tin liên hệ
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CompanyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Công ty"
                    secondary={job.company}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email"
                    secondary={job.contactEmail || "recruitment@company.com"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Điện thoại"
                    secondary={job.contactPhone || "0123 456 789"}
                  />
                </ListItem>
              </List>
            </Paper>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
              onClick={() => navigate('/careers')}
            >
              Xem vị trí tuyển dụng
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/news/jobs')}
            >
              Xem việc làm khác
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default JobDetailPage;
