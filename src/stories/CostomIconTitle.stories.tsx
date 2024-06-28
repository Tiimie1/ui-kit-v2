import type { Meta, StoryObj } from "@storybook/react";
import CustomIconTitle from "@/components/CustomIconTitle";
import TitleIcon from "@/Icons/titleIcon";
import theme from "@/styles/theme";

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
    image: <TitleIcon color={theme.palette.primary.main} />,
    label: "Example Label"
  }
};
