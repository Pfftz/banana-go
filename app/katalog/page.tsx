export default function KatalogPage() {
    const dummy = [
        { nama: "Cokelat Lumer", harga: "Rp20.000" },
        { nama: "Keju Manis", harga: "Rp22.000" },
        { nama: "Caramel Crunch", harga: "Rp23.000" },
        { nama: "Matcha Delight", harga: "Rp24.000" },
    ];
    return (
        <div className="space-y-8">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-yellow-600">
                    Katalog Rasa (Placeholder)
                </h1>
                <p className="text-neutral-600 text-sm max-w-xl mx-auto">
                    Daftar rasa sementara untuk mockup. Data final & gambar akan
                    ditambahkan oleh tim konten.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dummy.map((item) => (
                    <div
                        key={item.nama}
                        className="rounded-lg border bg-white p-5 shadow-sm flex flex-col"
                    >
                        <div className="aspect-video w-full mb-3 bg-yellow-100/60 grid place-items-center text-xs text-neutral-400 rounded">
                            Gambar
                        </div>
                        <h3 className="font-semibold text-yellow-700">
                            {item.nama}
                        </h3>
                        <p className="text-sm mt-1">
                            Harga sementara:{" "}
                            <span className="font-medium">{item.harga}</span>
                        </p>
                        <p className="text-xs mt-3 text-neutral-400 italic">
                            (Detail & tombol beli menyusul)
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
