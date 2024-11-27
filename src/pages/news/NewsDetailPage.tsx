import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Button,
  Drawer,
  IconButton,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
  List as ListIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { news } from '../../data/news';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const createId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Find the news item based on the ID from the URL
  const newsItem = news.find(item => item.id === id);

  useEffect(() => {
    if (!newsItem) {
      navigate('/news');
      return;
    }

    if (newsItem.content) {
      const headers = newsItem.content
        .split('\n')
        .filter(line => line.startsWith('#'))
        .map(line => {
          const level = line.match(/^#+/)?.[0].length || 0;
          const text = line.replace(/^#+\s/, '');
          return { id: createId(text), text, level };
        });
      setToc(headers);
    }
  }, [newsItem, navigate]);

  if (!newsItem) {
    return (
      <Container>
        <Typography variant="h4" sx={{ my: 4 }}>
          Không tìm thấy bài viết
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/news')}
          variant="contained"
        >
          Quay lại trang tin tức
        </Button>
      </Container>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  const TableOfContents = () => (
    <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.50', position: 'sticky', top: 100 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <ListIcon sx={{ mr: 1 }} />
        <Typography variant="h6">Mục lục</Typography>
      </Box>
      <List dense>
        {toc.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => scrollToSection(item.id)}
            sx={{
              pl: item.level,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'primary.contrastText',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                sx: {
                  fontSize: item.level === 1 ? '1rem' : '0.9rem',
                  fontWeight: item.level === 1 ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link component={RouterLink} to="/" color="inherit">
            Trang chủ
          </Link>
          <Link component={RouterLink} to="/news" color="inherit">
            Tin tức
          </Link>
          <Typography color="text.primary">{newsItem.title}</Typography>
        </Breadcrumbs>

        {/* Back button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/news')}
          sx={{ mb: 3 }}
        >
          Quay lại
        </Button>

        {/* Mobile Table of Contents Toggle */}
        {isMobile && toc.length > 0 && (
          <Button
            startIcon={<ListIcon />}
            onClick={() => setDrawerOpen(true)}
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          >
            Xem mục lục
          </Button>
        )}

        {/* Mobile Drawer for Table of Contents */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250, p: 2 }}>
            <TableOfContents />
          </Box>
        </Drawer>

        {/* Main content grid */}
        <Grid container spacing={4}>
          {/* Content */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {newsItem.title}
              </Typography>

              <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventIcon color="primary" />
                  <Typography variant="body2">{newsItem.date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon color="primary" />
                  <Typography variant="body2">{newsItem.author}</Typography>
                </Box>
              </Box>

              {/* Tags */}
              <Box sx={{ mb: 3 }}>
                {newsItem.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{ mr: 1, mb: 1 }}
                    size="small"
                  />
                ))}
              </Box>

              {/* Featured Image */}
              {newsItem.image && (
                <Box
                  component="img"
                  src={newsItem.image}
                  alt={newsItem.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 4,
                  }}
                />
              )}

              {/* Content */}
              <Box sx={{ typography: 'body1' }}>
                <ReactMarkdown
                  components={{
                    h1: ({ children }: any) => (
                      <Typography
                        variant="h3"
                        id={createId(children as string)}
                        sx={{ mt: 4, mb: 2 }}
                      >
                        {children}
                      </Typography>
                    ),
                    h2: ({ children }: any) => (
                      <Typography
                        variant="h4"
                        id={createId(children as string)}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        {children}
                      </Typography>
                    ),
                    h3: ({ children }: any) => (
                      <Typography
                        variant="h5"
                        id={createId(children as string)}
                        sx={{ mt: 2, mb: 1 }}
                      >
                        {children}
                      </Typography>
                    ),
                    p: ({ children }: any) => (
                      <Typography variant="body1" paragraph>
                        {children}
                      </Typography>
                    ),
                    ul: ({ children }: any) => (
                      <Box component="ul" sx={{ pl: 2 }}>
                        {children}
                      </Box>
                    ),
                  }}
                >
                  {newsItem.content}
                </ReactMarkdown>
              </Box>

              {/* Gallery */}
              {newsItem.gallery && (
                <Grid container spacing={2} sx={{ mt: 4 }}>
                  {newsItem.gallery.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box
                        component="img"
                        src={image.original}
                        alt={image.description || `Hình ảnh ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: 1,
                        }}
                      />
                      {image.description && (
                        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                          {image.description}
                        </Typography>
                      )}
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>

          {/* Table of Contents Sidebar */}
          {!isMobile && toc.length > 0 && (
            <Grid item md={4}>
              <TableOfContents />
            </Grid>
          )}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default NewsDetailPage;
