import { NextUIProvider } from "@nextui-org/react";

import type { Metadata }  from 'next'
import      { Inter    }  from 'next/font/google'

import Header             from "@component/Header";
import Footer             from "@component/Footer";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title       : 'osu!quest',
  description : 'osu!quest is a multiplayer charades inspired game for osu! players',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <div>
                        <Header/>
                    </div>
                    <div>
                        {children}
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </NextUIProvider>
            </body>
        </html>
    )
}

// path: osu.quest/src/app/layout.tsx
