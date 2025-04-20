import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Quicksand({
  variable: "--font-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MockView",
  description: "Your AI companion for acing job interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} antialiased pattern`}
      >
        {children}

        <Toaster/>
      </body>
    </html>
  );
}
