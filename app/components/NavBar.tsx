"use client";
import Link from "next/link";
import Image from "next/image";
// Import font Poppins dari Google Fonts
import { Poppins } from "next/font/google";

// Konfigurasi font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export default function NavBar() {
    return (
        <header className={`sticky top-0 z-50 bg-white shadow-sm w-full border-b border-amber-200 ${poppins.className}`}>
            <div className="container mx-auto max-w-6xl px-1 py-1 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/img/Logo/Logo3.png"
                        alt="Banana Go Logo"
                        width={240}
                        height={40}
                        priority
                    />
                </Link>

                {/* MENU NAVIGASI (tetap sama) */}
                <nav className="hidden md:flex items-center space-x-2">
                    <Link
                        href="/"
                        className="text-gray-600 font-bold text-base tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-yellow-700"
                    >
                        Beranda
                    </Link>
                    
                    <Link 
                        href="/katalog" 
                        className="text-gray-600 font-bold text-base tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-yellow-700"
                    >
                        Katalog Rasa
                    </Link>
                    
                    <Link 
                        href="/pemesanan" 
                        className="text-gray-600 font-bold text-base tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-yellow-700"
                    >
                        Pemesanan
                    </Link>
                    
                    <Link
                        href="/kontak-testimoni"
                        className="text-gray-600 font-bold text-base tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-yellow-700"
                    >
                        Kontak & Testimoni
                    </Link>

                    <Link
                        href="/about-us"
                        className="text-gray-600 font-bold text-base tracking-wide px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-200 hover:text-yellow-700"
                    >
                        about us
                    </Link>
                </nav>
            </div>
        </header>
    );
}