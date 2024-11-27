import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { jobPositions } from './CareersPage';

const CareerDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobPositions.find(j => j.id === jobId);

  if (!job) {
    return (
      <Container>
        <Typography variant="h5" align="center" sx={{ mt: 4 }}>
          Không tìm thấy vị trí tuyển dụng
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/careers')}
          >
            Quay lại danh sách
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
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/careers')}
          sx={{ mb: 4 }}
        >
          Quay lại danh sách
        </Button>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {job.title}
              </Typography>
              <Chip 
                label={`Hạn nộp: ${new Date(job.deadline).toLocaleDateString('vi-VN')}`}
                color="primary"
                variant="outlined"
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="action" />
                <Typography variant="body1">{job.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkIcon color="action" />
                <Typography variant="body1">{job.type}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MonetizationOnIcon color="action" />
                <Typography variant="body1">{job.salary}</Typography>
              </Box>
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Mô tả công việc
            </Typography>
            <Typography variant="body1" paragraph>
              {job.description}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
              Yêu cầu công việc
            </Typography>
            <List>
              {job.requirements.map((req, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={req} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
              Trách nhiệm công việc
            </Typography>
            <List>
              {job.responsibilities.map((resp, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={resp} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
              Quyền lợi
            </Typography>
            <List>
              {job.benefits.map((benefit, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Cách thức ứng tuyển
            </Typography>
            <Typography variant="body1" paragraph>
              Ứng viên quan tâm vui lòng gửi CV và thư xin việc qua email: careers@japanese-center.com
            </Typography>
            <Typography variant="body1" paragraph>
              Hoặc liên hệ trực tiếp:
              <br />
              Địa chỉ: 123 Nguyễn Văn Linh, Quận 7, TP.HCM
              <br />
              Điện thoại: (028) 1234 5678
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                onClick={() => navigate(`/careers/${jobId}/apply`)}
              >
                Ứng tuyển ngay
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default CareerDetailPage;
