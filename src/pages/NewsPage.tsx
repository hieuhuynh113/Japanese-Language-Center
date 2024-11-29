import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Pagination,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  LocalOffer as TagIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { news } from '../data/news';
import NewsFilter, { NewsFilters } from '../components/NewsFilter';

// Extract unique categories and tags from news data
const categories = Array.from(new Set(news.map((item) => item.category)));
const tags = Array.from(new Set(news.flatMap((item) => item.tags)));

const NewsPage = () => {
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
    const saved = localStorage.getItem('bookmarkedPosts');
    return saved ? JSON.parse(saved) : [];
  });

  const postsPerPage = 2;

  // Apply filters to news items
  const filteredPosts = news.filter((item) => {
    const matchesSearch = !filters.search || 
      item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory = !filters.category || item.category === filters.category;

    const matchesTags = filters.selectedTags.length === 0 ||
      filters.selectedTags.every(tag => item.tags.includes(tag));

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
    setPage(1); // Reset to first page when filters change
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => {
      const newBookmarks = prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId];
      localStorage.setItem('bookmarkedPosts', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const handleShare = async (post: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.origin + `/news/${post.id}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.origin + `/news/${post.id}`);
      // You might want to show a snackbar/toast here to indicate the URL was copied
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'event':
        return 'success';
      case 'announcement':
        return 'primary';
      default:
        return 'default';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'event':
        return 'Sự kiện';
      case 'announcement':
        return 'Thông báo';
      default:
        return category;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Tin tức & Sự kiện
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Cập nhật những tin tức mới nhất về trung tâm và văn hóa Nhật Bản
        </Typography>

        <NewsFilter
          categories={categories}
          tags={tags}
          onFilterChange={handleFilterChange}
        />

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {currentPosts.map((item) => (
            <Grid item key={item.id} xs={12} md={6}>
              <Card
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt={item.title}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Tooltip title="Chia sẻ">
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(item);
                        }}
                        sx={{ bgcolor: 'background.paper' }}
                        size="small"
                      >
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={bookmarkedPosts.includes(item.id) ? "Bỏ lưu" : "Lưu bài viết"}>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(item.id);
                        }}
                        sx={{ bgcolor: 'background.paper' }}
                        size="small"
                      >
                        {bookmarkedPosts.includes(item.id) ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    pb: 2,
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={getCategoryLabel(item.category)}
                      color={getCategoryColor(item.category) as any}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EventIcon sx={{ mr: 1 }} color="action" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                          {new Date(item.date).toLocaleDateString('vi-VN')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={{ mr: 1 }} color="action" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                          {item.author}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      {item.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          icon={<TagIcon />}
                          onClick={(e) => {
                            e.stopPropagation();
                            setFilters(prev => ({
                              ...prev,
                              selectedTags: [tag]
                            }));
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        switch (item.category) {
                          case 'study-tips':
                            navigate(`/news/study-tips/${item.id}`);
                            break;
                          case 'jobs':
                            navigate(`/news/jobs/${item.id}`);
                            break;
                          default:
                            navigate(`/news/${item.id}`);
                            break;
                        }
                      }}
                      sx={{ mt: 'auto' }}
                    >
                      Xem thêm
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(filteredPosts.length / postsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </motion.div>
  );
};

export default NewsPage;
