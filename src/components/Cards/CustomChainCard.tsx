import { Box, Typography, useTheme } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';

interface ChainCardProps {
  title: string;
  description: string;
  mainBenefits: string[];
  customIcon: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
}

const CustomChainCard: React.FC<ChainCardProps> = ({
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
        backgroundColor: theme.palette.common.white,
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
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          {customIcon}
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            pr: '20%',
            pl: '20%',
            mb: 2
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
        <Typography variant="caption" sx={{ fontWeight: 700 }}>
          MAIN BENEFITS
        </Typography>
        <Box
          sx={{
            marginTop: '6px'
          }}
        >
          <List>
            {mainBenefits.map((benefit, index) => (
              <ListItem key={index} sx={{ padding: "0 0 6px 8px" }}>
                  <ListItemIcon sx={{ minWidth: '14px' }}>
                <CircleIcon sx={{ fontSize: '4px' }} />
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: theme.typography.body2.fontSize,
                    fontWeight: theme.typography.body2.fontWeight,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {benefit}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

      </Box>
    </Box>
  );
};

export default CustomChainCard;
