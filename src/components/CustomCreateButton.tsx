import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CreateBtn from '../../public/Icons/createBtnIcon';
import CustomTooltip from '@/components/CustomTooltip';

interface CustomCreateButtonProps {
  label: string;
  color?: string;
  onClick: () => void;
  tooltipText?: string;
}

const CustomCreateButton: React.FC<CustomCreateButtonProps> = ({ label, color, onClick, tooltipText }) => {
  const theme = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        onClick={onClick}
        startIcon={<CreateBtn color={color} />}
        sx={{
          color: color,
          ...theme.typography.body2
        }}
      >
        {label}
      </Button>
      {tooltipText && <CustomTooltip tooltipText={tooltipText} />}
    </div>
  );
};

export default CustomCreateButton;
