export default function KontakTestimoniPage() {
    const testimonials = [
        { nama: "Andi", pesan: "Rasa pisangnya unik!" },
        { nama: "Sari", pesan: "Tekstur lembut dan topping pas." },
    ];
    return (
        <div className="space-y-10">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-yellow-600">
                    Kontak & Testimoni 
                </h1>
                <p className="text-neutral-600 text-sm max-w-xl mx-auto">
                    
                </p>
            </header>

            <div id="box" className="grid gap-6 sm:grid-cols-2">
                <section className="grid gap-10 " >
                    <div className="space-y-4">
                        <h2 className="font-semibold text-lg">Form Kontak</h2>
                        <form className="grid gap-3 max-w-sm">
                            <input
                                className="border rounded px-3 py-2 text-sm"
                                placeholder="Nama"
                            />
                            <input
                                className="border rounded px-3 py-2 text-sm"
                                placeholder="Email"
                            />
                            <textarea
                                className="border rounded px-3 py-2 text-sm"
                                placeholder="Pesan"
                                rows={4}
                            />
                            <button
                                disabled
                                className="bg-yellow-400/70 text-white rounded py-2 text-sm font-medium cursor-not-allowed"
                            >
                                Kirim (Mockup)
                            </button>
                        </form>
                        <p className="text-xs text-neutral-400 italic">
                            (Form akan terhubung ke backend / email service)
                        </p>
                    </div>
                </section>

                <section className="grid gap-10 " >
                    <div className="space-y-4">
                        <h2 className="font-semibold text-lg">Testimoni Awal</h2>
                        <ul className="space-y-3">
                            {testimonials.map((t) => (
                                <li
                                    key={t.nama}
                                    className="border rounded p-4 bg-white shadow-sm"
                                >
                                    <p className="text-sm text-neutral-700">
                                        &quot;{t.pesan}&quot;
                                    </p>
                                    <p className="text-xs mt-2 text-neutral-500">
                                        - {t.nama}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-neutral-400 italic">
                            (Sistem submit & moderasi testimoni akan ditambahkan)
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
