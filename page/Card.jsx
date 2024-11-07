import { DarkModeContext } from './DarkModeContext';
import { useContext, useState } from 'react';

export default function Card({ item }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode } = useContext(DarkModeContext);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div
            key={item.nim}
            className={` flex flex-row sm:flex-col md:flex-col border-2 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800 border-white ' : 'bg-orange-200 bg-opacity-35 border-gray-700 '} h-[180px] sm:h-auto md:h-auto lg:h-auto w-full items-center text-left  `}
        >
            <div className={`max-sm:border-r-2 ${darkMode ? '' : 'border-gray-600'} sm:border-b-2 md:border-b-2 lg:border-b-2 br-border-none sm:rounded-bl-none sm:rounded-tr-lg md:border-b md:border-b rounded-l-sm md:rounded-bl-none md:rounded-t-lg h-full flex justify-center items-center w-2/4 sm:w-full md:w-full lg:w-full sm:p-2 md:p-2 lg:p-2 `}>
                <img
                    src={item.foto || 'profile.png'}
                    className={`${darkMode ? 'border-white' : 'border-gray-800'} rounded-l-md object-cover h-full w-full sm:rounded-full sm:border-2 rounded-l-md md:border-2 lg:border-2 md:rounded-full lg:rounded-full sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-28 lg:w-28`}
                />
            </div>
            <div className='relative w-full h-full'>
                <img
                    src={'x.png'}
                    className={`${darkMode ? 'opacity-0 h-44 md:h-44 lg:h-44' : 'h-44 md:h-44 lg:h-44'} w-full h-full object-cover rounded-r-md sm:rounded-r-none sm:rounded-b-md`} />
                <div className={`sm:rounded-b-md absolute inset-0 w-full flex h-full flex-col justify-between rounded-r-md sm:rounded-tr-none md:rounded-t-none md:rounded-bl-lg  ${darkMode ? 'bg-black bg-opacity-30 ' : 'text-black'}  p-2 w-3/4 sm:w-full px-4`}>
                    <div>
                        <p className="font-bold text-[12px] sm:text-xs md:text-xs lg:text-xs underline underline-offset-2">{item.nama}</p>
                        <p className="font-bold text-[10px] sm:text-[8px] md:text-[10px]">{item.nim}</p>
                    </div>
                    <div className="font-bold overflow-hidden overflow-y-auto w-full py-1 flex flex-col space-y-1 text-[8px] sm:text-[8px] md:text-[8px] lg:text-[8px]  no-scrollbar h-24 sm:h-28 md:h-28 lg:h-28">
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">Status FRS</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.status_frs || 'Belum'}</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">Status MHS</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.status_mhs || 'Tidak ada info'}</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">SKS Lulus</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.sks_lulus || 'Tidak ada info'}</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">IPK</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.ipk || 'N/A'}</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">Alamat</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.alamat || 'Alamat tidak tersedia'}</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-10 sm:w-12">Info</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">{item.info || 'Tidak ada info'}</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative '>
                        <button
                            onClick={toggleMenu}
                            className={`z-10 w-full mt-1.5 rounded text-center px-1 py-1 text-[10px] sm:text-[8px] md:text-[8px] lg:text-[8px] font-bold ${darkMode ? 'bg-green-500 hover:bg-green-700' : 'bg-orange-400  hover:bg-orange-600 text-black'}`}>Details</button>
                        {menuOpen && (
                            <div className="font-bold font-mono z-50 absolute text-xs w-full bg-orange-300 text-black rounded-md border border-gray-700 mt-2">
                                <a href="keuangan" className="block px-4 py-2 w-full hover:bg-gray-400">Keuangan</a>
                                <a href="nilaitranskrip" className="block px-4 py-2 hover:bg-gray-400">Nilai Transkrip</a>
                                <a href="nilaipersemester" className="block px-4 py-2 hover:bg-gray-400">Nilai Per-Semester</a>
                                <a href="detail" className="block px-4 py-2 hover:bg-gray-400">Detail FRS</a>
                                <div className='flex items-center w-full border-t border-gray-700 d'>
                                    <a href="detail" className="block border-r border-gray-700 px-2 py-2 w-1/2 text-center hover:bg-gray-400 rounded-bl-md">Biodata</a>
                                    <a href="history" className="block px-2 py-2 w-1/2 text-center hover:bg-gray-400 rounded-br-md">History</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
