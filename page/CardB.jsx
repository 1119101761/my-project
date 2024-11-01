export default function CardB(){
    return(
        <div className="relative rounded-md mt-10 border-b border-gray-700 rounded-lg h-96 w-60 overflow-hidden group">
                <img
                    src="public/cover.jpg"
                    className="rounded-md object-cover opacity-90 h-full w-full"
                    alt="Cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-2 ">
                    <p className="font-bold text-[12px] font-mono underline underline-offset-1">Andrea Francesca</p>
                    <p className="font-bold text-[10px] font-mono">1121901761</p>
                    <button className="absolute right-0 bottom-0 rounded-l h-8 w-8 px-2 py-1 text-white text-xs font-bold">
                        <img src="image.png" className="invert"></img>
                    </button>
                    <div className=" overflow-y-scroll no-scrollbar w-full mt-1.5 flex flex-col space-y-1 text-[9px] font-bold font-mono">
                        <div className="flex items-center">
                            <div className=" flex-grow w-12">Status FRS</div>
                            <div className=" w-2 text-center">:</div>
                            <div className=" flex-grow w-24">Sudah</div>
                        </div>
                        <div className="flex items-center">
                            <div className=" flex-grow w-12">Status Mhs</div>
                            <div className=" w-2 text-center">:</div>
                            <div className=" flex-grow w-24">Aktif</div>
                        </div>
                        <div className="flex items-center">
                            <div className=" flex-grow w-12">SKS Lulus</div>
                            <div className=" w-2 text-center">:</div>
                            <div className=" flex-grow w-24">101</div>
                        </div>
                        <div className="flex items-center">
                            <div className=" flex-grow w-12">IPK</div>
                            <div className=" w-2 text-center">:</div>
                            <div className=" flex-grow w-24">3.0</div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-12">Alamat</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words ">
                                    Jln Kesana Kemari No.12, Jember, Jawa Timur
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-start flex-wrap">
                                <div className="flex-grow w-12">Info</div>
                                <div className="w-2 text-center">:</div>
                                <div className="flex-grow w-24 break-words">
                                    Cuti Seumur Hidup
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="absolute right-2 bottom-2 text-white text-xs font-bold">Detail</button> */}
                </div>
            </div>
    )
}
