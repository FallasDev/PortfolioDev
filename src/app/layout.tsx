import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LandingProvider } from "./LandingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FallasDev",
  description: "Welcome to my portfolio! I'm a passionate software developer with a knack for creating innovative solutions. Explore my projects, learn about my journey, and let's connect to build something amazing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>FallasDev</title>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <LandingProvider>{children}</LandingProvider>
      </body>
    </html>
  );
}
