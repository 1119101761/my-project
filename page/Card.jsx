import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';

export default function Card({ item }) {
    const { darkMode } = useContext(DarkModeContext); 

    return (
        <div 
            key={item.nim} 
            className={`flex flex-row md:flex-col border rounded-lg ${darkMode ? 'bg-gray-800 border-white' : 'bg-gray-300 border-gray-500 '} h-auto w-full items-center text-left md:w-1/4 lg:w-1/6`}
        >
            <div className="bg-black max-md:border-r md:border-b md:border-b rounded-l-lg md:rounded-bl-none md:rounded-t-lg bg-opacity-50 h-full flex justify-center items-center w-1/4 sm:w-1/3 md:w-full lg:w-full p-1">
                <img
                    src={item.foto || 'profile.png'}
                    className="border rounded-full object-cover h-16 w-16 sm:h-20 sm:w-20 md:h-32 md:w-32"
                />
            </div>
            <div className={`flex flex-col justify-between rounded-r-lg md:rounded-t-none md:rounded-bl-lg bg-black ${darkMode ? 'bg-opacity-50' : 'bg-opacity-70'} text-white p-2 w-3/4 sm:w-full`}>
                <div>
                    <p className="font-bold text-[6px] sm:text-xs md:text-sm font-mono underline underline-offset-2">{item.nama}</p>
                    <p className="font-bold text-[5px] sm:text-[7px] md:text-[10px] font-mono">{item.nim}</p>
                </div>
                <div className="overflow-hidden overflow-y-auto w-full py-1 flex flex-col space-y-1 text-[4px] sm:text-[6px] md:text-[7px] font-bold font-mono no-scrollbar h-18 md:h-28">
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Status FRS</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.status_frs || 'Tidak ada info'}</div>
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
                <button className="mt-1 rounded text-center px-1 py-1 bg-green-500 hover:bg-green-700 text-white text-[6px] sm:text-xs font-bold">Detail</button>
            </div>
        </div>
    );
}
