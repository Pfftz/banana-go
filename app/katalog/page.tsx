
export default function KatalogPage() {
    const dummy = [
        { nama: "Cokelat Lumer", harga: "Rp20.000", img:"/img/ckltglw2.png" },
        { nama: "Coklat bubuk", harga: "Rp20.000", img:"/img/ckltbbk2.png" },
        { nama: "Vanila", harga: "Rp23.000", img:"/img/vanila2.png" },
        { nama: "Original", harga: "Rp15.000", img:"/img/asin2.png" },
        { nama: "Red Velvet", harga: "Rp24.000", img:"img/redvelvet2.png" },
    ];
    

    
    return (
        <div className="space-y-8">
            <header className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-yellow-600">
                    Katalog Rasa 
                </h1>
                <p className="text-neutral-600 text-sm max-w-xl mx-auto">
                    
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" >
                {dummy.map((item) => (
                    <div
                        key={item.nama}
                        className="rounded-lg border border-amber-200 bg-white p-5 shadow-sm flex flex-col"
                        id="list"
                    >
                        <div id="foto" className="aspect-video w-full mb-3  grid place-items-center text-xs text-neutral-400 rounded">
                            <img 
                            src={item.img} 
                            alt="Cau" 
                            className="w-full h-50 object-cover rounded-md mb-4"
                            />
                        </div>
                        
                        <div id="column">
                            <h3 className="font-semibold text-yellow-700">
                                {item.nama}
                            </h3>
                            <p className="font-semibold text-yellow-700">
                            {" "}
                                <span className="font-medium">{item.harga}</span>
                            </p>
                            <form action="">
                                <div className="quantity-input" data-min="1" data-max="10">
                                    <button className="minus-btn" type="button" aria-label="Kurangi Kuantitas">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </button>
                                    
                                    <input type="number" value="0" min="0" max="10" aria-label="Kuantitas"/>
                                    
                                    <button className="plus-btn" type="button" aria-label="Tambah Kuantitas">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </button>
                                </div>
                                <button id="btn" className="bg-yellow-400/70 text-white rounded py-2 text-sm font-medium cursor-not-allowed" type="submit">
                                Pesan Sekarang
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
