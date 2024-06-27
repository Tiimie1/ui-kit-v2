import { Box, Typography } from '@mui/material';
import AddFiles from '../../public/Icons/addFiles';

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
      <AddFiles />
      <Typography variant='body2' fontWeight={500}>
        {label}
      </Typography>
      <Typography variant='h3'>{numOfCreatedAsset}</Typography>
    </Box>
  );
};

export default CustomChartCircleInfo;
