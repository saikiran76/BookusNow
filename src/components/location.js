import Marker from "./Map";

const Location = ()=>{
    const items = ['Live shows', 'Streams', 'Movies', 'Plays', 'Events', 'Sports', 'Activities']
    return(
        <div className="shadow-lg flex font-inter">
            <div className="hidden md:block ml-20 mr-40 font-inter"><Marker/></div>
            <div className="flex gap-3 md:gap-7 items-center justify-between overflow-x-auto no-scrollbar  ml-12 md:ml-0 my-2 md:my-0 pr-8 md:pr-0">
                {
                    items.map((item, index)=>(
                        <div className="text-gray-500"><p className="text-sm text-gray-500 font-semibold w-[6em]" key={index}>{item}</p></div>
                    ))
                }
            </div>
        </div>
    )

}

export default Location;