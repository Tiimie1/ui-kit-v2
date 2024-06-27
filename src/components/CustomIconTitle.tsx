import { Box, Typography } from '@mui/material';
import React from 'react';

interface CustomIconTitleProps {
  image?: React.ReactNode;  
  label: string;
}

const CustomIconTitle: React.FC<CustomIconTitleProps> = ({
  image,  
  label
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ marginRight: '8px' }}>
        {image} 
      </Box>
      <Typography variant='subtitle1' fontWeight={700}>
        {label}
      </Typography>
    </Box>
  );
};

export default CustomIconTitle;
