import type { Meta, StoryObj } from "@storybook/react";
import CustomDropzoneBox from "@/components/CustomDropzoneBox";

const meta: Meta<typeof CustomDropzoneBox> = {
  title: "Forms/CustomDropzoneBox",
  component: CustomDropzoneBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    uploadText: "Upload a file",
    dragText: "or drag and drop",
    fileTypesText: "PDF, DOC, JPG up to ",
    fileSizeLimitText: '10MB',
    borderColor: "#D1D5DB",
    textColor: "#6B7280", 
    iconColor: "#9CA3AF" 
  },
};