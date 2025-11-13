// Anda perlu menyiapkan gambar di folder /public/img/
// Contoh: /img/rasa-cokelat.jpg, /img/rasa-keju.jpg, /img/rasa-caramel.jpg

export default function Home() {
  // Data untuk card, bisa dipindahkan ke file JSON atau CMS
  const daftarRasa = [
    {
      nama: "Cokelat Lumer",
      deskripsi: "Taburan bubuk cokelat premium yang lumer di mulut.",
      gambar: "/img/rasa-cokelat.jpg", // Ganti dengan path gambar Anda
    },
    {
      nama: "Keju Manis",
      deskripsi: "Perpaduan gurihnya keju berkualitas dengan sedikit rasa manis.",
      gambar: "/img/rasa-keju.jpg", // Ganti dengan path gambar Anda
    },
    {
      nama: "Caramel Crunch",
      deskripsi: "Sensasi renyah karamel yang manis dan menggugah selera.",
      gambar: "/img/rasa-caramel.jpg", // Ganti dengan path gambar Anda
    },
  ];

  return (
    <div className="bg-yellow-50 min-h-screen text-gray-800">
      {/* ===== HEADER / NAVIGASI ===== */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Banana <span className="text-amber-500">Go</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-600">
            <a href="#beranda" className="hover:text-amber-500">
              Beranda
            </a>
            <a href="#katalog" className="hover:text-amber-500">
              Katalog Rasa
            </a>
            <a href="#pemesanan" className="hover:text-amber-500">
              Pemesanan
            </a>
            <a href="#testimoni" className="hover:text-amber-500">
              Kontak & Testimoni
            </a>
          </div>
          {/* Tambahkan tombol menu mobile di sini jika perlu */}
        </nav>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        {/* ===== HERO SECTION ===== */}
        <section
          id="beranda"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            {/* Judul dibuat 2 baris agar lebih dinamis */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Camilan Pisang Kreatif
              <br />
              <span className="text-amber-500">Banana Go</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Rasakan renyahnya keripik pisang premium dengan balutan bumbu
              kreatif yang bikin nagih. Dibuat dari pisang pilihan!
            </p>
            {/* Tombol diperbarui untuk kontras yang lebih baik */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#katalog"
                className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition-colors duration-300 shadow-md"
              >
                Lihat Katalog
              </a>
              <a
                href="#testimoni"
                className="bg-white text-amber-600 border-2 border-amber-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-50 transition-colors duration-300"
              >
                Testimoni
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Pastikan gambar ini ada di /public/img/home.webp */}
            <img
              src="/img/home.webp"
              alt="Camilan pisang renyah dan lezat Banana Go"
              className="rounded-xl shadow-2xl w-full max-w-md md:max-w-full"
            />
          </div>
        </section>

        {/* ===== BAGIAN KATALOG RASA ===== */}
        <section id="katalog" className="mt-24 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pilihan Rasa <span className="text-amber-500">Terpopuler</span>
          </h2>
          {/* Card yang didesain ulang dengan gambar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {daftarRasa.map((rasa) => (
              <div
                key={rasa.nama}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Gambar untuk card */}
                <img
                  src={rasa.gambar}
                  alt={rasa.nama}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {rasa.nama}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {rasa.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}