export default function PemesananPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-yellow-600">
                    Pemesanan (Placeholder)
                </h1>
                <p className="text-neutral-600 text-sm max-w-xl mx-auto">
                    Halaman ini akan menjadi keranjang belanja & proses
                    checkout. Saat ini hanya struktur dummy.
                </p>
            </header>

            <section className="rounded-lg border bg-white p-6 shadow-sm space-y-4">
                <h2 className="font-semibold text-lg">Keranjang Sementara</h2>
                <ul className="text-sm list-disc pl-5 space-y-1 text-neutral-600">
                    <li>Item contoh 1 (qty 2)</li>
                    <li>Item contoh 2 (qty 1)</li>
                </ul>
                <p className="text-sm text-neutral-500 italic">
                    (Data keranjang akan dinamis nanti)
                </p>
            </section>

            <section className="rounded-lg border bg-white p-6 shadow-sm space-y-4">
                <h2 className="font-semibold text-lg">
                    Form Checkout Sederhana
                </h2>
                <form className="grid gap-4 max-w-md">
                    <input
                        className="border rounded px-3 py-2 text-sm"
                        placeholder="Nama"
                    />
                    <input
                        className="border rounded px-3 py-2 text-sm"
                        placeholder="Nomor WhatsApp"
                    />
                    <textarea
                        className="border rounded px-3 py-2 text-sm"
                        placeholder="Alamat Pengiriman"
                        rows={3}
                    />
                    <button
                        disabled
                        className="bg-yellow-400/70 text-white rounded py-2 text-sm font-medium cursor-not-allowed"
                    >
                        Pesan (Nonaktif - mockup)
                    </button>
                </form>
                <p className="text-xs text-neutral-400 italic">
                    (Integrasi pemesanan & pembayaran akan ditambahkan nanti)
                </p>
            </section>
        </div>
    );
}
