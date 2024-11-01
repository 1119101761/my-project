import React, { useEffect, useState } from 'react';
import { supabase } from '../server';

export default function PageBerandaUtama() {
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
        <div className="flex-col items-center justify-center w-full h-full ">
            <div className="p-8 text-xm font-bold">Judul</div>
            <div className="flex items-center justify-center">
                <div className="bg-white border w-96 h-48 border-black"> image 1</div>
                <div className="p-2"></div>
                <div className="bg-white border w-96 h-48 border-black">image 2</div>
            </div>
            <div className="p-2"></div>
            <div className="p-7 text-xm font-bold">Judul</div>
            <div className="bg-white border w-full h-48 border-black">image 3 : slideshow</div>
            <div className="p-8">
                <h2>Data dari Supabase</h2>
                <ul>
                    {data.map(item => (
                        <div key={item.nim}>{item.nama}_{item.nim}</div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
