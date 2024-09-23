'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { mainnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { siweConfig } from '../config/siwe';

const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const metadata = {
  name: "Jacob Huber's Website",
  description: "Stuff about me and things that I like.",
  url: "https://jacobhuber.me",
  icons: ["https://avatars.githubusercontent.com/u/97369738"]
}

// Disable the ESLint error for the unused modal variable
/* eslint-disable @typescript-eslint/no-unused-vars */
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet],
    defaultNetwork: mainnet,
    metadata: metadata,
    siweConfig: siweConfig,
    features: {
      analytics: true,
      swaps: false,
      onramp: false
    },
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
      '3968c3f5e1aa69375e71bfc3da08a1d24791ac0b3d1c3b1c7e3a2676d175c856'
    ]
  })
  /* eslint-enable @typescript-eslint/no-unused-vars */

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider