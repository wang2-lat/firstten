import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FirstTen - Find Your First 10 Paying Customers",
  description: "Help technical founders systematically find their first 10 paying customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <nav className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-blue-700">
              First<span className="text-slate-800">Ten</span>
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-slate-600 hover:text-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/results" className="text-slate-600 hover:text-blue-700 transition-colors">
                Results
              </Link>
              <Link href="/templates" className="text-slate-600 hover:text-blue-700 transition-colors">
                Templates
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
