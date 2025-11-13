"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md w-full border-b border-amber-200">
            <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-yellow-600">
                    Banana Go
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">
                        Beranda
                    </Link>
                    <Link href="/katalog" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">
                        Katalog Rasa
                    </Link>
                    <Link href="/pemesanan" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">
                        Pemesanan
                    </Link>
                    <Link
                        href="/kontak-testimoni"
                        className="text-gray-600 hover:text-amber-500 transition-colors duration-200"
                    >
                        Kontak & Testimoni
                    </Link>
                </nav>
            </div>
        </header>
    );
}
