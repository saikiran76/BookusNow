import { FaLocationDot } from "react-icons/fa6";

const Marker = ({location = "Mumbai, India", set}) =>{
    return(
        <div className="my-3 flex gap-1 items-center w-[8em] font-inter">
                <div className=""><FaLocationDot /></div>
                <div className="text-sm"><p>{location}</p></div>
            </div>
    )
}


export default Marker;