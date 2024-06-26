import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import React from "react";

interface CustomCheckBoxProps {
  checkState: boolean;
  completedState?: boolean;
  handleChange?: () => void;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  checkState,
  completedState,
}) => {
  return (
    <Box sx={{ position: "relative", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={checkState}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "16px",
          border: `2px solid ${checkState ? "#4F46E5" : "#D1D5DB"}`,
          appearance: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
        }}
      />
      {checkState && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#4F46E5",
          }}
        />
      )}
      {completedState && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#4F46E5",
          }}
        >
          <CheckIcon
            sx={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CustomCheckBox;
