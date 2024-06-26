import type { Meta, StoryObj } from "@storybook/react";
import CustomDropzoneBox from "@/components/CustomDropzoneBox";
import { Wrapper } from "./Wrapper";

const meta: Meta<typeof CustomDropzoneBox> = {
  title: "CustomDropzoneBox",
  component: CustomDropzoneBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomDropzoneBoxStory: Story = {
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
    borderColor: "#D1D5DB",
    textColor: "#6B7280",
    iconColor: "#9CA3AF",
  },
};
