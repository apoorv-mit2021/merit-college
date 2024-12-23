"use client";

// import type {Metadata} from "next";
import {Inter, Roboto_Mono} from "next/font/google";
import "./globals.css";

import Footer from "@/components/LandingPage/landing-footer";
import Header from "@/components/LandingPage/landing-header";
import React from "react";

// Google Fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

// export const metadata: Metadata = {
//     title: "Merit College App",
//     description: "Merit College app for educational purposes",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-50 text-gray-800`}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
