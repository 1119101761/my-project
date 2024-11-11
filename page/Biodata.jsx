import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';

export default function Biodata({ item }) {
    if (!item) return null;
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div key={item.nim} className="flex w-full h-full">
            <div className={`relative flex rounded-lg flex-col sm:flex-row w-full h-auto border-2 ${darkMode ? 'border-white' : 'border-gray-600'}`}>
                <div className='md:w-1/3 max-sm:p-2 max-sm:border-b-2 sm:border-r-2 md:border-r border-gray-600 flex justify-center items-center'>
                    <img
                        src={item.foto}
                        alt="Profile"
                        className='border-2 md:rounded-br-full sm:border-none md:border-none lg:border-none rounded-full sm:rounded-none md:rounded-none lg:rounded-none sm:h-full sm-w-full border-gray-600 h-32 w-32 md:h-full md:w-full lg:h-full lg:w-full object-cover'
                    />
                </div>
                <div className='flex-grow  '>
                    <div className='p-2 border-b-2 border-gray-600'>
                    <p className='font-bold text-sm'>{item.nama}</p>
                    <p className='text-xs font-bold'>{item.nim}</p>
                    </div>
                    <div className='p-2 space-y-2 text-xs'>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Jurusan</span>
                            <span className="flex-grow">: {item.jurusan}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Angkatan</span>
                            <span className="flex-grow">: {item.angkatan}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Jalur Kuliah</span>
                            <span className="flex-grow">: {item.jalur_kuliah}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Tempat/Tgl Lahir</span>
                            <span className="flex-grow">: {item.tempat_lahir}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Agama</span>
                            <span className="flex-grow">: {item.agama}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Jenis Kelamin</span>
                            <span className="flex-grow">: {item.jenis_kelamin}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                        <div className="flex">
                            <span className="w-1/3 font-semibold">Status</span>
                            <span className="flex-grow">: {item.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
