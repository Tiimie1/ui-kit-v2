import type { Meta, StoryObj } from "@storybook/react";
import CustomTextField from "@/components/FormElements/CustomTextField";
import { Wrapper } from "./Wrapper";

const meta: Meta<typeof CustomTextField> = {
  title: "FormElements/CustomTextField",
  component: CustomTextField,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <CustomTextField {...args} />
    </Wrapper>
  ),
  args: {
    label: "Lorem ipsum",
    placeholder: "Lorem ipsum...",
    tooltip:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    suffix: "USDT",
  },
};
