export default function DarkMode({ item }) {
    return (
        <div key={item.nim} className="flex md:flex-col border-2 rounded-lg bg-gray-700 h-54 w-full items-center text-left md:w-1/4 lg:w-1/6">
            <div className='bg-black md:border-b-2 rounded-l-lg md:rounded-bl-none md:rounded-t-lg bg-opacity-50 h-full flex justify-center items-center w-1/3 sm:w-1/3 md:w-full lg:w-full'>
                <img
                    src={item.foto || 'profile.png'}
                    className="border-2 rounded-full object-cover h-32 w-32 m-2"
                />
            </div>
            <div className="h-42 flex flex-col justify-between md:rounded-t-none md:rounded-bl-lg rounded-r-lg  bg-black bg-opacity-50 text-white p-2.5 w-full">
                <div>
                    <p className="font-bold text-sm font-mono underline underline-offset-2">{item.nama}</p>
                    <p className="font-bold text-[10px] font-mono">{item.nim}</p>
                </div>
                <div className="overflow-hidden overflow-y-auto w-full py-2 flex flex-col space-y-1 text-[5px] md:text-[9px] font-bold font-mono no-scrollbar h-28">
                    <div className="flex items-center">
                        <div className="flex-grow w-12">Status FRS</div>
                        <div className="w-2 text-center">:</div>
                        <div className="flex-grow w-24">{item.status_frs || 'Belum'}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-grow w-12">Status Mhs</div>
                        <div className="w-2 text-center">:</div>
                        <div className="flex-grow w-24">{item.status_mhs || 'Non Aktif'}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-grow w-12">SKS Lulus</div>
                        <div className="w-2 text-center">:</div>
                        <div className="flex-grow w-24">{item.sks_lulus || 0}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-grow w-12">IPK</div>
                        <div className="w-2 text-center">:</div>
                        <div className="flex-grow w-24">{item.ipk || 'N/A'}</div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-12">Alamat</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 break-words">{item.alamat || 'Alamat tidak tersedia'}</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-start flex-wrap">
                            <div className="flex-grow w-12">Info</div>
                            <div className="w-2 text-center">:</div>
                            <div className="flex-grow w-24 text-justify break-words">{item.info || 'Tidak ada info'}</div>
                        </div>
                    </div>
                </div>
                <button className="mt-2 rounded text-center px-2 py-1 bg-green-500 hover:bg-green-700 text-white text-xs font-bold">Detail</button>
            </div>
        </div>
    );
}