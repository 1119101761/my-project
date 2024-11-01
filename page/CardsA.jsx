export default function CardA(){
    return(
        
        <div className="relative rounded-md mt-10 border-b border-gray-700 rounded-lg h-96 w-60 overflow-hidden group">
        <img
            src="public/cover.jpg"
            className="rounded-md object-cover opacity-90 h-full w-full"
            alt="Cover"z
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-3 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
            <p className="font-bold text-xm font-mono">Andrea Francesca</p>
            <p className="font-bold text-xs font-mono ">1121901761</p>
        </div>
        <div className="absolute font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-50 bottom-0 left-0 w-full px-3 py-2">
            <div className="grid grid-cols-3 gap-x-2 text-white text-xs font-bold">
                <div className="">Angkatan</div>
                <div className="text-center">:</div>
                <div className="">2021</div>
                <div className="">IPK</div>
                <div className="text-center">:</div>
                <div className="">3.7</div>
                <div className="">SKS</div>
                <div className="text-center">:</div>
                <div className="text-z">144</div>
            </div>
        </div>
    </div>
    )
}