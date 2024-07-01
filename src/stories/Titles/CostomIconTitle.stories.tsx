import type { Meta, StoryObj } from "@storybook/react";
import CustomIconTitle from "@/components/Titles/CustomIconTitle";
import MyAssetsIcon from "@/Icons/myAssetsIcon";
import DashboardIcon from "@/Icons/dashboardIcon";
import theme from "@/styles/theme";

const meta: Meta<typeof CustomIconTitle> = {
  title: "Titles/CustomIconTitle",
  component: CustomIconTitle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: 'This is a CustomIconTitle component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Icon or image to be displayed',
      control: 'select',
      options: ['MyAssetsIcon', 'DashboardIcon'],
    },
    label: {
      control: 'text',
      description: 'Label text of the component',
    },
    color: {
      control: 'color',
      description: 'Color of the label text',
    },
    colorIcon: {
      control: 'color',
      description: 'Color of the icon',
    },
  },
} satisfies Meta<typeof CustomIconTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

const getImage = (image: 'MyAssetsIcon' | 'DashboardIcon', color: string): React.ReactNode => {
  const iconProps = { width: 20, height: 20, colorIcon: 'red' };
  switch (image) {
    case 'MyAssetsIcon':
      return <MyAssetsIcon {...iconProps} />;
    case 'DashboardIcon':
      return <DashboardIcon {...iconProps} />;
    default:
      return <MyAssetsIcon {...iconProps} />;
  }
};

export const Default: Story = {
  args: {
    image: 'MyAssetsIcon',
    label: "Example Label",
    color: theme.palette.primary.dark,
    colorIcon: 'green'
  },
  render: ({ image, label, color, colorIcon }) => {
    const icon = getImage(image as 'MyAssetsIcon' | 'DashboardIcon', theme.palette.primary.dark);
    return (
      <CustomIconTitle
        image={icon}
        label={label}
        color={color}
        colorIcon={colorIcon}
      />
    );
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Label without Icon",
    color: theme.palette.primary.dark,
  },
  render: ({ label, color, colorIcon }) => (
    <CustomIconTitle
      label={label}
      color={color}
      colorIcon={colorIcon}
    />
  ),
};


