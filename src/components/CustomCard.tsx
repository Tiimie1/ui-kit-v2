import { Box, Typography, useTheme } from '@mui/material';
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
  backgroundColor
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: '16px',
        background: backgroundColor || theme.palette.background.default,
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
          <Typography variant='caption' sx={{ color: theme.palette.text.secondary }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
