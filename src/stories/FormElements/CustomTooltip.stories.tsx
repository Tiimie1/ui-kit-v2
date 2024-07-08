import type { Meta, StoryObj } from "@storybook/react";
import CustomTooltip from "@/components/FormElements/CustomTooltip";

const meta: Meta<typeof CustomTooltip> = {
  title: "FormElements/CustomTooltip",
  component: CustomTooltip,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltipText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sem at tellus tempor ultricies",
  },
};
