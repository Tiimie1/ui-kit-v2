import { Box, Typography } from '@mui/material';
import React from 'react';

interface CustomIconTitleProps {
  image?: React.ReactNode;  
  label: string;
  color: string; // Add the color prop
}

const CustomIconTitle: React.FC<CustomIconTitleProps> = ({
  image,  
  label,
  color
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ marginRight: '8px' }}>
        {image} 
      </Box>
      <Typography variant='subtitle1' fontWeight={700} color={color}>
        {label}
      </Typography>
    </Box>
  );
};

export default CustomIconTitle;
