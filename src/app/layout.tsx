import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/layout/LayoutProvider";
import { ModalProvider } from "@/components/common/Modal/ModalContext";
import ModalOutlet from "@/components/common/Modal/ModalOutlet";
import { SnackbarProvider } from "@/components/common/Snackbar/Snackbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js starter with TypeScript, Tailwind CSS, and Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SnackbarProvider>
          <ModalProvider>
            <LayoutProvider>{children}</LayoutProvider>
            <ModalOutlet />
          </ModalProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
