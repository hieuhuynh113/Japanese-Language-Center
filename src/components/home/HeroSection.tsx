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
        src="https://senquocte.com/wp-content/uploads/2023/05/anhbiaweb-1600-×-852-px.png"
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
