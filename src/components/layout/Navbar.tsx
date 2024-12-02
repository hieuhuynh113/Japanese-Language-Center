import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide,
  Stack,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const pages = [
  {
    title: 'Trang Chủ',
    path: '/',
  },
  {
    title: 'Khóa Học',
    path: '/courses',
    children: [
      { title: 'Tất Cả Khóa Học', path: '/courses' },
      { title: 'Khóa Học N5', path: '/courses/n5' },
      { title: 'Khóa Học N4', path: '/courses/n4' },
      { title: 'Khóa Học N3', path: '/courses/n3' },
      { title: 'Lớp Học Online', path: '/courses/online' },
      { title: 'Lớp Học Offline', path: '/courses/offline' },
    ],
  },
  {
    title: 'Về Chúng Tôi',
    path: '/about',
    children: [
      { title: 'Giới Thiệu', path: '/about' },
      { title: 'Đội Ngũ Giảng Viên', path: '/about/teachers' },
      { title: 'Cơ Sở Vật Chất', path: '/about/facilities' },
      { title: 'Thành Tích', path: '/about/achievements' },
    ],
  },
  {
    title: 'Du Học',
    path: '/study-abroad',
    children: [
      { title: 'Tư Vấn Du Học', path: '/study-abroad/consulting' },
      { title: 'Học Bổng', path: '/study-abroad/scholarships' },
      { title: 'Kinh Nghiệm Du Học', path: '/study-abroad/experiences' },
      { title: 'Đối Tác Trường Học', path: '/study-abroad/partners' },
    ],
  },
  {
    title: 'Lịch Học',
    path: '/schedule',
    children: [
      { title: 'Lịch Khai Giảng', path: '/schedule/openings' },
      { title: 'Thời Khóa Biểu', path: '/schedule/timetable' },
      { title: 'Lịch Thi JLPT', path: '/schedule/jlpt' },
    ],
  },
  {
    title: 'Tin Tức',
    path: '/news',
    children: [
      { title: 'Tin Tức & Sự Kiện', path: '/news' },
      { title: 'Góc Học Tập', path: '/news/study-tips' },
      { title: 'Cơ Hội Việc Làm', path: '/news/jobs' },
      { title: 'Văn hóa Nhật Bản', path: '/news/japanese-culture' },
    ],
  },
  {
    title: 'Tuyển Dụng',
    path: '/careers',
    children: [
      { title: 'Vị Trí Tuyển Dụng', path: '/careers' },
      { title: 'Môi Trường Làm Việc', path: '/careers/environment' },
      { title: 'Quyền Lợi', path: '/careers/benefits' },
    ],
  },
  {
    title: 'Liên Hệ',
    path: '/contact',
  },
];

interface Props {
  children: React.ReactElement;
  window?: () => Window;
}

const StyledAppBar = styled(AppBar)({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(6px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 56,
  [theme.breakpoints.up('sm')]: {
    minHeight: 88,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const StyledLink = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
});

const LogoText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #e94560 30%, #16213e 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  letterSpacing: '0.5px',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.95rem',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  minWidth: '100px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(233, 69, 96, 0.08)',
  },
}));

function HideOnScroll({ children, window }: Props) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = (page: string) => {
    setHoveredMenu(page);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <HideOnScroll>
      <StyledAppBar
        position="fixed"
        sx={{
          boxShadow: scrolled ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <StyledToolbar disableGutters>
            {/* Logo for larger screens */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }}>
              <StyledLink to="/">
                <Box
                  component="img"
                  src="https://senquocte.com/wp-content/uploads/2023/03/cropped-Logo-512x512-nen-trang.jpg"
                  alt="日本語センター"
                  sx={{
                    height: 50,
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </StyledLink>
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    borderRadius: 2,
                    mt: 1.5,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  },
                }}
              >
                {pages.map((page) => (
                  <Box key={page.path}>
                    <MenuItem
                      onClick={() => {
                        if (!page.children) {
                          handleCloseNavMenu();
                        }
                      }}
                      component={page.children ? 'div' : StyledLink}
                      to={!page.children ? page.path : undefined}
                      selected={location.pathname === page.path}
                      sx={{
                        minWidth: 180,
                        borderRadius: 1,
                        mx: 1,
                        my: 0.5,
                      }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                    {page.children && (
                      <Box sx={{ pl: 2 }}>
                        {page.children.map((child) => (
                          <MenuItem
                            key={child.path}
                            onClick={handleCloseNavMenu}
                            component={StyledLink}
                            to={child.path}
                            selected={location.pathname === child.path}
                            sx={{
                              minWidth: 160,
                              borderRadius: 1,
                              mx: 2,
                              my: 0.5,
                              fontSize: '0.9rem',
                            }}
                          >
                            <Typography textAlign="center">{child.title}</Typography>
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <StyledLink to="/">
                <Box
                  component="img"
                  src="https://senquocte.com/wp-content/uploads/2023/03/cropped-Logo-512x512-nen-trang.jpg"
                  alt="日本語センター"
                  sx={{
                    height: 40,
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </StyledLink>
            </Box>

            {/* Desktop menu */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {pages.map((page) => (
                <Box
                  key={page.path}
                  onMouseEnter={() => handleMouseEnter(page.path)}
                  onMouseLeave={handleMouseLeave}
                  sx={{ 
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {page.children ? (
                    <>
                      <NavButton
                        id={`nav-button-${page.path}`}
                        className={location.pathname === page.path ? 'active' : ''}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(233, 69, 96, 0.08)',
                          },
                        }}
                      >
                        {page.title}
                      </NavButton>
                      <Menu
                        open={hoveredMenu === page.path}
                        anchorEl={document.getElementById(`nav-button-${page.path}`)}
                        sx={{
                          '& .MuiPaper-root': {
                            position: 'absolute',
                            borderRadius: 2,
                            mt: 0.5,
                            minWidth: 180,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            pointerEvents: 'auto',
                          },
                          pointerEvents: 'none',
                          position: 'absolute',
                          zIndex: 1300,
                        }}
                        MenuListProps={{
                          onMouseLeave: handleMouseLeave,
                          style: { pointerEvents: 'auto' },
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        slotProps={{
                          paper: {
                            sx: {
                              mt: 0.5,
                              '& .MuiList-root': {
                                py: 1,
                              },
                            },
                          },
                        }}
                      >
                        {page.children.map((child) => (
                          <MenuItem
                            key={child.path}
                            component={StyledLink}
                            to={child.path}
                            selected={location.pathname === child.path}
                            onClick={handleMouseLeave}
                            sx={{
                              borderRadius: 1,
                              mx: 1,
                              my: 0.5,
                              '&:hover': {
                                backgroundColor: 'rgba(233, 69, 96, 0.08)',
                              },
                            }}
                          >
                            {child.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <StyledLink to={page.path}>
                      <NavButton
                        onClick={handleCloseNavMenu}
                        className={location.pathname === page.path ? 'active' : ''}
                      >
                        {page.title}
                      </NavButton>
                    </StyledLink>
                  )}
                </Box>
              ))}
            </Stack>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Navbar;
