import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { jobPositions } from './CareersPage';

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  education: string;
  experience: string;
  cvFile: File | null;
  coverLetter: string;
}

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobPositions.find(j => j.id === jobId);

  const [formData, setFormData] = useState<ApplicationForm>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    cvFile: null,
    coverLetter: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File CV không được vượt quá 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        cvFile: file,
      }));
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.cvFile) {
      setError('Vui lòng đính kèm CV của bạn');
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError('Có lỗi xảy ra khi gửi đơn ứng tuyển. Vui lòng thử lại sau.');
    }
  };

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

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center" color="primary">
              Đã gửi đơn ứng tuyển thành công!
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Cảm ơn bạn đã ứng tuyển vào vị trí {job.title}. Chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong thời gian sớm nhất.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/careers')}
              >
                Quay lại danh sách việc làm
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(`/careers/${jobId}`)}
          sx={{ mb: 4 }}
        >
          Quay lại thông tin việc làm
        </Button>

        <Typography variant="h4" component="h1" gutterBottom>
          Ứng tuyển: {job.title}
        </Typography>

        <Card sx={{ mt: 4 }}>
          <CardContent>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Thông tin cá nhân
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Họ và tên"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Số điện thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Địa chỉ"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Học vấn và Kinh nghiệm
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Trình độ học vấn"
                    name="education"
                    multiline
                    rows={3}
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder="Vui lòng liệt kê các bằng cấp, chứng chỉ của bạn"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Kinh nghiệm làm việc"
                    name="experience"
                    multiline
                    rows={4}
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Mô tả kinh nghiệm làm việc của bạn"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Hồ sơ ứng tuyển
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{ height: '56px' }}
                  >
                    {formData.cvFile ? `Đã chọn: ${formData.cvFile.name}` : 'Tải lên CV của bạn'}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    Chấp nhận file PDF, DOC, DOCX (Tối đa 5MB)
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Thư xin việc"
                    name="coverLetter"
                    multiline
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Viết thư xin việc của bạn (không bắt buộc)"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Gửi đơn ứng tuyển
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default JobApplicationPage;
