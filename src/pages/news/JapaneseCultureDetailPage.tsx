import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Chip,
  Divider,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Card,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
  AccessTime as AccessTimeIcon,
  Share as ShareIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { culturePosts, CulturePost } from '../../data/culturePosts';

const TableOfContents = ({ sections, activeSection }: { sections: any[], activeSection: string }) => {
  return (
    <Card sx={{ p: 2, position: 'sticky', top: 100 }}>
      <Typography variant="h6" gutterBottom>
        Mục lục
      </Typography>
      <List dense>
        {sections.map((section) => (
          <ListItem
            key={section.id}
            component="a"
            href={`#${section.id}`}
            sx={{
              color: activeSection === section.id ? 'primary.main' : 'text.primary',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

const ShareButtons = ({ url, title }: { url: string, title: string }) => {
  const handleShare = (platform: string) => {
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Tooltip title="Chia sẻ lên Facebook">
        <IconButton onClick={() => handleShare('facebook')} size="small">
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Chia sẻ lên Twitter">
        <IconButton onClick={() => handleShare('twitter')} size="small">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Chia sẻ lên LinkedIn">
        <IconButton onClick={() => handleShare('linkedin')} size="small">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const JapaneseCultureDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeSection, setActiveSection] = useState('');

  const post = culturePosts.find((p: CulturePost) => p.id === postId);

  useEffect(() => {
    const handleScroll = () => {
      if (post) {
        const sections = post.content.sections;
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section && section.getBoundingClientRect().top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) {
    return (
      <Container>
        <Typography>Không tìm thấy bài viết</Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/news/japanese-culture')}
        >
          Quay lại
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link component={RouterLink} to="/" color="inherit">
            Trang chủ
          </Link>
          <Link component={RouterLink} to="/news" color="inherit">
            Tin tức
          </Link>
          <Link component={RouterLink} to="/news/japanese-culture" color="inherit">
            Văn hóa Nhật Bản
          </Link>
          <Typography color="text.primary">{post.title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                {post.title}
              </Typography>

              {/* Meta information */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EventIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    {new Date(post.date).toLocaleDateString('vi-VN')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">{post.author}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">{post.readingTime} phút đọc</Typography>
                </Box>
                <ShareButtons 
                  url={window.location.href} 
                  title={post.title}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                <Chip label={post.category} color="primary" />
                {post.tags.map((tag) => (
                  <Chip key={tag} label={tag} variant="outlined" size="small" />
                ))}
              </Box>

              {/* Featured image */}
              <Box
                component="img"
                src={post.image}
                alt={post.title}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 4,
                }}
              />

              {/* Introduction */}
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  mb: 4
                }}
              >
                {post.content.introduction}
              </Typography>

              <Divider sx={{ my: 4 }} />

              {/* Content sections */}
              {post.content.sections.map((section) => (
                <Box key={section.id} id={section.id} sx={{ scrollMarginTop: '100px' }}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {section.content}
                  </Typography>
                  {section.image && (
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.title}
                      sx={{
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        borderRadius: 2,
                        my: 3,
                      }}
                    />
                  )}
                </Box>
              ))}

              <Divider sx={{ my: 4 }} />

              {/* Conclusion */}
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'text.secondary',
                }}
              >
                {post.content.conclusion}
              </Typography>

              {/* Navigation button */}
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/news/japanese-culture')}
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
              >
                Quay lại danh sách bài viết
              </Button>
            </Paper>
          </Grid>

          {/* Table of contents */}
          {isDesktop && (
            <Grid item md={4}>
              <TableOfContents 
                sections={post.content.sections} 
                activeSection={activeSection}
              />
            </Grid>
          )}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default JapaneseCultureDetailPage;
