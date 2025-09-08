export default function Home() {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-6">
                <h1 className="text-5xl font-extrabold text-yellow-600 tracking-tight">
                    Banana Go
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-neutral-700">
                    Mockup sederhana platform e-commerce camilan pisang kreatif.
                    Ini hanya placeholder untuk desain dan struktur halaman awal
                    tim.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="/katalog"
                        className="px-5 py-2 rounded bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition"
                    >
                        Lihat Katalog Rasa
                    </a>
                    <a
                        href="/pemesanan"
                        className="px-5 py-2 rounded border border-yellow-500 text-yellow-600 font-medium hover:bg-yellow-100 transition"
                    >
                        Pemesanan
                    </a>
                    <a
                        href="/kontak-testimoni"
                        className="px-5 py-2 rounded border border-neutral-300 font-medium hover:bg-neutral-100 transition"
                    >
                        Kontak & Testimoni
                    </a>
                </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-3">
                {["Cokelat Lumer", "Keju Manis", "Caramel Crunch"].map(
                    (rasa) => (
                        <div
                            key={rasa}
                            className="rounded-lg border bg-white p-5 shadow-sm"
                        >
                            <h3 className="font-semibold text-yellow-600">
                                {rasa}
                            </h3>
                            <p className="text-sm mt-2 text-neutral-600">
                                Deskripsi singkat placeholder untuk rasa{" "}
                                {rasa.toLowerCase()}.
                            </p>
                            <p className="text-xs mt-4 text-neutral-400 italic">
                                (Sample card – data final menyusul)
                            </p>
                        </div>
                    )
                )}
            </section>
        </div>
    );
}
