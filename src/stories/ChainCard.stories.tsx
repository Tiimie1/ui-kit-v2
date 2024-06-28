import type { Meta, StoryObj } from "@storybook/react";
import { Wrapper } from "./Wrapper";
import ChainCard from "@/components/ChainCard";
import EthIcon from "../../public/Icons/ethIcon";
import { Box, Grid } from "@mui/material";

const meta: Meta<typeof ChainCard> = {
  title: "ChainCard",
  component: ChainCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ChainCardStory: Story = {
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
