import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Trung tâm tiếng Nhật 日本語センター
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Nguyễn Văn Linh, Đà Nẵng
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="tel:+84123456789" color="inherit">
                  0123 456 789
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="mailto:info@nihongo-center.com" color="inherit">
                  info@nihongo-center.com
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Khóa học
            </Typography>
            <Typography variant="body2" paragraph>
              - Tiếng Nhật sơ cấp N5
            </Typography>
            <Typography variant="body2" paragraph>
              - Tiếng Nhật sơ cấp N4
            </Typography>
            <Typography variant="body2" paragraph>
              - Tiếng Nhật trung cấp N3
            </Typography>
            <Typography variant="body2" paragraph>
              - Tiếng Nhật trung cấp N2
            </Typography>
            <Typography variant="body2">
              - Tiếng Nhật cao cấp N1
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Kết nối với chúng tôi
            </Typography>
            <Box>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Đăng ký nhận tin tức và ưu đãi mới nhất từ chúng tôi
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, borderTop: 1, pt: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          © {new Date().getFullYear()} 日本語センター. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
