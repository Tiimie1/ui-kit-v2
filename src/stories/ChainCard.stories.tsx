import type { Meta, StoryObj } from "@storybook/react";
import CustomChainCard from "@/components/CustomChainCard";
import EthIcon from "@/Icons/ethIcon";

const meta: Meta<typeof CustomChainCard> = {
  title: "Cards/CustomChainCard",
  component: CustomChainCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Ethereum (ERC-20)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus adipiscing phasellus.",
    mainBenefits: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Faucibus adipiscing phasellus.",
    ],
    customIcon: <EthIcon width={48} height={48} color="#627EEA" />,
    selected: false,
    onClick: () => {},
  },
};
