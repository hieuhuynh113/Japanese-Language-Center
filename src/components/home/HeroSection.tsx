import React from 'react';
import { Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        mt: 0, // Remove margin top
      }}
    >
      <Box
        component="img"
        src="https://thethaovanhoa.mediacdn.vn/372676912336973824/2022/12/15/image001-1671095078862468239333.jpg"
        alt="Japanese Language Center Hero"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          verticalAlign: 'top', // Prevent any default spacing
        }}
      />
    </Box>
  );
};

export default HeroSection;
