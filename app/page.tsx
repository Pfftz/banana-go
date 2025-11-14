"use client";

import { useState, useEffect, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const daftarRasa = [
        {
            nama: "Original",
            deskripsi: "Taburan bubuk cokelat premium yang lumer di mulut.",
            gambar: "/img/asin2.png",
        },
        {
            nama: "Coklat Bubuk",
            deskripsi: "Perpaduan gurihnya keju berkualitas dengan sedikit rasa manis.",
            gambar: "/img/ckltbbk2.png",
        },
        {
            nama: "Vanila",
            deskripsi: "Sensasi renyah karamel yang manis dan menggugah selera.",
            gambar: "/img/vanila2.png",
        },
    ];

    // --- LOGIKA SLIDESHOW ---
    const slideshowImages = [
        { src: "/img/kemasan3.png", alt: "Kemasan Samber's Banana Snack" },
        { src: "/img/asin2.png", alt: "Varian Rasa Original" },
        { src: "/img/ckltbbk2.png", alt: "Varian Rasa Coklat Bubuk" },
        { src: "/img/vanila2.png", alt: "Varian Rasa Vanila" },
        { src: "/img/redvelvet2.png", alt: "Varian Rasa Red Velvet" },
        { src: "/img/ckltglw2.png", alt: "Varian Rasa Coklat Lumer" },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const transitionDuration = 500; // 500ms

    const goToSlide = (slideIndex: SetStateAction<number>) => {
        if (isFading || slideIndex === currentImageIndex) return;
        setIsFading(true);
        setTimeout(() => {
            setCurrentImageIndex(slideIndex);
            setIsFading(false);
        }, transitionDuration);
    };

    const goToNext = () => {
        const nextIndex = (currentImageIndex + 1) % slideshowImages.length;
        goToSlide(nextIndex);
    };

    const goToPrev = () => {
        const prevIndex = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
        goToSlide(prevIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext();
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div className="space-y-16 md:space-y-24">
            <section id="beranda" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left" id="kontener-1">
                    {/* ... (Konten Teks dan Tombol) ... */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Camilan Pisang
                        <br />
                        <span className="text-amber-500">Banana Go</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link
                            href="/katalog"
                            className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-colors duration-300 shadow-md"
                        >
                            Lihat Katalog Rasa
                        </Link>
                        <Link
                            href="/pemesanan"
                            className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-colors duration-300 shadow-md"
                        >
                            Pemesanan
                        </Link>
                        <Link
                            href="/kontak-testimoni"
                            className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-colors duration-300 shadow-md"
                        >
                            Kontak & Testimoni
                        </Link>
                    </div>
                </div>

                {/* --- AREA SLIDESHOW --- */}
                <div className="relative w-full max-w-md md:max-w-full mx-auto">
                    <Image
                        src={slideshowImages[currentImageIndex].src}
                        alt={slideshowImages[currentImageIndex].alt}
                        width={600}
                        height={600}
                        className={`
                            rounded-xl shadow-2xl w-full object-cover h-120
                            transition-opacity duration-500 ease-in-out
                            ${isFading ? 'opacity-0' : 'opacity-100'}
                        `}
                        priority
                    />

                    {/* Box Halal */}
                    <div
                        id="overlay-box"
                        className="absolute bottom-4 right-4 bg-amber-400 text-gray-900 text-xs font-semibold p-2 rounded-md shadow-md"
                    >
                        100% Halal <br />
                        Cap Mama Gufron
                    </div>

                    {/* Tombol Panah Kiri */}
                    <button
                        onClick={goToPrev}
                        aria-label="Gambar Sebelumnya"
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    {/* Tombol Panah Kanan */}
                    <button
                        onClick={goToNext}
                        aria-label="Gambar Berikutnya"
                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* INDIKATOR DOTS */}
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                        {slideshowImages.map((_slide, slideIndex) => (
                            <button
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                className={`
                                    w-2.5 h-2.5 rounded-full transition-all duration-300
                                    ${slideIndex === currentImageIndex 
                                        ? 'bg-white scale-125' // Dot aktif
                                        : 'bg-white/50 hover:bg-white/75' // Dot non-aktif
                                    }
                                `}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* --- AREA RASA FAVORIT --- */}
            <div>
                <div id="favorit">
                    <h5 className="text-amber-500">Rasa Favorit</h5>
                    <p className="text-gray-600 text-lg font-bold">3 Rasa Terpopuler</p>
                </div>
                <div>
                    <section className="grid gap-6 sm:grid-cols-3">
                        {daftarRasa.map((rasa) => (
                            <div
                                key={rasa.nama}
                                // 1. HAPUS 'group'. TAMBAHKAN 'transition' & 'hover:scale' DI SINI
                                className="rounded-lg border border-amber-200 bg-white p-5 shadow-sm overflow-hidden
                                           transition-all duration-300 ease-in-out
                                           hover:scale-105 hover:shadow-lg"
                            >
                                <Image
                                    src={rasa.gambar}
                                    alt={rasa.nama}
                                    width={300}
                                    height={300}
                                    // 2. HAPUS EFEK 'group-hover' DARI GAMBAR
                                    className="w-full h-50 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-semibold text-yellow-600 text-lg">
                                    {rasa.nama}
                                </h3>
                                <p className="text-sm mt-2 text-neutral-600">
                                    {rasa.deskripsi}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}