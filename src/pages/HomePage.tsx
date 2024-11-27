import React, { useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import FeaturedCourses from '../components/home/FeaturedCourses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollY } = useScroll();
  const controls = useAnimation();

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          zIndex: -1,
          y: smoothBackgroundY
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '120%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(238,242,255,0.5) 100%)'
          }}
        />
      </motion.div>

      <Box>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          initial="hidden"
          whileHover="hover"
        >
          <FeaturedCourses />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          initial="hidden"
          whileHover="hover"
        >
          <WhyChooseUs />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          initial="hidden"
          whileHover="hover"
        >
          <TestimonialsSection />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
          initial="hidden"
          whileHover="hover"
        >
          <NewsSection />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HomePage;
