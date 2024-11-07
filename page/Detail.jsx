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
        <div className="flex flex-col border border-black p-2 h-full w-full">
            <div className='relative w-full h-full border border-black'>
                <img
                    src="x.png"
                    className='border border-black w-full h-56 object-cover'
                />
                <div className='w-auto h-12 p-2 absolute inset-0 z-full border border-black w-56 h-auto overflow-hidden'>
                    <div className='flex flex-col text-left'>
                    <p className='w-full font-bold text-sm'>Andrea Francesca</p>
                    <p className=' font-bold text-xs'>1119101432</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 border border-black h-56 w-full">
            </div>
            <div className="">

            </div>
        </div>

    )

}