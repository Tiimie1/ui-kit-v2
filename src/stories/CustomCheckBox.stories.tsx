import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckBox from "@/components/CustomCheckBox";

const meta: Meta<typeof CustomCheckBox> = {
  title: "CustomCheckBox",
  component: CustomCheckBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checkState: true,
    completedState: false,
  },
};
