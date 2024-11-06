import { useState, useContext } from 'react';
import { DarkModeContext } from '../page/DarkModeContext'; // Sesuaikan dengan path Anda

export default function Container({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, setDarkMode } = useContext(DarkModeContext); // Mengambil dari context

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="relative flex flex-col min-h-screen">
            <header className={`fixed top-0 left-0 w-full h-16 flex justify-between items-center shadow-md z-30 px-4 md:px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                <div className="flex items-center space-x-4">
                    <div className="h-full w-24 overflow-hidden">
                        <p className={`text-[16px] md:text-[20px] font-bold ${darkMode ? 'text-white' : ''}`}>STIKOM</p>
                    </div>
                    <nav className="hidden md:flex items-center justify-center space-x-4 text-center">
                        {['Beranda', 'Mahasiswa', 'Matakuliah', 'Kampus', 'Tentang Kami'].map((item) => (
                            <a href="#" key={item} className={`text-sm font-semibold transition hover:text-gray-400 ${darkMode ? 'text-white' : 'text-black'}`}>{item}</a>
                        ))}
                    </nav>
                </div>
                <div className="relative flex items-center gap-2">
                    <button
                        onClick={toggleDarkMode}
                        className={`relative w-8 h-8 rounded-full border border-none flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-white-500'} text-white`}
                    >
                        <div className={`absolute rounded-full w-full h-full transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-blue-500'}`} />
                        <div className={`absolute rounded-full w-full h-full ${darkMode ? 'bg-white' : 'bg-gray-800'} transition-all duration-500`} style={{ clipPath: darkMode ? 'inset(0 50% 0 0)' : 'inset(0 0 0 0)' }} />
                    </button>
                    <div className="relative">
                        <img
                            src="burger-bar.png"
                            alt="Menu"
                            className={`h-6 cursor-pointer transition transform hover:scale-110 ${darkMode ? 'invert' : ''}`}
                            onClick={toggleMenu}
                        />
                        {menuOpen && (
                            <div className="absolute right-0 w-48 bg-gray-800 text-white rounded shadow-lg border border-gray-700 mt-2">
                                <a href="akun" className="block px-4 py-2 hover:bg-gray-700">Akun</a>
                                <a href="loginpage" className="block px-4 py-2 hover:bg-gray-700">Log Out</a>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <main className={`flex-grow flex flex-col items-center justify-center w-full h-full py-20 px-4 md:px-10 relative z-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-150 '}`}>
                {children}
            </main>

            <footer className={`w-full h-24 flex flex-col items-center justify-center shadow-inner space-y-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-white text-black'}`}>
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
