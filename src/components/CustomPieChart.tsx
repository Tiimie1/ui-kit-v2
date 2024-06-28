import { Box, useTheme } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';
import CustomChartCircleInfo from './CustomChartCircleInfo';

interface GraphData {
  name: string;
  value: number;
}

interface CustomPieChartProps {
  graphData: GraphData[];
  cx?: string | number;
  cy?: string | number;
  innerRadius?: string | number;
  outerRadius?: string | number;
  width?: number;
  height?: number;
  numOfCreatedAsset?: string | number; 
  showInfo?: boolean;
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({
  graphData,
  cx = '50%',
  cy = '50%',
  innerRadius = 85,
  outerRadius = 95,
  width = 250,
  height = 250,
  numOfCreatedAsset,
  showInfo = true 
}) => {
  const theme = useTheme();
  const COLORS = [
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.primary.main
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {showInfo && numOfCreatedAsset !== undefined && (
        <CustomChartCircleInfo numOfCreatedAsset={numOfCreatedAsset} />
      )}
      <PieChart width={width} height={height}>
        <Pie
          data={graphData}
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill='#8884d8'
          paddingAngle={5}
          dataKey='value'
        >
          {graphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default CustomPieChart;
