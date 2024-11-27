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
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  LocalOffer as TagIcon,
} from '@mui/icons-material';
import { news } from '../data/news';

const NewsPage = () => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'event':
        return 'success';
      case 'announcement':
        return 'primary';
      case 'culture':
        return 'secondary';
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
      case 'culture':
        return 'Văn hóa';
      default:
        return category;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Tin tức & Sự kiện
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Cập nhật những tin tức mới nhất về trung tâm và văn hóa Nhật Bản
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {news.map((item) => (
          <Grid item key={item.id} xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={item.image}
                alt={item.title}
              />
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
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(`/news/${item.id}`)}
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
    </Container>
  );
};

export default NewsPage;
