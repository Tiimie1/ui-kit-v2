import { Box, ToggleButton, Typography, useTheme } from "@mui/material";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import React from "react";

interface ToggleButtonProps {
  label: string;
  value: string | number | boolean;
}

export interface CustomToggleButtonProps {
  label: string;
  value?: string | number | boolean;
  onChange?: (value: string) => void;
  toggleButtonOptions: ToggleButtonProps[];
}

const CustomToggleButton: React.FC<CustomToggleButtonProps> = ({
  label,
  value,
  onChange = () => {},
  toggleButtonOptions,
}) => {
  const theme = useTheme();

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    onChange(newValue);
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      margin: theme.spacing(0.5),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0,
      },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
      {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
      },
  }));

  return (
    <Box>
      <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
        {label}
      </Typography>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "4px",
        }}
      >
        <StyledToggleButtonGroup
          color="primary"
          value={value}
          exclusive
          onChange={handleToggle}
          fullWidth
        >
          {toggleButtonOptions.map((option) => (
            <ToggleButton
              key={option.label}
              value={option.value}
              sx={{ border: 0 }}
            >
              {option.label}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default CustomToggleButton;
