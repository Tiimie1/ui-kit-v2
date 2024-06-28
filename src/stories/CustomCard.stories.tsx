import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import CustomCard from "@/components/CustomCard";
import CommunityIcon from "@/Icons/communityIcon";

const meta: Meta<typeof CustomCard> = {
  title: "CustomCard",
  component: CustomCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This is a CustomCard component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the card',
    },
    description: {
      control: 'text',
      description: 'Description of the card',
    },
    onSelect: {
      action: 'selected',
      description: 'Select action handler',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
    },
    icon: {
      description: 'Icon of the card',
    },
  },
  args: { onSelect: fn() },
} satisfies Meta<typeof CustomCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Template",
    description: "This is a sample description for the template card.",
    icon: <CommunityIcon />,
    onSelect: () => {
      console.log('Card clicked');
    },
    backgroundColor: '#ffffff',
  },
  render: (args) => (
    <CustomCard
      title={args.title}
      description={args.description}
      icon={args.icon}
      onSelect={args.onSelect}
      backgroundColor={args.backgroundColor}
    />
  ),
};


