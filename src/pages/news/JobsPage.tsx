import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Box,
  Pagination,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Paper,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  MonetizationOn as SalaryIcon,
  School as EducationIcon,
  Language as LanguageIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NewsFilter, { NewsFilters } from '../../components/NewsFilter';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  requirements: {
    language: string;
    education: string;
    experience: string;
    details: string[];
  };
  benefits: string[];
  date: string;
  category?: string;
  tags: string[];
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export const jobPosts: Job[] = [
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
  },
  {
    id: 'job-4',
    title: 'Thông Dịch Viên Tiếng Nhật',
    company: 'GHI Solutions Corporation',
    location: 'Bình Dương',
    type: 'Toàn thời gian',
    salary: '25-30 triệu',
    requirements: {
      language: 'JLPT N1',
      education: 'Đại học',
      experience: '3 năm kinh nghiệm',
      details: [
        'Thông thạo tiếng Nhật (JLPT N1)',
        'Kinh nghiệm thông dịch trong môi trường doanh nghiệp',
        'Kỹ năng giao tiếp và xử lý tình huống tốt',
        'Có thể đi công tác ngắn hạn tại Nhật Bản'
      ]
    },
    benefits: [
      'Lương cạnh tranh theo năng lực',
      'Phụ cấp đi lại và công tác phí',
      'Được đào tạo nâng cao nghiệp vụ tại Nhật',
      'Chế độ bảo hiểm và phúc lợi hấp dẫn',
      'Môi trường làm việc quốc tế'
    ],
    description: 'GHI Solutions Corporation cần tuyển Thông dịch viên tiếng Nhật có kinh nghiệm để hỗ trợ các cuộc họp, đàm phán và dự án với đối tác Nhật Bản. Công việc yêu cầu kỹ năng thông dịch chuyên nghiệp và khả năng làm việc trong môi trường áp lực cao.',
    tags: ['Thông dịch', 'Tiếng Nhật', 'N1', 'Full-time'],
    date: '2024-01-16',
    contactEmail: 'careers@ghisolutions.com',
    contactPhone: '0274 9876 543'
  }
];

const JobsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [filters, setFilters] = React.useState<NewsFilters>({
    search: '',
    category: '',
    selectedTags: [],
    dateRange: {
      start: '',
      end: '',
    },
  });
  const [bookmarkedPosts, setBookmarkedPosts] = React.useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarkedJobPosts');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedJob, setSelectedJob] = React.useState<Job | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);

  const postsPerPage = 2;

  // Extract unique categories and tags
  const categories = Array.from(new Set(jobPosts.map((item) => item.category))).filter((category): category is string => category !== undefined);
  const tags = Array.from(new Set(jobPosts.map(job => [job.type, job.location, job.requirements.language]).flat()));

  // Apply filters to posts
  const filteredPosts = jobPosts.filter((item) => {
    const matchesSearch = !filters.search || 
      item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.company.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory = !filters.category || item.category === filters.category;

    const jobTags = [item.type, item.location, item.requirements.language];
    const matchesTags = filters.selectedTags.length === 0 ||
      filters.selectedTags.every(tag => jobTags.includes(tag));

    const itemDate = new Date(item.date);
    const matchesDateRange = 
      (!filters.dateRange.start || new Date(filters.dateRange.start) <= itemDate) &&
      (!filters.dateRange.end || new Date(filters.dateRange.end) >= itemDate);

    return matchesSearch && matchesCategory && matchesTags && matchesDateRange;
  });

  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (newFilters: NewsFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => {
      const newBookmarks = prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId];
      localStorage.setItem('bookmarkedJobPosts', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const JobCard = ({ job }: { job: Job }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 6,
          },
        }}
        onClick={() => handleJobClick(job)}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              {job.title}
            </Typography>
            <IconButton 
              size="small" 
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(job.id);
              }}
            >
              {bookmarkedPosts.includes(job.id) ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
            </IconButton>
          </Box>
          
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {job.company}
          </Typography>

          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon fontSize="small" color="action" />
                <Typography variant="body2">{job.location}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SalaryIcon fontSize="small" color="action" />
                <Typography variant="body2">{job.salary}</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {job.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{ 
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );

  const JobDetailDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
    >
      {selectedJob && (
        <>
          <DialogTitle>
            <Typography variant="h5" component="div">
              {selectedJob.title}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {selectedJob.company}
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={0} sx={{ p: 2, backgroundColor: theme.palette.grey[50] }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationIcon color="action" />
                        <Typography>{selectedJob.location}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SalaryIcon color="action" />
                        <Typography>{selectedJob.salary}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TimeIcon color="action" />
                        <Typography>{selectedJob.type}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LanguageIcon color="action" />
                        <Typography>{selectedJob.requirements.language}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Mô tả công việc</Typography>
                <Typography variant="body1" paragraph>
                  {selectedJob.description}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Yêu cầu</Typography>
                <List>
                  {selectedJob.requirements.details.map((detail, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <EducationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Quyền lợi</Typography>
                <List>
                  {selectedJob.benefits.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>Liên hệ</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography>
                    Email: {selectedJob.contactEmail}
                  </Typography>
                  <Typography>
                    Điện thoại: {selectedJob.contactPhone}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Đóng</Button>
            <Button 
              variant="contained" 
              onClick={() => {
                // Handle apply action
                window.location.href = `mailto:${selectedJob.contactEmail}?subject=Ứng tuyển: ${selectedJob.title}`;
              }}
            >
              Ứng tuyển ngay
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );

  // Simulate loading
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [filters, page]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Việc làm tiếng Nhật
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <NewsFilter
          categories={categories}
          tags={tags}
          onFilterChange={handleFilterChange}
        />
      </Box>

      <Grid container spacing={3}>
        {isLoading ? (
          Array.from(new Array(postsPerPage)).map((_, index) => (
            <Grid item xs={12} key={index}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          ))
        ) : currentPosts.length > 0 ? (
          currentPosts.map((job) => (
            <Grid item xs={12} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography>Không tìm thấy việc làm phù hợp với điều kiện tìm kiếm</Typography>
            </Paper>
          </Grid>
        )}
      </Grid>

      {filteredPosts.length > postsPerPage && (
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.ceil(filteredPosts.length / postsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size={isMobile ? 'small' : 'medium'}
          />
        </Box>
      )}

      <JobDetailDialog />
    </Container>
  );
};

export default JobsPage;
