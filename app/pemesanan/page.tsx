export default function PemesananPage() {
    const dummy = [
        { nama: "Cokelat Lumer", harga: "Rp20.000", jumlah: 1, img: "/img/ckltglw2.png", total: "Rp20.000" },
        { nama: "Coklat bubuk", harga: "Rp20.000", jumlah: 1, img: "/img/ckltbbk2.png", total: "Rp20.000" },
        { nama: "Vanila", harga: "Rp23.000", jumlah: 1, img: "/img/vanila2.png", total: "Rp23.000" },
        { nama: "Original", harga: "Rp15.000", jumlah: 1, img: "/img/asin2.png", total: "Rp15.000" },
        { nama: "Red Velvet", harga: "Rp24.000", jumlah: 1, img: "img/redvelvet2.png", total: "Rp24.000" },
    ];
    return (
        <div className="space-y-8">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-yellow-600">
                    Pemesanan
                </h1>
                <p className="text-neutral-600 text-sm max-w-xl mx-auto">

                </p>
            </header>

            <div className="">
                <section className="rounded-lg border border-amber-200 bg-white p-6 shadow-sm space-y-4 ">
                    <div className="grid gap-6 sm:grid-cols-[60%_1fr]">
                        <div className="flex " id="column">
                            <div id="column">
                                <h2 className="text-gray-600 font-semibold text-lg">Pesanan Anda</h2>
                                <div className="cart-header">
                                    <div className="header-product">Produk Dipesan</div>
                                    <div className="header-price">Harga Satuan</div>
                                    <div className="header-quantity">Jumlah</div>
                                    <div className="header-total">Subtotal Produk</div>
                                </div>
                                {/* bagian ini pake CSS manual */}
                                {
                                    dummy.map((item) => (
                                        <div
                                            key={item.nama}
                                            className="product-row"
                                        >
                                            <div className="col-product-info">
                                                <img src={item.img} alt="Gambar Produk" />
                                                <div className="product-details">
                                                    <p className="product-name">Coklat Bubuk</p>
                                                </div>
                                            </div>


                                            <div className="text-gray-600 col-price">
                                                <p>{item.harga}</p>
                                            </div>


                                            <div className="text-gray-600 col-quantity">
                                                <p>{item.jumlah}</p>
                                            </div>


                                            <div className="col-total">
                                                <p>{item.total}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="cart-foother">
                                    <p>Total Belanja</p>
                                    <p>Rp. 5.000.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex" id="kolom">
                            <div className="" id="form">
                                <h2 className="text-gray-600 font-semibold text-lg">
                                    Checkout
                                </h2>
                                <form className="grid gap-4 max-w-md" >
                                    <input
                                        className="text-gray-500 border border-amber-200 rounded px-3 py-2 text-sm focus:border-amber-300"
                                        placeholder="Nama"
                                    />
                                    <input
                                        className="text-gray-500 border border-amber-200 rounded px-3 py-2 text-sm focus:border-amber-300"
                                        placeholder="Nomor WhatsApp"
                                    />
                                    <textarea
                                        className="text-gray-500 border border-amber-200 rounded px-3 py-2 text-sm focus:border-amber-300"
                                        placeholder="Alamat Pengiriman"
                                        rows={3}
                                    />
                                    <button
                                        disabled
                                        className="bg-yellow-400/70 text-black rounded py-2 text-sm font-semibold cursor-not-allowed"
                                    >
                                        Pesan (Nonaktif - mockup)
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
