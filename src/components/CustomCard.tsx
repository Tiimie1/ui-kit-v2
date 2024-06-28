import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface CustomCardProps {
  title: string;
  description: string;
  onSelect?: () => void;
  icon: ReactNode;
  backgroundColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  onSelect,
  icon,
  backgroundColor = '#ffffff'
}) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        background: backgroundColor,
        padding: 2,
        cursor: 'pointer'
      }}
      onClick={onSelect}
    >
      <Box display='flex' flexDirection='column' justifyContent='space-between' minHeight={170}>
        <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
          {icon}
        </Box>
        <Box>
          <Typography variant='body1' fontWeight={500}>
            {title}
          </Typography>
          <Typography variant='caption' sx={{ color: '#6B7280' }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
