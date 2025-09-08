"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <header className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-40">
            <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
                <Link href="/" className="text-2xl font-bold text-yellow-600">
                    Banana Go
                </Link>
                <nav className="flex gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-yellow-600">
                        Beranda
                    </Link>
                    <Link href="/katalog" className="hover:text-yellow-600">
                        Katalog Rasa
                    </Link>
                    <Link href="/pemesanan" className="hover:text-yellow-600">
                        Pemesanan
                    </Link>
                    <Link
                        href="/kontak-testimoni"
                        className="hover:text-yellow-600"
                    >
                        Kontak & Testimoni
                    </Link>
                </nav>
            </div>
        </header>
    );
}
