import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {connectorsForWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {metaMaskWallet, trustWallet, walletConnectWallet} from "@rainbow-me/rainbowkit/wallets";
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, bsc, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {useState} from "react";

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
      {...bsc, name: 'Bsc Mainnet'},
      {...bscTestnet, name: 'Bsc Testnet', iconUrl: 'https://umbria.network/assets/images/icon/bsclogo.png?v1'},
  ],
  [publicProvider()]
);

const connectors = connectorsForWallets([
    {groupName: 'Recommended (we can change the title)', wallets: [
        metaMaskWallet({chains}),
            trustWallet({chains}),
            walletConnectWallet({chains})
        ]},
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
    const [modalSize, setModalSize] = useState<'compact' | 'wide'>('wide')
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} showRecentTransactions={true} modalSize={modalSize}>
        <Component {...pageProps} setModalSize={setModalSize} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
