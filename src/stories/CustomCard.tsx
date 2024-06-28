import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "@/components/CustomCard";

const meta: Meta<typeof CustomCard> = {
  title: "CustomCard",
  component: CustomCard,
  argTypes: {
    onClick: { action: 'clicked' },
    maxWidth: {
      control: 'text',
      description: 'Set the maximum width of the card',
      defaultValue: '400px'
    }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Template",
    description: "This is a sample description for the template card with hover effects.",
    isPublished: true,
    maxWidth: '400px' 
  },
};

