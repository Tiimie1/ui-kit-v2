import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
  useTheme,
} from "@mui/material";
import { Popover, type PopoverProps } from "@mui/material";
import React from "react";

export interface ListItemProps {
  text: string;
  icon: React.ReactNode;
}

interface CustomPopoverProps {
  items: ListItemProps[];
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const PopoverWithArrow = (
  popoverProps: Omit<PopoverProps, "anchorOrigin" | "transformOrigin">,
) => (
  <Popover
    anchorOrigin={{ horizontal: 40, vertical: "bottom" }}
    transformOrigin={{ horizontal: "right", vertical: -8 }}
    slotProps={{
      paper: {
        sx: {
          overflow: "visible",
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 20,
            //left: 20,
            width: 10,
            height: 10,
            backgroundColor: "inherit",
            transform: "translateY(-50%) rotate(45deg)",
          },
        },
      },
    }}
    {...popoverProps}
  />
);

const CustomPopover: React.FC<CustomPopoverProps> = ({
  items,
  anchorEl,
  onClose,
}) => {
  const theme = useTheme();

  return (
    <>
      <PopoverWithArrow
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        sx={{
          boxShadow: "2px 2px 12px 0px #D6DAE7",
          ".MuiPaper-root": {
            borderRadius: 4,
          },
        }}
      >
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    "& .MuiListItemIcon-root": {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </PopoverWithArrow>
    </>
  );
};

export default CustomPopover;
