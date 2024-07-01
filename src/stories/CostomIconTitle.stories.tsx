import type { Meta, StoryObj } from "@storybook/react";
import CustomIconTitle from "@/components/CustomIconTitle";
import TitleIcon from "@/Icons/titleIcon";
import AddFilesIcon from "@/Icons/addFilesIcon";
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
      options: ['TitleIcon', 'AddFilesIcon'],
    },
    label: {
      control: 'text',
      description: 'Label text of the component',
    },
    color: {
      control: 'color',
      description: 'Color of the label text',
    },
  },
} satisfies Meta<typeof CustomIconTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

const getImage = (image: 'TitleIcon' | 'AddFilesIcon', color: string): React.ReactNode => {
  const iconProps = { width: 20, height: 20, color };
  switch (image) {
    case 'TitleIcon':
      return <TitleIcon {...iconProps} />;
    case 'AddFilesIcon':
      return <AddFilesIcon {...iconProps} />;
    default:
      return <TitleIcon {...iconProps} />;
  }
};

export const Default: Story = {
  args: {
    image: 'TitleIcon',
    label: "Example Label",
    color: theme.palette.primary.dark,
  },
  render: ({ image, label, color }) => {
    const icon = getImage(image as 'TitleIcon' | 'AddFilesIcon', theme.palette.primary.main);
    return (
      <CustomIconTitle
        image={icon}
        label={label}
        color={color}
      />
    );
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Label without Icon",
    color: theme.palette.primary.dark,
  },
  render: ({ label, color }) => (
    <CustomIconTitle
      label={label}
      color={color}
    />
  ),
};

export const WithRedIcon: Story = {
  args: {
    image: 'TitleIcon',
    label: "Label with Red Icon",
    color: theme.palette.error.dark,
  },
  render: ({ image, label, color }) => {
    const icon = getImage(image as 'TitleIcon' | 'AddFilesIcon', theme.palette.error.main);
    return (
      <CustomIconTitle
        image={icon}
        label={label}
        color={color}
      />
    );
  },
};
