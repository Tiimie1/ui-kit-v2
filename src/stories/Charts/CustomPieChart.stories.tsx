import { Meta, StoryFn } from '@storybook/react';
import CustomPieChart from '@/components/Charts/CustomPieChart';

export default {
  title: 'Charts/CustomPieChart',
  component: CustomPieChart,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof CustomPieChart>;

const Template: StoryFn<typeof CustomPieChart> = (args) => <CustomPieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  graphData: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 300 },
  ],
  showInfo: false, 
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  graphData: [
    { name: 'Group A', value: 500 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 200 },
  ],
  numOfCreatedAsset: 25,
  showInfo: true, 
};
