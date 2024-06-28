import { Box, Typography, useTheme } from "@mui/material";

interface ChainCardProps {
  title: string;
  description: string;
  mainBenefits: string[];
  customIcon: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
}

const ChainCard: React.FC<ChainCardProps> = ({
  title,
  description,
  mainBenefits,
  customIcon,
  selected,
  onClick,
}): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "415px",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        cursor: "pointer",
        border: selected ? `2px solid ${theme.palette.primary.main}` : "",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 1.5,
        }}
      >
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          {customIcon}
        </Box>
        <Typography variant="body2" fontWeight={700}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6B7280",
            pr: 10,
            pl: 10,
            mb: 2,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: 2,
          margin: 1.5,
          borderRadius: 3,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
          MAIN BENEFITS
        </Typography>
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#6B7280",
          }}
        >
          <ul style={{ paddingLeft: "20px" }}>
            {mainBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default ChainCard;
