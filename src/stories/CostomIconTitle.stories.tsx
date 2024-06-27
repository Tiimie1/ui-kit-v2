import type { Meta, StoryObj } from "@storybook/react";
import CustomIconTitle from "@/components/CustomIconTitle";
import TitleIcon from "../../public/Icons/titleIcon";

const meta: Meta<typeof CustomIconTitle> = {
  title: "CustomIconTitle",
  component: CustomIconTitle,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomIconTitleStory: Story = {
  args: {
    image: <TitleIcon color="#000000" />,
    label: "Example Label"
  }
};
