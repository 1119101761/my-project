import { useState } from 'react';

export default function Container({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center bg-gray-900 shadow-md z-10 px-4 md:px-6">
                <div className="flex items-center space-x-4">
                    <div className="h-full w-24 overflow-hidden">
                        <p className="text-[16px] md:text-[20px] text-white font-bold">STIKOM</p>
                    </div>
                    <nav className="hidden md:flex items-center justify-center space-x-4 text-center">
                        <a href="#" className="text-white text-sm font-semibold transition hover:text-gray-400">Beranda</a>
                        <a href="#" className="text-white text-sm font-semibold transition hover:text-gray-400">Mahasiswa</a>
                        <a href="#" className="text-white text-sm font-semibold transition hover:text-gray-400">Matakuliah</a>
                        <a href="#" className="text-white text-sm font-semibold transition hover:text-gray-400">Kampus</a>
                        <a href="#" className="text-white text-sm font-semibold transition hover:text-gray-400">Tentang Kami</a>
                    </nav>
                </div>
                <div className="relative md:hidden">
                    <img
                        src="burger-bar.png"
                        alt="Menu"
                        className="h-6 cursor-pointer transition transform hover:scale-110 invert"
                        onClick={toggleMenu}
                    />
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg border border-gray-700">
                            <a href="akun" className="block px-4 py-2 hover:bg-gray-700">Akun</a>
                            <a href="loginpage" className="block px-4 py-2 hover:bg-gray-700">Log Out</a>
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center w-full bg-gray-800 text-white py-20 px-4 md:px-10">
                {children}
            </main>

            <footer className="bg-gray-900 w-full h-24 flex flex-col items-center justify-center text-white shadow-inner space-y-2">
                <div className="text-center font-bold text-sm">Tentang Kami</div>
                <div className="flex space-x-4">
                    <div className="bg-gray-700 border border-gray-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 transition hover:bg-gray-600"></div>
                    <div className="bg-gray-700 border border-gray-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 transition hover:bg-gray-600"></div>
                    <div className="bg-gray-700 border border-gray-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 transition hover:bg-gray-600"></div>
                    <div className="bg-gray-700 border border-gray-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 transition hover:bg-gray-600"></div>
                </div>
            </footer>
        </div>
    );
}
