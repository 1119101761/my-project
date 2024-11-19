import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';

export default function Biodata({ item }) {
    if (!item) return null;
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div key={item.nim} className="flex flex-col h-auto w-auto">
            <div className="lg:row-span-2 p-2 border-b-2 border-gray-600 flex justify-center items-center">
                <img
                    src={item.foto}
                    alt="Profile"
                    className="border-2 rounded-full h-32 w-32 object-cover border-gray-600"
                />
            </div>
            <div className="relative w-full h-full">
                <img
                    src={'x.png'}
                    className={`${darkMode ? 'opacity-0 ' : ''} w-full h-auto object-cover`}
                />
                <div className="absolute inset-0 px-4 py-2 overflow-hidden">
                    <div className="border-none">
                        <p className="font-bold text-[12px] sm:text-xs md:text-xs lg:text-xs underline underline-offset-2">
                            {item.nama}
                        </p>
                        <p className="font-bold text-[10px] sm:text-[8px] md:text-[10px]">
                            {item.nim}
                        </p>
                    </div>
                    <div className="font-bold border border-black overflow-y-auto w-full py-2 flex flex-col space-y-1 text-[8px] sm:text-[8px] md:text-[8px] lg:text-[8px] no-scrollbar h-42">
                        {[
                            { label: 'Jurusan', value: item.jurusan },
                            { label: 'Angkatan', value: item.angkatan },
                            { label: 'Jalur Kuliah', value: item.jalur_kuliah },
                            { label: 'Tempat/Tgl Lahir', value: item.tempat_lahir },
                            { label: 'Agama', value: item.agama },
                            { label: 'Jenis Kelamin', value: item.jenis_kelamin },
                            { label: 'Status', value: item.status },
                            { label: 'Pekerjaan', value: item.pekerjaan },
                            { label: 'Alamat', value: item.alamat },
                            { label: 'Asal Sekolah', value: item.asal_sekolah },
                            { label: 'Tahun Lulus', value: item.kelulusan },
                            { label: 'No HP', value: item.nomer_pribadi },
                            { label: 'Email', value: item.email },
                            { label: 'Minat/Hobi', value: item.hobi },
                            { label: 'Organisasi', value: item.organisasi },
                        ].map(({ label, value }) => (
                            <div key={label} className="flex items-start flex-wrap">
                                <div className="flex-grow w-20 sm:w-24">{label}</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-40 truncate">{value || 'Tidak ada info'}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
