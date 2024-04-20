import Marker from "./Map";

const Card = ({eventName, date, weather, distanceKm, imgUrl, city}) =>{

    const extractImageId = (rawURL) => {
        const RAW_URL1 = rawURL.split("/d/");
        const RAW_URL2 = RAW_URL1[1].split("/view");
        const IMAGE_ID = RAW_URL2[0];
        return `https://drive.google.com/thumbnail?id=${IMAGE_ID}&sz=w1000`;
     };

    const dateNew = new Date(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateNew);
    const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(dateNew);
    const year = dateNew.getFullYear();

    const formattedDate = `${month}  ${day}, ${year}`;

    // console.log(image);
    
    return(
        <div className="rounded-md w-full md:w-[25%] mx-10 my-5 flex flex-col border-gray-400 border-l border-r border-t border-b font-inter">
            <div className="relative">
                <img className="rounded-lg object-cover w-full h-full" src={extractImageId(imgUrl)} alt="Event"/>
                <p className="absolute text-gray-400 bg-opacity-50 bottom-4 md:bottom-3 left-4 md:left-3 w-[91%] rounded-bl-lg rounded-br-lg px-2 py-1">{formattedDate}</p>
            </div>
            <p className="text-lg font-semibold px-3 pt-2">{eventName}</p>
            <div className="flex items-center px-2">
                <div className="px-1 text-gray-400"><Marker location={city}/></div>
                <div className="w-[10em] ml-8"><p className="text-gray-400 text-sm">{weather} | <span>{Math.floor(distanceKm/1000)}km</span></p></div>
            </div>
            

        </div>
    )
    
}

export default Card;