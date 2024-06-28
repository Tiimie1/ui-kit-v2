import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "@/components/CustomCard";
import CommunityIcon from '../../public/Icons/communityIcon'; 

const meta: Meta<typeof CustomCard> = {
  title: "CustomCard",
  component: CustomCard,
  argTypes: {
    onSelect: { action: 'selected' },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
      defaultValue: '#ffffff'
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
    description: "This is a sample description for the template card.",
    icon: <CommunityIcon />,
    onSelect: () => {
      console.log('Card clicked');
    },
    backgroundColor: '#ffffff'
  },
  render: (args) => (
    <CustomCard 
      title={args.title} 
      description={args.description} 
      icon={args.icon} 
      onSelect={args.onSelect} 
      backgroundColor={args.backgroundColor}
    />
  )
};
