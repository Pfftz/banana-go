export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-wrap justify-between items-center text-center md:text-left">
                    {/* Info & Copyright */}
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <h4 className="text-xl font-bold text-white mb-2">
                            Banana Go
                        </h4>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Banana Go. All
                            rights reserved.
                        </p>
                        <p className="text-sm mt-1">
                            Fresh banana-based delights delivered with a smile.
                        </p>
                    </div>

                    {/* Link Footer */}
                    <div className="flex justify-center w-full md:w-auto space-x-6">
                        <a
                            href="/"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Beranda
                        </a>
                        <a
                            href="/katalog"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Katalog
                        </a>
                        <a
                            href="/pemesanan"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Pemesanan
                        </a>
                        <a
                            href="/kontak-testimoni"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Testimoni
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}