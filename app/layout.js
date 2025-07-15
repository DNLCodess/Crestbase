"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="h-full bg-white text-[#2D2E46] antialiased">
        <main className="flex h-screen w-full overflow-auto">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 overflow-y-auto px-6 sm:px-6 pb-24">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
