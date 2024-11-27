import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  const [inquiryType, setInquiryType] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h3" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body1" paragraph>
              Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào. Chúng tôi
              sẽ phản hồi trong thời gian sớm nhất.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <LocationOnIcon
                  sx={{ color: 'primary.main', mr: 2, fontSize: 24 }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Địa chỉ
                  </Typography>
                  <Typography variant="body2">
                    123 Nguyễn Văn Linh
                    <br />
                    Quận Hải Châu
                    <br />
                    Đà Nẵng
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 3 }}>
                <PhoneIcon
                  sx={{ color: 'primary.main', mr: 2, fontSize: 24 }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Điện thoại
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href="tel:+84123456789"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      0123 456 789
                    </a>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 3 }}>
                <EmailIcon
                  sx={{ color: 'primary.main', mr: 2, fontSize: 24 }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href="mailto:info@nihongo-center.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      info@nihongo-center.com
                    </a>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', mb: 3 }}>
                <AccessTimeIcon
                  sx={{ color: 'primary.main', mr: 2, fontSize: 24 }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Giờ làm việc
                  </Typography>
                  <Typography variant="body2">
                    Thứ 2 - Thứ 6: 8:00 - 21:00
                    <br />
                    Thứ 7 - Chủ nhật: 8:00 - 17:00
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Gửi thông tin liên hệ
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Họ và tên"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Số điện thoại"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Loại yêu cầu</InputLabel>
                      <Select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        label="Loại yêu cầu"
                        required
                      >
                        <MenuItem value="course">Tư vấn khóa học</MenuItem>
                        <MenuItem value="study-abroad">
                          Tư vấn du học
                        </MenuItem>
                        <MenuItem value="trial">Đăng ký học thử</MenuItem>
                        <MenuItem value="other">Khác</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Nội dung"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Gửi thông tin
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Google Maps */}
        <Box sx={{ mt: 8, height: 450 }}>
          <Typography variant="h4" gutterBottom>
            Bản đồ
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8367331464397!2d108.21199731478467!3d16.060399988885845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xeac35f2960ca74a4!2zMTIzIE5ndXnhu4VuIFbEg24gTGluaCwgVsSpbmggVHJ1bmcsIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1645123456789!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
