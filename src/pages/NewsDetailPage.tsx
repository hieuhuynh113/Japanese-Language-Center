import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Paper,
  Button,
  Breadcrumbs,
  Link,
  Dialog,
  IconButton,
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  LocalOffer as TagIcon,
  ArrowBack as ArrowBackIcon,
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
} from '@mui/icons-material';
import { news } from '../data/news';
import ImageGallery from 'react-image-gallery';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const NewsDetailPage: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [zoomDialogOpen, setZoomDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const newsItem = news.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          Không tìm thấy bài viết
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/news')}
          >
            Quay lại trang tin tức
          </Button>
        </Box>
      </Container>
    );
  }

  const getCategoryColor = (category: string): "success" | "primary" | "secondary" | "default" => {
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

  const getCategoryLabel = (category: string): string => {
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

  const handleImageLoad = (): void => {
    setLoading(false);
  };

  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
    setZoomDialogOpen(true);
  };

  const galleryImages: ReactImageGalleryItem[] = newsItem.gallery?.map((item) => ({
    original: item.original,
    thumbnail: item.thumbnail,
    description: item.description,
    originalHeight: '500px',
    thumbnailHeight: '80px',
  })) || [];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          color="inherit"
          href="#"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          Trang chủ
        </Link>
        <Link
          color="inherit"
          href="#"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate('/news');
          }}
        >
          Tin tức
        </Link>
        <Typography color="text.primary">{newsItem.title}</Typography>
      </Breadcrumbs>

      {/* News Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {newsItem.title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <Chip
            label={getCategoryLabel(newsItem.category)}
            color={getCategoryColor(newsItem.category)}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EventIcon sx={{ mr: 1 }} color="action" />
            <Typography variant="body2" color="text.secondary">
              {new Date(newsItem.date).toLocaleDateString('vi-VN')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ mr: 1 }} color="action" />
            <Typography variant="body2" color="text.secondary">
              {newsItem.author}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Featured Image with Loading */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        {loading && (
          <Skeleton
            height={500}
            style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
          />
        )}
        <Box
          component="img"
          src={newsItem.image}
          alt={newsItem.title}
          onLoad={handleImageLoad}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: 2,
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s',
            cursor: 'zoom-in',
          }}
          onClick={() => handleImageClick(0)}
        />
        <IconButton
          sx={{
            position: 'absolute',
            right: 8,
            bottom: 8,
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
          onClick={() => handleImageClick(0)}
        >
          <ZoomInIcon />
        </IconButton>
      </Box>

      {/* Image Gallery */}
      {newsItem.gallery && newsItem.gallery.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Hình ảnh
          </Typography>
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={true}
            onClick={(_event: React.MouseEvent, index: number) => handleImageClick(index)}
            thumbnailPosition="bottom"
          />
        </Box>
      )}

      {/* News Content */}
      <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'background.default' }}>
        <Typography variant="subtitle1" paragraph>
          {newsItem.description}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {newsItem.content}
          </Typography>
        </Box>
      </Paper>

      {/* Tags */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Tags
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {newsItem.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              icon={<TagIcon />}
              onClick={() => {
                // Handle tag click
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/news')}
        >
          Quay lại trang tin tức
        </Button>
      </Box>

      {/* Image Zoom Dialog */}
      <Dialog
        open={zoomDialogOpen}
        onClose={() => setZoomDialogOpen(false)}
        maxWidth="xl"
        fullWidth
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1,
            }}
            onClick={() => setZoomDialogOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={false}
            startIndex={selectedImageIndex}
            showThumbnails={false}
            useBrowserFullscreen={false}
          />
        </Box>
      </Dialog>
    </Container>
  );
};

export default NewsDetailPage;
