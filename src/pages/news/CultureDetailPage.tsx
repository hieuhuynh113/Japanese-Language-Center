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
} from '@mui/material';
import { culturePosts } from './CulturePage';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListIcon from '@mui/icons-material/List';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const CultureDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = culturePosts.find((post) => post.id === id);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!post) {
      navigate('/news/culture');
      return;
    }

    if (post.content) {
      const headers = post.content
        .split('\n')
        .filter(line => line.startsWith('#'))
        .map(line => {
          const level = line.match(/^#+/)?.[0].length || 0;
          const text = line.replace(/^#+\s/, '');
          return { id: createId(text), text, level };
        });
      setToc(headers);
    }
  }, [post, navigate]);

  if (!post) {
    return null;
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

  const components = {
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
    li: ({ children }: any) => (
      <Typography component="li" sx={{ mb: 0.5 }}>
        {children}
      </Typography>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Box py={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton
              onClick={() => navigate('/news/culture')}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4">{post.title}</Typography>
          </Box>

          <Box display="flex" gap={2} mb={4} flexWrap="wrap">
            <Box display="flex" alignItems="center">
              <CalendarTodayIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2">{post.date}</Typography>
            </Box>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {post.image && (
                <Box
                  component="img"
                  src={post.image}
                  alt={post.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    mb: 4,
                  }}
                />
              )}
              <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
            </Grid>
            {!isMobile && (
              <Grid item md={4}>
                <TableOfContents />
              </Grid>
            )}
          </Grid>

          {isMobile && (
            <>
              <Button
                variant="outlined"
                startIcon={<ListIcon />}
                onClick={() => setDrawerOpen(true)}
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
              >
                Mục lục
              </Button>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }}>
                  <TableOfContents />
                </Box>
              </Drawer>
            </>
          )}
        </Box>
      </Container>
    </motion.div>
  );
};

export default CultureDetailPage;
