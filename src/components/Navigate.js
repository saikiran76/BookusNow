import { FaArrowRightLong } from "react-icons/fa6";

const Navigate = ({heading="Recommendations"}) =>{
    return(
        <div className="rec flex items-center">
            <h1 className="text-white font-semibold">{heading}</h1>
            <div className="pt-1 pl-2"><FaArrowRightLong /></div>
        </div>
    )

}

export default Navigate;