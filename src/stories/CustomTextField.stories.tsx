import type { Meta, StoryObj } from "@storybook/react";
import CustomTextField from "@/components/CustomTextField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CustomTextField> = {
  title: "CustomTextField",
  component: CustomTextField,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomPopoverStory: Story = {
  args: {
    label: "Lorem ipsum",
    placeholder: "Lorem ipsum...",
    tooltip:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    suffix: "USDT",
  },
};
