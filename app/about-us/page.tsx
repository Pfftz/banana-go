export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E8] to-[#FFECC4] text-[#0A1A33]">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Tentang <span className="text-[#FFA800]">Banana Go</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#4A4A4A]">
          Camilan pisang kekinian yang lezat, berkualitas, dan dibuat dengan penuh inovasi.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Siapa Kami */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Siapa Kami?</h2>
          <p className="text-lg leading-relaxed text-[#2E2E2E]">
            Banana Go adalah brand camilan pisang modern yang menghadirkan rasa premium, kriuk yang nikmat,
            dan varian yang selalu dikembangkan agar cocok dengan selera semua kalangan. Kami percaya bahwa
            camilan sederhana dapat memberikan pengalaman yang luar biasa jika dibuat dengan bahan terbaik dan inovasi.
          </p>
        </section>

        {/* Visi */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Visi Kami</h2>
          <p className="text-lg leading-relaxed text-[#2E2E2E]">
            Menjadi brand camilan pisang terbaik di Indonesia yang dikenal karena kualitas, inovasi, dan
            kepercayaan pelanggan.
          </p>
        </section>

        {/* Misi */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
          <ul className="list-disc ml-6 space-y-3 text-lg text-[#2E2E2E]">
            <li>Menghadirkan camilan dengan bahan baku berkualitas terbaik.</li>
            <li>Mengembangkan rasa baru yang inovatif dan unik.</li>
            <li>Memberikan pelayanan yang ramah dan profesional.</li>
            <li>Berkontribusi pada pemberdayaan UMKM lokal.</li>
          </ul>
        </section>

        {/* Kenapa Memilih Kami */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Kenapa Memilih Banana Go?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#FFA800]">100% Bahan Berkualitas</h3>
              <p className="text-[#333]">
                Semua bahan dipilih secara khusus untuk memastikan rasa dan kualitas terbaik.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#FFA800]">Rasa Premium</h3>
              <p className="text-[#333]">
                Dibuat dengan resep khusus untuk menciptakan rasa yang lezat dan berkesan.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#FFA800]">Dipercaya Pelanggan</h3>
              <p className="text-[#333]">
                Ribuan pelanggan telah menjadikan Banana Go sebagai camilan favorit mereka.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#FFA800]">Halal & Higienis</h3>
              <p className="text-[#333]">
                Diproduksi secara higienis dan aman, cocok dinikmati semua kalangan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
