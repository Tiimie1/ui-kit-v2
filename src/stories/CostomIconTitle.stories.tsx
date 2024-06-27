import type { Meta, StoryObj } from "@storybook/react";
import CustomIconTitle from "@/components/CustomIconTitle";

const meta: Meta<typeof CustomIconTitle> = {
  title: "CustomIconTitle",
  component: CustomIconTitle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "/path/to/image.png",
    label: "Example Label"
  }
};
