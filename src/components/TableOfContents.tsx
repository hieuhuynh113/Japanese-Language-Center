import React, { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';

interface TableOfContentsProps {
  content: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^#{2,3}\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    
    const extractedHeadings = matches.map((match, index) => {
      const level = match[0].indexOf(' ') - 1; // Count #'s before space
      const text = match[1];
      const id = `heading-${index}`;
      return { id, text, level };
    });

    setHeadings(extractedHeadings);

    // Add scroll event listener
    const handleScroll = () => {
      const headingElements = extractedHeadings.map(heading => 
        document.getElementById(heading.id)
      ).filter((el): el is HTMLElement => el !== null);

      const headingPositions = headingElements.map(el => ({
        id: el.id,
        top: el.getBoundingClientRect().top
      }));

      const currentHeading = headingPositions.find(heading => heading.top >= 0) || 
        headingPositions[headingPositions.length - 1];

      if (currentHeading) {
        setActiveId(currentHeading.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <Box>
      {headings.map((heading) => (
        <Link
          key={heading.id}
          component="button"
          onClick={() => handleClick(heading.id)}
          sx={{
            display: 'block',
            textAlign: 'left',
            color: heading.id === activeId ? 'primary.main' : 'text.primary',
            textDecoration: 'none',
            pl: heading.level === 2 ? 0 : 2,
            py: 0.5,
            fontSize: heading.level === 2 ? '0.9rem' : '0.85rem',
            fontWeight: heading.level === 2 ? 500 : 400,
            borderLeft: heading.id === activeId ? '2px solid' : 'none',
            backgroundColor: heading.id === activeId ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          {heading.text}
        </Link>
      ))}
    </Box>
  );
};

export default TableOfContents;
