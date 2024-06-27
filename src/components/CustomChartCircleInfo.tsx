import { Box, Typography } from '@mui/material';
import { Diamond } from '@mui/icons-material';

interface CustomChartCircleInfoProps {
  numOfCreatedAsset: string | number;
}

const CustomChartCircleInfo: React.FC<CustomChartCircleInfoProps> = ({ numOfCreatedAsset }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        padding: '4px',
        textAlign: 'center'
      }}
    >
      <Diamond fontSize="large" />
      <Typography variant='body2' fontWeight={500}>
        Assets Created
      </Typography>
      <Typography variant='h3'>{numOfCreatedAsset}</Typography>
    </Box>
  );
};

export default CustomChartCircleInfo;
