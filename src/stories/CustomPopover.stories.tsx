import type { Meta, StoryObj } from "@storybook/react";
import CustomPopover from "@/components/CustomPopover";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CustomPopover> = {
  title: "CustomPopover",
  component: CustomPopover,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const popoverItems = [
  { text: "Edit", icon: <EditIcon /> },
  { text: "Duplicate", icon: <ContentCopyIcon /> },
  { text: "Delete", icon: <DeleteIcon /> },
];

export const CustomPopoverStory: Story = {
  args: {
    items: popoverItems,
    anchorEl: document.createElement("button"),
    onClose: () => {},
  },
};
