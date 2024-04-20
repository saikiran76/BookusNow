import Marker from "./Map";

const extractImageId = (rawURL) => {
    const RAW_URL1 = rawURL.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/thumbnail?id=${IMAGE_ID}&sz=w1000`;
 };

const RecCards = ({ imgUrl, event, location, date, weather }) => {
    const image = extractImageId(imgUrl);

    if (!image) {
        return <div>Loading...</div>; 
    }

    const dateNew = new Date(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateNew);
    const year = dateNew.getFullYear();

    const formattedDate = `${month} ${year}`;


    return (
        <div className="rounded-md flex flex-col w-64 md:w-[300px] pr-4 relative overflow-hidden gap-2">
            <img className="rounded-lg object-cover w-full h-full" src={image} alt="Event" style={{objectFit:"cover", transform: 'scale(1.25, 1.2)' }} />

            <div className="flex flex-row absolute bottom-0 gap-0 md:gap-6">

                <div className="flex flex-col justify-between ml-6 mb-3">
                    <p className="text-lg font-bold px-2 w-[6em] text-gray-300">{event}</p>
                    <div className="text-gray-200"><Marker set={"hidden"} location={location}/></div>
                </div> 

                <div className="flex flex-col justify-end mb-6 mr-3 md:mr-0">
                    <p className="text-sm text-gray-200 px-2 font-bold">{formattedDate}</p>
                    <p className="text-sm text-gray-400 px-2">{weather}</p>
                </div>

            </div>       
        </div>
    );
};

export default RecCards;








