import { Meta, StoryFn } from '@storybook/react';
import CustomCreateButton from '@/components/CustomCreateButton';

export default {
  title: 'CustomCreateButton',
  component: CustomCreateButton,
  argTypes: {
    onClick: { action: 'clicked' },
    color: { control: 'color' },
    tooltipText: { control: 'text', description: 'Optional tooltip text' },
  },
} as Meta<typeof CustomCreateButton>;

const Template: StoryFn<typeof CustomCreateButton> = (args) => <CustomCreateButton {...args} />;

export const CustomCreateButtonWithoutTooltip = Template.bind({});
CustomCreateButtonWithoutTooltip.args = {
  label: 'Create SPV',
  color: '#5F66FF',
};

export const CustomCreateButtonWithTooltip = Template.bind({});
CustomCreateButtonWithTooltip.args = {
  label: 'Create SPV',
  color: '#5F66FF',
  tooltipText: 'This is a tooltip text',
};


