import type { Meta, StoryObj } from "@storybook/react";
import CustomToggleButton from "@/components/FormElements/CustomToggleButton";
import { Wrapper } from "./Wrapper";

const meta: Meta<typeof CustomToggleButton> = {
  title: "FormElements/CustomToggleButton",
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

export const Default: Story = {
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
