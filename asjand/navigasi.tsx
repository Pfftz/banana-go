"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md w-full">
            <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-amber-500"
                >
                    Banana Go
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-amber-500 transition-colors duration-200"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/katalog"
                        className="text-gray-600 hover:text-amber-500 transition-colors duration-200"
                    >
                        Katalog Rasa
                    </Link>
                    <Link
                        href="/pemesanan"
                        className="text-gray-600 hover:text-amber-500 transition-colors duration-200"
                    >
                        Pemesanan
                    </Link>
                    <Link
                        href="/kontak-testimoni"
                        className="text-gray-600 hover:text-amber-500 transition-colors duration-200"
                    >
                        Kontak & Testimoni
                    </Link>
                </nav>
                <Link
                    href="/pemesanan"
                    className="hidden md:inline-block bg-amber-400 text-gray-900 font-bold py-2 px-5 rounded-full hover:bg-amber-500 transition-colors duration-300"
                >
                    Pesan Sekarang
                </Link>
                {/* Tombol Menu Mobile (fungsionalitas bisa ditambahkan nanti) */}
                <button className="md:hidden text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}