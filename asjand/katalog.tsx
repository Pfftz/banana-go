/* eslint-disable @next/next/no-img-element */

export default function KatalogPage() {
    const dummy = [
        {
            nama: "Cokelat Lumer",
            harga: "Rp20.000",
            deskripsi:
                "Kombinasi sempurna renyahnya pisang dengan lelehan cokelat premium.",
            gambar: "https://images.unsplash.com/photo-1596767936184-f2575771c775?q=80&w=600&h=400&auto=format&fit=crop",
            alt: "Camilan pisang rasa cokelat lumer",
        },
        {
            nama: "Keju Manis",
            harga: "Rp22.000",
            deskripsi:
                "Perpaduan unik antara gurihnya keju dengan sentuhan manis yang bikin nagih.",
            gambar: "https://images.unsplash.com/photo-1628165785800-4b2e88a38b16?q=80&w=600&h=400&auto=format&fit=crop",
            alt: "Camilan pisang rasa keju manis",
        },
        {
            nama: "Caramel Crunch",
            harga: "Rp23.000",
            deskripsi:
                "Pisang renyah berbalut karamel manis dengan tekstur renyah.",
            gambar: "https://images.unsplash.com/photo-1624683074092-23c3140a8300?q=80&w=600&h=400&auto=format&fit=crop",
            alt: "Camilan pisang rasa caramel crunch",
        },
        {
            nama: "Matcha Delight",
            harga: "Rp24.000",
            deskripsi:
                "Rasa teh hijau premium yang otentik berpadu dengan renyahnya pisang.",
            gambar: "https://placehold.co/600x400/a3e635/1f2937?text=Matcha+Delight",
            alt: "Camilan pisang rasa matcha",
        },
    ];
    return (
        <div className="space-y-8">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-600">
                    Katalog Rasa Kami
                </h1>
                <p className="text-neutral-600 text-lg max-w-xl mx-auto">
                    Temukan semua rasa camilan pisang premium yang kami tawarkan.
                </p>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {dummy.map((item) => (
                    <div
                        key={item.nama}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
                    >
                        <img
                            src={item.gambar}
                            alt={item.alt}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-amber-600 mb-3">
                                {item.nama}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                                {item.deskripsi}
                            </p>
                            <p className="text-lg text-gray-800 font-semibold mb-6">
                                {item.harga}
                            </p>
                            <a
                                href="/pemesanan"
                                className="inline-block text-center bg-amber-400 text-gray-900 font-bold py-2 px-5 rounded-full hover:bg-amber-500 transition-colors duration-300"
                            >
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}