import type { Meta, StoryObj } from "@storybook/react";
import CustomToggleButton from "@/components/CustomToggleButton";
import { Wrapper } from "./Wrapper";

const meta: Meta<typeof CustomToggleButton> = {
  title: "CustomToggleButton",
  component: CustomToggleButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const toggleButtonItems = [
  { label: "USD", value: "usd" },
  { label: "USDC", value: "usdc" },
];

export const CustomToggleButtonStory: Story = {
  render: (args) => (
    <Wrapper>
      <CustomToggleButton {...args} />
    </Wrapper>
  ),
  args: {
    label: "Lorem ipsum",
    toggleButtonOptions: toggleButtonItems,
  },
};
