import { DarkModeContext } from './DarkModeContext';
import { useContext, useState, useEffect } from 'react';
import { supabase } from '../server';

export default function detail({ item }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let { data: items, error } = await supabase
            .from('mahasiswa')
            .select('*');

        if (error) {
            console.log('Error fetching data:', error);
        } else {
            setData(items);
        }
    };

    return (
        <div className="flex w-full h-full ">
            <div className='relative flex rounded-lg flex-col sm:flex-row md:flex-row lg:flex-row w-full h-auto border-2 border-gray-600'>
                <div className='md:w-1/3 md:h-56 h-auto p-2 md:border md:border-black md:border-r'>
                <div className='flex md:border border-black justify-center p-2 '>
                    <img
                        src="x.png"
                        className='rounded-full md:rounded-none border border-gray-600 border-2 md:border-none h-32 w-32 md:h-full md:w-full object-cover'
                    />
                    </div>
                </div>
                <div className=' border-black border-gray-600 border-t-2 border-b-2 w-full md:w-auto md:inset-0 bottom-0 h-12 p-2 text-center left-0 z-full  h-auto overflow-hidden'>
                    <div className='flex flex-col text-left overflow-hidden'>
                        <p className='w-full font-bold text-xs'>Andrea Afilia Francesca </p>
                        <p className=' font-bold text-[10px] md:text-[12] lg'>1119101432</p>
                    </div>
                </div>
                
                    <div className='p-2 w-1/2 border-black border-r h-auto font-bold text-[9px]'>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jurusan</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">angkatan</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jurusan</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jalur Kuliah</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Tempat/Tgl Lahir</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Agama</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jenis Kelamin</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Status</div>
                            <div className="w-3 text-center">:</div>
                            <div className="flex-grow w-24 break-words"></div>
                        </div>
                    </div>
                    <div className=' w-1/2 border-black border-r h-auto'> </div>                
            </div>

            {/* <div className="mt-2 border border-black h-56 w-full">
            </div>
            <div className="">
            </div> */}
        </div>

    )

}