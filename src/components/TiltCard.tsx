import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { styled } from '@mui/material/styles';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  transformStyle: 'preserve-3d',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  '&:hover': {
    '& .card-shine': {
      opacity: 1,
    },
  },
}));

const CardShine = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  zIndex: 2,
});

export const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StyledCard
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: '1000px',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
      <CardShine className="card-shine" />
    </StyledCard>
  );
};

export default TiltCard;
