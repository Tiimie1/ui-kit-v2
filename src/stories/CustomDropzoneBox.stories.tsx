import type { Meta, StoryObj } from "@storybook/react";
import CustomDropzoneBox from "@/components/CustomDropzoneBox";
import { Wrapper } from "./Wrapper";
import theme from "@/styles/theme";

const meta: Meta<typeof CustomDropzoneBox> = {
  title: "FormElements/CustomDropzoneBox",
  component: CustomDropzoneBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <CustomDropzoneBox {...args} />
    </Wrapper>
  ),
  args: {
    uploadText: "Upload a file",
    dragText: "or drag and drop",
    fileTypesText: "PDF, DOC, JPG up to ",
    fileSizeLimitText: "10MB",
    borderColor: theme.palette.grey[300],
    textColor: theme.palette.text.secondary,
    iconColor: theme.palette.grey[500],
  },
};
