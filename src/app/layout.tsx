import React from "react";
import "./globals.css";
import { Raleway } from "next/font/google";
import ThemeProvider from "@/provider/themeProvider";
import { Toaster } from "react-hot-toast";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
