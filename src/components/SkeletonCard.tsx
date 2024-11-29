import React from 'react';
import { Card, CardContent, Skeleton, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SkeletonCardProps {
  variant?: 'news' | 'job' | 'culture';
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ variant = 'news' }) => {
  const getSkeletonContent = () => {
    switch (variant) {
      case 'job':
        return (
          <>
            <Skeleton variant="rectangular" height={60} />
            <Box sx={{ mt: 2 }}>
              <Skeleton width="60%" height={24} />
              <Skeleton width="40%" height={24} sx={{ mt: 1 }} />
            </Box>
            <Box sx={{ mt: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Skeleton variant="circular" width={24} height={24} />
                  <Skeleton width="70%" height={20} sx={{ ml: 2 }} />
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} width={60} height={24} />
              ))}
            </Box>
          </>
        );

      case 'culture':
        return (
          <>
            <Skeleton variant="rectangular" height={200} />
            <Box sx={{ mt: 2 }}>
              <Skeleton width="80%" height={28} />
              <Skeleton width="100%" height={20} sx={{ mt: 1 }} />
              <Skeleton width="90%" height={20} sx={{ mt: 0.5 }} />
              <Skeleton width="95%" height={20} sx={{ mt: 0.5 }} />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {[...Array(2)].map((_, i) => (
                <Skeleton key={i} width={80} height={24} />
              ))}
            </Box>
          </>
        );

      default: // news
        return (
          <>
            <Skeleton variant="rectangular" height={240} />
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <Skeleton width={80} height={24} />
                <Skeleton width={120} height={24} />
              </Box>
              <Skeleton width="90%" height={32} />
              <Skeleton width="100%" height={20} sx={{ mt: 1 }} />
              <Skeleton width="95%" height={20} sx={{ mt: 0.5 }} />
              <Skeleton width="90%" height={20} sx={{ mt: 0.5 }} />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} width={70} height={24} />
              ))}
            </Box>
          </>
        );
    }
  };

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ height: '100%' }}
    >
      <CardContent>{getSkeletonContent()}</CardContent>
    </Card>
  );
};

export default SkeletonCard;
