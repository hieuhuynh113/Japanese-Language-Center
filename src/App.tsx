import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import SchedulePage from './pages/SchedulePage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/news/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import JobDetailPage from './pages/news/JobDetailPage';
import StudyTipDetailPage from './pages/news/StudyTipDetailPage';
import CareerDetailPage from './pages/careers/JobDetailPage';
import JobApplicationPage from './pages/careers/JobApplicationPage';

// About Pages
import TeachersPage from './pages/about/TeachersPage';
import FacilitiesPage from './pages/about/FacilitiesPage';
import AchievementsPage from './pages/about/AchievementsPage';

// Course Pages
import N5CoursePage from './pages/courses/N5CoursePage';
import N4CoursePage from './pages/courses/N4CoursePage';
import N3CoursePage from './pages/courses/N3CoursePage';
import OnlineCoursePage from './pages/courses/OnlineCoursePage';
import OfflineCoursePage from './pages/courses/OfflineCoursePage';

// Study Abroad Pages
import LanguageSchoolPage from './pages/study-abroad/LanguageSchoolPage';
import CollegePage from './pages/study-abroad/CollegePage';
import UniversityPage from './pages/study-abroad/UniversityPage';
import ExperiencesPage from './pages/study-abroad/ExperiencesPage';
import ConsultingPage from './pages/study-abroad/ConsultingPage';
import ScholarshipsPage from './pages/study-abroad/ScholarshipsPage';
import PartnersPage from './pages/study-abroad/PartnersPage';
import ScholarshipDetailPage from './pages/study-abroad/ScholarshipDetailPage';

// Schedule Pages
import OpeningsPage from './pages/schedule/OpeningsPage';
import TimetablePage from './pages/schedule/TimetablePage';
import JLPTPage from './pages/schedule/JLPTPage';

// News Pages
import CulturePage from './pages/news/CulturePage';
import StudyTipsPage from './pages/news/StudyTipsPage';
import JobsPage from './pages/news/JobsPage';
import CultureDetailPage from './pages/news/CultureDetailPage';

// Careers Pages
import CareersPage from './pages/careers/CareersPage';
import EnvironmentPage from './pages/careers/EnvironmentPage';
import BenefitsPage from './pages/careers/BenefitsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: { xs: '56px', sm: '88px' },
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Course Routes */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/n5" element={<N5CoursePage />} />
            <Route path="/courses/n4" element={<N4CoursePage />} />
            <Route path="/courses/n3" element={<N3CoursePage />} />
            <Route path="/courses/online" element={<OnlineCoursePage />} />
            <Route path="/courses/offline" element={<OfflineCoursePage />} />
            
            {/* About Routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/teachers" element={<TeachersPage />} />
            <Route path="/about/facilities" element={<FacilitiesPage />} />
            <Route path="/about/achievements" element={<AchievementsPage />} />
            
            {/* Study Abroad Routes */}
            <Route path="/study-abroad" element={<StudyAbroadPage />} />
            <Route path="/study-abroad/language-school" element={<LanguageSchoolPage />} />
            <Route path="/study-abroad/college" element={<CollegePage />} />
            <Route path="/study-abroad/university" element={<UniversityPage />} />
            <Route path="/study-abroad/experiences" element={<ExperiencesPage />} />
            <Route path="/study-abroad/consulting" element={<ConsultingPage />} />
            <Route path="/study-abroad/scholarships" element={<ScholarshipsPage />} />
            <Route path="/study-abroad/scholarships/:scholarshipId" element={<ScholarshipDetailPage />} />
            <Route path="/study-abroad/partners" element={<PartnersPage />} />

            {/* Schedule Routes */}
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/schedule/openings" element={<OpeningsPage />} />
            <Route path="/schedule/timetable" element={<TimetablePage />} />
            <Route path="/schedule/jlpt" element={<JLPTPage />} />

            {/* News Routes */}
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/news/culture" element={<CulturePage />} />
            <Route path="/news/culture/:id" element={<CultureDetailPage />} />
            <Route path="/news/study-tips" element={<StudyTipsPage />} />
            <Route path="/news/study-tips/:postId" element={<StudyTipDetailPage />} />
            <Route path="/news/jobs" element={<JobsPage />} />
            <Route path="/news/jobs/:jobId" element={<JobDetailPage />} />

            {/* Careers Routes */}
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:jobId" element={<CareerDetailPage />} />
            <Route path="/careers/:jobId/apply" element={<JobApplicationPage />} />
            <Route path="/careers/environment" element={<EnvironmentPage />} />
            <Route path="/careers/benefits" element={<BenefitsPage />} />

            {/* Contact Route */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
