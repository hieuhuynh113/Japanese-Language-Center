import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  requirements: string[];
  description: string;
  responsibilities: string[];
  benefits: string[];
  deadline: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Biên Phiên Dịch Tiếng Nhật',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '20-25 triệu',
    requirements: [
      'Thành thạo tiếng Nhật giao tiếp và văn phòng',
      'Có chứng chỉ JLPT N2 trở lên',
      'Tốt nghiệp Đại học',
      'Kỹ năng dịch thuật tốt',
      'Có khả năng làm việc độc lập và theo nhóm',
      'Ưu tiên ứng viên có kinh nghiệm làm việc với công ty Nhật Bản'
    ],
    description: 'Chúng tôi đang tìm kiếm Biên Phiên dịch viên tiếng Nhật có kinh nghiệm để tham gia vào các dự án với đối tác Nhật Bản. Công việc đòi hỏi kỹ năng tiếng Nhật tốt và khả năng làm việc trong môi trường năng động.',
    responsibilities: [
      'Biên dịch tài liệu Nhật-Việt, Việt-Nhật',
      'Phiên dịch trong các cuộc họp với đối tác',
      'Hỗ trợ giao tiếp giữa nhân viên Việt Nam và Nhật Bản',
      'Tham gia các dự án với đối tác Nhật Bản'
    ],
    benefits: [
      'Lương thưởng hấp dẫn theo năng lực',
      'Được đào tạo và phát triển chuyên môn',
      'Chế độ bảo hiểm đầy đủ',
      'Cơ hội thăng tiến cao',
      'Môi trường làm việc chuyên nghiệp'
    ],
    deadline: '2024-03-15'
  },
  {
    id: 'job-2',
    title: 'Giáo Viên Tiếng Nhật',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    salary: '15-20 triệu',
    requirements: [
      'Có chứng chỉ JLPT N1',
      'Tốt nghiệp chuyên ngành tiếng Nhật hoặc sư phạm',
      'Kỹ năng sư phạm tốt',
      'Nhiệt tình, yêu thích công việc giảng dạy'
    ],
    description: 'Trung tâm Nhật ngữ XYZ đang tìm kiếm giáo viên tiếng Nhật nhiệt huyết để tham gia đội ngũ giảng dạy. Chúng tôi cung cấp môi trường làm việc chuyên nghiệp và cơ hội phát triển nghề nghiệp.',
    responsibilities: [
      'Giảng dạy tiếng Nhật các cấp độ',
      'Xây dựng giáo án và tài liệu giảng dạy',
      'Đánh giá và theo dõi tiến độ học viên',
      'Tham gia các hoạt động ngoại khóa'
    ],
    benefits: [
      'Lương cơ bản + phụ cấp giảng dạy',
      'Được đào tạo phương pháp giảng dạy',
      'Môi trường làm việc thân thiện',
      'Cơ hội thăng tiến lên vị trí quản lý',
      'Được tham gia các khóa học nâng cao'
    ],
    deadline: '2024-03-30'
  },
  {
    id: 'job-3',
    title: 'Nhân Viên Kinh Doanh Tiếng Nhật',
    location: 'Đà Nẵng',
    type: 'Toàn thời gian',
    salary: '18-22 triệu',
    requirements: [
      'Có chứng chỉ JLPT N2',
      'Tốt nghiệp Cao đẳng trở lên',
      'Kỹ năng giao tiếp tốt',
      'Có định hướng phát triển trong lĩnh vực kinh doanh'
    ],
    description: 'DEF Trading Co., Ltd đang tìm kiếm nhân viên kinh doanh thành thạo tiếng Nhật để mở rộng thị trường và phát triển quan hệ với đối tác Nhật Bản.',
    responsibilities: [
      'Tìm kiếm và phát triển khách hàng mới',
      'Duy trì và chăm sóc khách hàng hiện tại',
      'Đàm phán và ký kết hợp đồng',
      'Báo cáo kết quả kinh doanh định kỳ'
    ],
    benefits: [
      'Lương cơ bản + hoa hồng hấp dẫn',
      'Thưởng theo doanh số',
      'Chế độ bảo hiểm đầy đủ',
      'Cơ hội đi công tác Nhật Bản',
      'Đào tạo kỹ năng chuyên môn'
    ],
    deadline: '2024-03-20'
  }
];

const CareersPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Vị trí tuyển dụng
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Khám phá cơ hội nghề nghiệp tại Trung tâm Tiếng Nhật
        </Typography>

        <Grid container spacing={4}>
          {jobPositions.map((job, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {job.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {job.location}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <WorkIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {job.type}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <MonetizationOnIcon color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {job.salary}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Chip 
                        label={`Hạn nộp: ${new Date(job.deadline).toLocaleDateString('vi-VN')}`}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>

                    <Typography variant="body1" paragraph>
                      {job.description}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                      Yêu cầu:
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {job.requirements.map((req, idx) => (
                        <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          • {req}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`/careers/${job.id}`)}
                      >
                        Xem chi tiết
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Quy trình ứng tuyển
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            1. Gửi CV và thư xin việc qua email: careers@japanese-center.com<br />
            2. Phỏng vấn trực tiếp tại trung tâm<br />
            3. Dạy thử (đối với vị trí giáo viên)<br />
            4. Thông báo kết quả và ký hợp đồng
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default CareersPage;
