'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { mainnet } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

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
    allowUnsupportedChain: true,
    metadata: metadata,
    features: {
      analytics: true,
    }
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