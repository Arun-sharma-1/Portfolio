import React from "react";
import "./globals.css";
import { Raleway } from "next/font/google";
import ThemeProvider from "@/provider/themeProvider";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/redux/storeProvider";
import LayoutComponent from "@/component/shared/layout";
import { Metadata } from "next/dist/types";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Arun's Portfolio",
  description: "Arun's Portfolio",
  icons: {
    icon: "https://portfolio-olive-kappa-t4n70yj3b8.vercel.app/arun-hero-img.png",
  },
  openGraph: {
    title: "Arun's Portfolio",
    description: "Arun's Portfolio",
    images: "https://portfolio-olive-kappa-t4n70yj3b8.vercel.app/arun-hero-img.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Toaster position="top-center" />
          <StoreProvider>
            <LayoutComponent>{children}</LayoutComponent>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
