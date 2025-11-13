/* eslint-disable @next/next/no-img-element */

export default function KontakTestimoniPage() {
    const testimonials = [
        {
            nama: "Sarah P.",
            kota: "Jakarta",
            pesan: "Cokelat Lumernya pecah di mulut! Bikin nagih dan gak cukup satu bungkus.",
            gambar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            nama: "Budi S.",
            kota: "Bandung",
            pesan: "Keju Manisnya unik banget, gurih manisnya pas. Anak-anak di rumah suka sekali!",
            gambar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            nama: "Lia K.",
            kota: "Surabaya",
            pesan: "Caramel Crunch-nya bikin kangen! Teksturnya renyah banget, cocok buat teman ngopi.",
            gambar: "https://randomuser.me/api/portraits/women/72.jpg",
        },
    ];
    return (
        <div className="space-y-16 md:space-y-24">
            {/* Bagian Kontak */}
            <section className="grid gap-10 md:grid-cols-2 items-start">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-600">
                        Hubungi Kami
                    </h1>
                    <p className="text-lg text-gray-600">
                        Punya pertanyaan, kritik, atau saran? Jangan ragu untuk
                        menghubungi kami melalui form di bawah ini.
                    </p>
                </div>
                <div className="rounded-lg border bg-white p-6 md:p-8 shadow-lg">
                    <form className="grid gap-4">
                        <h2 className="font-semibold text-lg text-gray-800">
                            Form Kontak Cepat
                        </h2>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Nama
                            </label>
                            <input
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="Nama Anda"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Email
                            </label>
                            <input
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="Email Anda"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Pesan
                            </label>
                            <textarea
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="Pesan Anda..."
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => e.preventDefault()} // Nonaktifkan submit
                            className="bg-amber-400 text-gray-900 rounded py-2 text-sm font-bold hover:bg-amber-500 transition-colors"
                        >
                            Kirim Pesan (Mockup)
                        </button>
                    </form>
                </div>
            </section>

            {/* Bagian Testimoni */}
            <section
                id="testimoni"
                className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-amber-100 -mx-4 px-4 md:rounded-xl"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Apa Kata Pelanggan Kami?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div
                                key={t.nama}
                                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
                            >
                                <img
                                    src={t.gambar}
                                    alt={`Foto ${t.nama}`}
                                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-amber-300"
                                />
                                <p className="text-gray-700 italic mb-4">
                                    &quot;{t.pesan}&quot;
                                </p>
                                <p className="font-semibold text-gray-800">
                                    - {t.nama}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {t.kota}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}