import React from "react"
import './globals.css'
import { Raleway } from 'next/font/google'
import { ThemeProvider } from "@/provider/themeProvider";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400','600' ,'700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
    <body>
      <div className="">
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </body>
  </html>
}