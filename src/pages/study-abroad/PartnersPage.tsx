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
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  School as SchoolIcon,
  LocationOn as LocationIcon,
  CheckCircle as CheckIcon,
  Language as LanguageIcon,
  Groups as GroupsIcon,
} from '@mui/icons-material';

const partners = [
  {
    name: 'Waseda University',
    type: 'Đại học',
    location: 'Tokyo',
    image: 'https://duhocvietnhat.edu.vn/wp-content/uploads/Waseda-University-1.jpg',
    description: 'Một trong những trường đại học tư thục hàng đầu Nhật Bản, nổi tiếng với chương trình đào tạo đa dạng và chất lượng cao.',
    ranking: 'Top 1% tại Nhật Bản',
    rating: 4.8,
    features: [
      'Hơn 50 chương trình bằng tiếng Anh',
      'Cơ sở vật chất hiện đại',
      'Đội ngũ giảng viên quốc tế',
      'Cơ hội thực tập tại doanh nghiệp lớn',
    ],
    programs: [
      'Khoa học máy tính',
      'Kinh doanh quốc tế',
      'Kỹ thuật',
      'Khoa học xã hội',
    ],
    website: 'https://www.waseda.jp/top/en/',
    studentCount: '50,000+',
    internationalStudents: '7,000+',
  },
  {
    name: 'Kyoto University',
    type: 'Đại học',
    location: 'Kyoto',
    image: 'https://experience-japan.jp/wp-content/uploads/2023/07/08_cover.jpg',
    description: 'Một trong những trường đại học công lập hàng đầu Nhật Bản, nổi tiếng với nghiên cứu khoa học và đổi mới sáng tạo.',
    ranking: 'Top 2 tại Nhật Bản',
    rating: 4.9,
    features: [
      'Môi trường nghiên cứu xuất sắc',
      'Cơ sở vật chất tiên tiến',
      'Nhiều giải Nobel',
      'Mạng lưới alumni mạnh mẽ',
    ],
    programs: [
      'Khoa học tự nhiên',
      'Công nghệ sinh học',
      'Kỹ thuật',
      'Y học',
    ],
    website: 'https://www.kyoto-u.ac.jp/en',
    studentCount: '22,000+',
    internationalStudents: '2,500+',
  },
  {
    name: 'Tokyo Institute of Technology',
    type: 'Đại học',
    location: 'Tokyo',
    image: 'https://duhocvietnhat.edu.vn/wp-content/uploads/Tokyo-Institute-of-Technology-1.jpg',
    description: 'Trường đại học kỹ thuật hàng đầu Nhật Bản, chuyên về công nghệ và khoa học ứng dụng.',
    ranking: 'Top 3 về kỹ thuật tại Nhật Bản',
    rating: 4.7,
    features: [
      'Chương trình tiếng Anh đầy đủ',
      'Phòng thí nghiệm hiện đại',
      'Hợp tác doanh nghiệp mạnh mẽ',
      'Cơ hội nghiên cứu đa dạng',
    ],
    programs: [
      'Kỹ thuật máy tính',
      'Robotics',
      'Khoa học vật liệu',
      'AI và Data Science',
    ],
    website: 'https://www.titech.ac.jp/english',
    studentCount: '10,000+',
    internationalStudents: '1,500+',
  },
];

const PartnersPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Đối Tác Trường Học
      </Typography>

      <Typography variant="h6" paragraph align="center" color="text.secondary" sx={{ mb: 6 }}>
        Khám phá các trường đại học hàng đầu Nhật Bản - Đối tác của chúng tôi
      </Typography>

      <Grid container spacing={4}>
        {partners.map((partner, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={partner.image}
                    alt={partner.name}
                    sx={{ objectFit: 'cover' }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SchoolIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
                      <Typography variant="h5" component="h2">
                        {partner.name}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {partner.location}
                      </Typography>
                      <Rating value={partner.rating} readOnly sx={{ ml: 2 }} />
                    </Box>

                    <Typography paragraph>{partner.description}</Typography>

                    <Box sx={{ mb: 2 }}>
                      <Chip label={partner.ranking} color="primary" sx={{ mr: 1 }} />
                      <Chip label={`${partner.studentCount} sinh viên`} sx={{ mr: 1 }} />
                      <Chip label={`${partner.internationalStudents} sinh viên quốc tế`} />
                    </Box>

                    <Typography variant="h6" gutterBottom>Điểm nổi bật:</Typography>
                    <List dense>
                      {partner.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="h6" gutterBottom>Chương trình đào tạo:</Typography>
                    <Box sx={{ mb: 2 }}>
                      {partner.programs.map((program, idx) => (
                        <Chip
                          key={idx}
                          label={program}
                          sx={{ mr: 1, mb: 1 }}
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      color="primary"
                      href={partner.website}
                      target="_blank"
                      startIcon={<LanguageIcon />}
                      sx={{ mt: 2 }}
                    >
                      Trang web chính thức
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Bạn muốn được tư vấn về du học tại các trường đối tác?
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          href="/study-abroad/consulting"
          sx={{ mt: 2 }}
        >
          Đăng ký tư vấn ngay
        </Button>
      </Box>
    </Container>
  );
};

export default PartnersPage;
