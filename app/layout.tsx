import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./css/id.css";
import "./css/tombol.css";
import "./css/responsif.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Image from 'next/image';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Banana Go - Camilan Pisang Kreatif",
        template: "%s | Banana Go",
    },
    description:
        "Banana Go: Platform e-commerce camilan pisang aneka rasa segar dan lezat.",
    keywords: ["banana", "pisang", "camilan", "e-commerce", "dessert"],
    authors: [{ name: "Banana Go" }],
    openGraph: {
        title: "Banana Go",
        description: "Camilan pisang inovatif aneka rasa.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-50 text-neutral-800`}
            >
                <NavBar />
                <main className="mx-auto  px-4 py-12 md:py-16 min-h-[60vh]" id="main">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
