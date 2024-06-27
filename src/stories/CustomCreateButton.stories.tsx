import { Meta, StoryFn } from '@storybook/react';
import CustomCreateButton from '@/components/CustomCreateButton';

export default {
  title: 'CustomCreateButton',
  component: CustomCreateButton,
  argTypes: {
    onClick: { action: 'clicked' },
    color: { control: 'color' },
  },
} as Meta<typeof CustomCreateButton>;

const Template: StoryFn<typeof CustomCreateButton> = (args) => <CustomCreateButton {...args} />;

export const CustomCreateButtonStory = Template.bind({});
CustomCreateButtonStory.args = {
  label: 'Create SPV',
  color: '#5F66FF',
};
