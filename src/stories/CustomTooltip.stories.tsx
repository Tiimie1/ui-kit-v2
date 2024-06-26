import type { Meta, StoryObj } from "@storybook/react";
import CustomTooltip from "@/components/CustomTooltip";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CustomTooltip> = {
  title: "CustomTooltip",
  component: CustomTooltip,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomPopoverStory: Story = {
  args: {
    tooltipText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sem at tellus tempor ultricies",
  },
};
