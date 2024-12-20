import { DarkModeContext } from './DarkModeContext';
import { useEffect, useContext, useState } from 'react';
import { supabase } from '../server';

export default function item({ item }) {
    if (!item) return null;
    const [item, setitem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { darkMode } = useContext(DarkModeContext);
    useEffect(() => {
        if (item?.nim) {
            fetchitem(item.nim);
        }
    }, [item?.nim]);

    // const tambahitem = async (nim, saran, analisa) => {
    //     try {
    //         const { data, error } = await supabase
    //             .from('item')
    //             .insert({
    //                 nim,
    //                 tanggal: new Date().toISOString(),
    //                 saran,
    //                 analisa,
    //             });

    //         if (error) {
    //             console.error("Error menambahkan item:", error.message);
    //         } else {
    //             console.log("item berhasil ditambahkan:", data);
    //             fetchitem(nim);
    //         }
    //     } catch (err) {
    //         console.error("Error sistem:", err);
    //     }
    // };

    const fetchitem = async (nim) => {
        if (!nim) return; 
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('item')
                .select('*')
                .eq('nim', item.nim); 

            if (error) {
                console.error("Error fetching item:", error.message);
            } else {
                setitem(data); 
            }
        } catch (err) {
            console.error("Error sistem:", err);
        } finally {
            setIsLoading(false);
        }
    }


    return (

        // Menampilkan biodata sesuai data yang dipilih
        <div className='flex flex-col w-full h-[450px]'>
            <div className='flex border-black w-full h-[180px]'>
                <div className={`max-sm:border-r-2 ${darkMode ? '' : 'border-gray-600'}  sm:border-b-2 md:border-b-2 lg:border-b-2 br-border-none sm:rounded-bl-none sm:rounded-tr-lg md:border-b md:border-b rounded-l-sm md:rounded-bl-none md:rounded-t-lg h-full flex justify-center items-center w-2/4 sm:w-full md:w-full lg:w-full sm:p-2 md:p-2 lg:p-2 `}>
                    <img
                        src={item.foto || 'profile.png'}
                        className={`${darkMode ? 'border-white' : 'border-gray-800'} rounded-l-md object-cover h-full w-full sm:rounded-full sm:border-2 rounded-l-md md:border-2 lg:border-2 md:rounded-full lg:rounded-full sm:h-24 sm:w-24 md:h-24 md:w-2 4 lg:h-28 lg:w-28`}
                    />
                </div>
                <div className='relative w-full h-full'>
                    <img
                        src={'x.png'}
                        className={`${darkMode ? 'opacity-0 ' : ''} h-full object-cover rounded-r-md sm:rounded-r-none sm:rounded-b-md`} />
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
                        <button className={`z-10 w-full mt-1.5 rounded text-center px-1 py-1 text-[10px] sm:text-[8px] md:text-[8px] lg:text-[8px] font-bold ${darkMode ? 'bg-green-500 hover:bg-green-700' : 'bg-orange-400  hover:bg-orange-600 text-black'}`}>Tambah item</button>
                    </div>
                </div>
            </div>

            {/* Menampilkan item sesuai dengan data yang dipilih  */}
            <div className='border flex border-white w-full h-full'>
                <div className='p-2 space-1 w-full h-full font-bold text-xs flex'>
                    <div className='flex flex-col w-7 '>
                        <div>No</div>
                        <div>{item.id}</div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div>Tanggal</div>
                        <div>{item.tanggal}</div>
                    </div>
                    <div className='flex flex-col flex-1 '>
                        <div>Saran</div>
                        <div>{item.saran}</div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div>Analisa</div>
                        <div>{item.analisa}</div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div>Dosen</div>
                        <div>{item.dosen}</div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div>Action</div>
                        <div className='flex items-center'>
                            <button className='w-8 h-8 mr-2'>
                                <img src='https://cdn-icons-png.flaticon.com/128/9790/9790368.png'></img>
                            </button>
                            <button className='w-8 h-8'>
                                <img src='https://cdn-icons-png.flaticon.com/128/12225/12225620.png'></img>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}