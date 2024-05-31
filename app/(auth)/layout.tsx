import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
//import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] }); //font

//SEO - Search Engine Optimization
export const metadata: Metadata = {
  title: "Auth",
  description: "A next.js 13 Meta Threads application",
};

export default function RootLayout({
  children, //{props}
}: {
  children: React.ReactNode; //Type of children is ReactNode/ props type
}) {
  return (
    <ClerkProvider //will allow us to use the Clerk functionalities
      appearance={
        {
          // baseTheme: dark,
        }
      }
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
