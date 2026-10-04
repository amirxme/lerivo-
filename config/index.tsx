import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";

const projectId = "2bbc3aa22f77da22b8e31bec1032e9db";

const metadata = {
  name: "LERIVO",
  description: "Where memecoins meet creators",
  url: "https://lerivo.vercel.app",
  icons: ["https://lerivo.vercel.app/favicon.ico"],
};

const solanaWeb3JsAdapter = new SolanaAdapter();

export const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata,
  projectId,
  features: {
    analytics: true,
  },
});