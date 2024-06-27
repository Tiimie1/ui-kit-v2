import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CreateBtn from '../../public/Icons/createBtnIcon';

interface CustomCreateButtonProps {
  label: string;
  color?: string;
  onClick: () => void;
}

const CustomCreateButton: React.FC<CustomCreateButtonProps> = ({ label, color, onClick }) => {
  const theme = useTheme();

  return (
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
  );
};

export default CustomCreateButton;
