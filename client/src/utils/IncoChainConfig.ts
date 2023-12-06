import { Chain } from "@rainbow-me/rainbowkit";

export const Inco: Chain = {
  id: 9_090,
  name: "Inco Network",
  network: "Inco Network",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1700732237728096256/NILeXR0L_400x400.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Inco",
    symbol: "INCO",
  },
  rpcUrls: {
    public: { http: ["https://evm-rpc.inco.network/"] },
    default: { http: ["https://evm-rpc.inco.network/"] },
  },
  blockExplorers: {
    default: { name: "Inco", url: "https://explorer.inco.network/" },
    etherscan: { name: "Inco", url: "https://explorer.inco.network/" },
  },
  testnet: true,
};
