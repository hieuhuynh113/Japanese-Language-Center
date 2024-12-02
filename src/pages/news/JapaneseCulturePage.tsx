import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Pagination,
} from '@mui/material';
import { Event as EventIcon, Person as PersonIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { culturePosts } from '../../data/culturePosts';

const JapaneseCulturePage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const postsPerPage = 2;

  // Tính toán các bài viết cho trang hiện tại
  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = culturePosts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(culturePosts.length / postsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Văn hóa Nhật Bản
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Khám phá những nét văn hóa độc đáo và đặc sắc của đất nước Mặt trời mọc
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
        {currentPosts.map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
                onClick={() => navigate(`/news/japanese-culture/${post.id}`)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                  sx={{ 
                    objectFit: 'cover',
                  }}
                />
                <CardContent 
                  sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '64px',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '60px',
                        mb: 2,
                      }}
                    >
                      {post.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EventIcon sx={{ fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body2" color="text.secondary">
                          {new Date(post.date).toLocaleDateString('vi-VN')}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={{ fontSize: 20, mr: 0.5 }} />
                        <Typography variant="body2" color="text.secondary">
                          {post.author}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label={post.category} size="small" color="primary" />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Container>
  );
};

export default JapaneseCulturePage;
