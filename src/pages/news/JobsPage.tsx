import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Box,
  Pagination,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  MonetizationOn as SalaryIcon,
  School as EducationIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const jobPosts = [
  {
    id: 'job-1',
    title: 'Biên Phiên Dịch Tiếng Nhật',
    company: 'Công ty TNHH ABC Japan',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '20-25 triệu',
    requirements: {
      language: 'JLPT N2 trở lên',
      education: 'Đại học',
      experience: '2 năm kinh nghiệm',
      details: [
        'Thành thạo tiếng Nhật giao tiếp và văn phòng',
        'Kỹ năng dịch thuật tốt',
        'Có khả năng làm việc độc lập và theo nhóm',
        'Ưu tiên ứng viên có kinh nghiệm làm việc với công ty Nhật Bản'
      ]
    },
    benefits: [
      'Lương thưởng hấp dẫn theo năng lực',
      'Được đào tạo và phát triển chuyên môn',
      'Chế độ bảo hiểm đầy đủ',
      'Cơ hội thăng tiến cao',
      'Môi trường làm việc chuyên nghiệp'
    ],
    description: 'Chúng tôi đang tìm kiếm Biên Phiên dịch viên tiếng Nhật có kinh nghiệm để tham gia vào các dự án với đối tác Nhật Bản. Công việc đòi hỏi kỹ năng tiếng Nhật tốt và khả năng làm việc trong môi trường năng động.',
    tags: ['Tiếng Nhật', 'Biên phiên dịch', 'N2', 'Full-time'],
    date: '2024-01-15',
    contactEmail: 'recruitment@abcjapan.com',
    contactPhone: '024 1234 5678'
  },
  {
    id: 'job-2',
    title: 'Giáo Viên Tiếng Nhật',
    company: 'Trung tâm Nhật ngữ XYZ',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    salary: '15-20 triệu',
    requirements: {
      language: 'JLPT N1',
      education: 'Đại học',
      experience: '1 năm kinh nghiệm',
      details: [
        'Có chứng chỉ JLPT N1',
        'Tốt nghiệp chuyên ngành tiếng Nhật hoặc sư phạm',
        'Kỹ năng sư phạm tốt',
        'Nhiệt tình, yêu thích công việc giảng dạy'
      ]
    },
    benefits: [
      'Lương cơ bản + phụ cấp giảng dạy',
      'Được đào tạo phương pháp giảng dạy',
      'Môi trường làm việc thân thiện',
      'Cơ hội thăng tiến lên vị trí quản lý',
      'Được tham gia các khóa học nâng cao'
    ],
    description: 'Trung tâm Nhật ngữ XYZ đang tìm kiếm giáo viên tiếng Nhật nhiệt huyết để tham gia đội ngũ giảng dạy. Chúng tôi cung cấp môi trường làm việc chuyên nghiệp và cơ hội phát triển nghề nghiệp.',
    tags: ['Giảng dạy', 'Tiếng Nhật', 'N1', 'Sư phạm'],
    date: '2024-01-14',
    contactEmail: 'hr@xyzedu.com',
    contactPhone: '028 9876 5432'
  },
  {
    id: 'job-3',
    title: 'Nhân Viên Kinh Doanh Tiếng Nhật',
    company: 'DEF Trading Co., Ltd',
    location: 'Đà Nẵng',
    type: 'Toàn thời gian',
    salary: '18-22 triệu',
    requirements: {
      language: 'JLPT N2',
      education: 'Cao đẳng trở lên',
      experience: 'Không yêu cầu',
      details: [
        'Giao tiếp tiếng Nhật tốt',
        'Kỹ năng bán hàng và đàm phán',
        'Năng động, nhiệt tình',
        'Sẵn sàng đi công tác khi cần'
      ]
    },
    benefits: [
      'Lương cơ bản + hoa hồng hấp dẫn',
      'Thưởng theo doanh số',
      'Chế độ bảo hiểm đầy đủ',
      'Được đào tạo kỹ năng bán hàng',
      'Cơ hội đi công tác Nhật Bản'
    ],
    description: 'DEF Trading tuyển dụng nhân viên kinh doanh thành thạo tiếng Nhật để phát triển thị trường và chăm sóc khách hàng Nhật Bản. Đây là cơ hội tốt để phát triển sự nghiệp trong lĩnh vực kinh doanh quốc tế.',
    tags: ['Kinh doanh', 'Tiếng Nhật', 'N2', 'Sales'],
    date: '2024-01-13',
    contactEmail: 'careers@deftrading.com',
    contactPhone: '0236 4567 890'
  }
];

const JobsPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Việc Làm Tiếng Nhật
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Cơ hội việc làm hấp dẫn dành cho người biết tiếng Nhật
        </Typography>

        <Grid container spacing={4}>
          {jobPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea onClick={() => navigate(`/news/jobs/${post.id}`)}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {post.company}
                      </Typography>

                      <List dense>
                        <ListItem disableGutters>
                          <ListItemIcon>
                            <LocationIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={post.location} />
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemIcon>
                            <TimeIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={post.type} />
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemIcon>
                            <SalaryIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={`${post.salary} VNĐ/tháng`} />
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemIcon>
                            <LanguageIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={post.requirements.language} />
                        </ListItem>

                        <ListItem disableGutters>
                          <ListItemIcon>
                            <EducationIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={post.requirements.education} />
                        </ListItem>
                      </List>

                      <Box sx={{ mt: 2 }}>
                        {post.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                            color="primary"
                            variant="outlined"
                          />
                        ))}
                      </Box>

                      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                        {new Date(post.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          <Pagination count={3} color="primary" size="large" />
        </Box>
      </motion.div>
    </Container>
  );
};

export default JobsPage;
