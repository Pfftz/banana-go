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

    return (
        <div  className="space-y-16 md:space-y-24">
            <section id="beranda" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left" id="kontener-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Camilan Pisang 
                        <br />
                        <span className="text-amber-500">Banana Go</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                        
                    </p>
                    <div className="flex flex-wrap gap- justify-center md:justify-start">
                        <div id="tombol-a" className="bg-amber-400 text-gray-900 font-bold py-3 px-6  rounded-full text-lg hover:bg-amber-500 transition-colors duration-300 shadow-md">
                            <a 
                                href="/katalog"
                                
                            >
                                Lihat Katalog Rasa
                            </a>
                        </div>
                        <div id="tombol-a" className="bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-colors duration-300 shadow-md">
                            <a 
                                href="/pemesanan"
                            >
                                Pemesanan
                            </a>
                        </div>
                        <div id="tombol-a" className="border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300">
                            <a
                                href="/kontak-testimoni"
                            >
                                Kontak & Testimoni
                            </a>
                        </div>  
                    </div>
                </div>
                <div className="flex justify-center" id="card-img">
                    <img
                        src="/img/kemasan3.png"
                        alt="Camilan pisang renyah dan lezat Banana Go"
                        className="rounded-xl shadow-2xl w-full max-w-md md:max-w-full object-cover h-120"
                    />

                    <div id="overlay-box" className="bg-amber-400">
                        100% Halal <br/>
                        cap Mama Gufron
                    </div>
                </div>
            </section>

            <div>
                <div id="favorit">
                    <h5 className="text-amber-500">Rasa Paporit</h5>
                    <p className="text-lg">3 Rasa Terpopuler</p>
                </div>
                <div>
                    <section className="grid gap-6 sm:grid-cols-3">
                        {/* 1. Ganti array string dengan variabel daftarRasa */}
                        {daftarRasa.map((rasa) => (
                        <div
                            // 2. Gunakan properti unik sebagai key, contoh: rasa.nama
                            key={rasa.nama}
                            className="rounded-lg border border-amber-200 bg-white p-5 shadow-sm overflow-hidden"
                        >
                            {/* 3. Tambahkan gambar dari objek */}
                            <img
                            src={rasa.gambar}
                            alt={rasa.nama}
                            className="w-full h-50 object-cover rounded-md mb-4"
                            />

                            <h3 className="font-semibold text-yellow-600 text-lg">
                            {/* 4. Tampilkan nama dari objek */}
                            {rasa.nama}
                            </h3>

                            <p className="text-sm mt-2 text-neutral-600">
                            {/* 5. Tampilkan deskripsi dari objek */}
                            {rasa.deskripsi}
                            </p>

                            {/* 6. Paragraf placeholder sudah bisa dihapus */}
                        </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}
