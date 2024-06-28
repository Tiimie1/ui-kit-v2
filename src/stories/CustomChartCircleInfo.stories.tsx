import { Meta, StoryFn } from '@storybook/react';
import CustomChartCircleInfo from '@/components/CustomChartCircleInfo';

export default {
  title: 'CustomChartCircleInfo',
  component: CustomChartCircleInfo,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof CustomChartCircleInfo>;

const Template: StoryFn<typeof CustomChartCircleInfo> = (args) => <CustomChartCircleInfo {...args} />;

export const CustomChartCircleInfoStory = Template.bind({});
CustomChartCircleInfoStory.args = {
  numOfCreatedAsset: 14,
  label: 'Assets Created',
};
