"use client"; // Menambahkan ini untuk menjadikannya Komponen Klien

export default function PemesananPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logika pengiriman form akan ditambahkan di sini nanti
        console.log("Formulir dikirim (mockup)");
        // Anda bisa menampilkan pesan sukses kustom di sini
    };

    return (
        <div className="space-y-12">
            {/* Bagian CTA Header */}
            <section
                id="pemesanan"
                className="bg-amber-400 text-gray-900 -mt-12 md:-mt-16 -mx-4 px-4"
            >
                <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Formulir Pemesanan
                    </h1>
                    <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                        Selangkah lagi untuk menikmati kelezatan Banana Go!
                        Silakan isi detail di bawah ini.
                    </p>
                </div>
            </section>

            {/* Bagian Form */}
            <section className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Kolom Form */}
                <div className="rounded-lg border bg-white p-6 md:p-8 shadow-lg space-y-6">
                    <h2 className="font-semibold text-2xl text-gray-800">
                        Detail Pengiriman
                    </h2>
                    {/* Mengubah <form> untuk menggunakan onSubmit */}
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Nama Lengkap
                            </label>
                            <input
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="Nama Anda"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Nomor WhatsApp (Aktif)
                            </label>
                            <input
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="08xxxxxxxxxx"
                                type="tel"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 block mb-1">
                                Alamat Pengiriman
                            </label>
                            <textarea
                                className="border rounded px-3 py-2 text-sm w-full"
                                placeholder="Alamat lengkap Anda..."
                                rows={4}
                                required
                            />
                        </div>
                        {/* Menghapus 'disabled' dan menambahkan 'type="submit"' */}
                        <button
                            type="submit"
                            className="w-full bg-amber-400 text-gray-900 rounded py-3 text-sm font-bold hover:bg-amber-500 transition-colors"
                        >
                            Kirim Pesanan (Mockup)
                        </button>
                    </form>
                </div>

                {/* Kolom Keranjang */}
                <div className="rounded-lg border bg-white p-6 md:p-8 shadow-lg space-y-4">
                    <h2 className="font-semibold text-2xl text-gray-800">
                        Keranjang Anda
                    </h2>
                    <ul className="text-md space-y-3 text-gray-700">
                        <li className="flex justify-between">
                            <span>Cokelat Lumer (qty 2)</span>
                            <span className="font-medium">Rp40.000</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Keju Manis (qty 1)</span>
                            <span className="font-medium">Rp22.000</span>
                        </li>
                    </ul>
                    <div className="border-t pt-4 mt-4 space-y-2">
                        <div className="flex justify-between text-md">
                            <span>Subtotal</span>
                            <span className="font-medium">Rp62.000</span>
                        </div>
                        <div className="flex justify-between text-md text-gray-600">
                            <span>Biaya Pengiriman</span>
                            <span className="font-medium">Rp10.000</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                            <span>Total</span>
                            <span>Rp72.000</span>
                        </div>
                    </div>
                    <p className="text-xs text-neutral-500 italic pt-4">
                        (Data keranjang akan dinamis nanti saat terhubung dengan
                        sistem)
                    </p>
                </div>
            </section>
        </div>
    );
}