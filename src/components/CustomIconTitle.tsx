import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface CustomIconTitleProps {
  image: string;
  label: string;
}

const CustomIconTitle: React.FC<CustomIconTitleProps> = ({
  image,
  label = 'Test Title'
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ marginRight: '8px' }}>
        <Image
          src={image}
          alt={label}
          width={40}
          height={40}
          style={{ borderRadius: '50%' }} 
        />
      </Box>
      <Typography variant='body1'>
        {label}
      </Typography>
    </Box>
  );
};

export default CustomIconTitle;
