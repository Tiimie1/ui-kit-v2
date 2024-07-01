import type { Meta, StoryObj } from "@storybook/react";
import CardWithHover from "@/components/CustomCardWithHover";

const meta: Meta<typeof CardWithHover> = {
  title: "Cards/CardWithHover",
  component: CardWithHover,
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

export const Published: Story = {
  args: {
    title: "Sample Template",
    description: "This is a sample description for the template card with hover effects.",
    isPublished: true,
    maxWidth: '400px' 
  },
};

export const Unpublished: Story = {
  args: {
    title: "Unpublished Template",
    description: "This template has not been published yet and is available for preview only.",
    isPublished: false,
    maxWidth: '400px' 
  },
};
