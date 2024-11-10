import React, { useEffect, useState } from 'react';
import { supabase } from '../server';
import Card from './Card';
import Biodata from './Biodata'
export default function Tampilan() {
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
        <div className='flex flex-col w-full h-full text-center px-2'>
            <p className='font-bold text-[12px] md:text-[15px] lg:text-[17px]'>Bimbingan</p>
            <div className='py-2'>
                <p className='my-4 font-bold text-[12px] md:text-[15px] lg:text-[17px]'>Teknik Informatika - S1 Regular Pagi</p>
                <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 w-full h-full justify-center'>
                    {data.filter(item => (item.kategori || '').toLowerCase() === 'pagi').map(item => (
                        <Card key={item.nim} item={item} />
                    ))}
                </div>
            </div>
            <p className='mt-5 py-2 font-bold text-[12px] md:text-[15px] lg:text-[17px]'>Teknik Informatika - S1 Regular Malam</p>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 w-full h-full justify-center mb-10'>
                {data.filter(item => (item.kategori || '').toLowerCase() === 'malam').map(item => (
                    <Card key={item.nim} item={item} />
                ))}
            </div>
        </div>
    );
}
