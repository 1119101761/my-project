import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';

export default function Biodata({ item }) {
    if (!item) return null;
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div key={item.nim} className="flex flex-col h-auto w-auto">
            <div className='lg:row-span-2 p-2 border-b-2 border-gray-600 flex justify-center items-center'>
                <img
                    src={item.foto}
                    alt="Profile"
                    className='border-2 rounded-full h-32 w-32 object-cover border-gray-600'
                />
            </div>
            <div className='relative w-full h-full'>
                <img
                    src={'x.png'}
                    className={`${darkMode ? 'opacity-0 ' : ''} w-full h-86 sm:h-auto md:h-auto lg:h-auto object-cover`}
                />
                <div className='absolute inset-0 px-4 py-2'>
                    <div className='border-none'>
                        <p className="font-bold text-[12px] sm:text-xs md:text-xs lg:text-xs underline underline-offset-2">{item.nama}</p>
                        <p className="font-bold text-[10px] sm:text-[8px] md:text-[10px]">{item.nim}</p>
                    </div>
                    <div className="font-bold border border-black overflow-y-auto w-full py-2 flex flex-col space-y-1 text-[8px] sm:text-[8px] md:text-[8px] lg:text-[8px] no-scrollbar h-auto">
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jurusan</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.jurusan || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Angkatan</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.angkatan || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jalur Kuliah</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.jalur_kuliah || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Tempat/Tgl Lahir</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.tempat_lahir || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Agama</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.agama || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Jenis Kelamin</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.jenis_kelamin || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Status</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.status || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Pekerjaan</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.pekerjaan || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Alamat</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.alamat || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Asal Sekolah</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.asal_sekolah || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Tahun Lulus</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.kelulusan || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">No HP</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.nomer_pribadi || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Email</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.email || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Minat/Hobi</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.hobi || 'Tidak ada info'}</div>
                        </div>
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-10 sm:w-12">Organisasi</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.organisasi || 'Tidak ada info'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
