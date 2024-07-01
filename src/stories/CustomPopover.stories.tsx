import type { Meta, StoryObj } from "@storybook/react";
import CustomPopover from "@/components/CustomPopover";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const meta: Meta<typeof CustomPopover> = {
  title: "FormElements/CustomPopover",
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

export const Default: Story = {
  args: {
    items: popoverItems,
    anchorEl: document.createElement("button"),
    onClose: () => {},
  },
};
