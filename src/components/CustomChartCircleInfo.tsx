import { Box, Typography } from '@mui/material';
import DiamondIcon from '../../public/Icons/diamondIcon';

interface CustomChartCircleInfoProps {
  numOfCreatedAsset: string | number;
  label?: string;
}

const CustomChartCircleInfo: React.FC<CustomChartCircleInfoProps> = ({ numOfCreatedAsset, label = "Assets Created" }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        padding: '4px',
        textAlign: 'center',
        whiteSpace: 'nowrap',  
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <DiamondIcon />
      <Typography variant='body2' mt='5px' fontWeight={500}>
        {label}
      </Typography>
      <Typography variant='h3' mt='2px'>{numOfCreatedAsset}</Typography>
    </Box>
  );
};

export default CustomChartCircleInfo;
