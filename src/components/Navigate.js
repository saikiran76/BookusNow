import { FaArrowRightLong } from "react-icons/fa6";

const Navigate = ({heading="Recommendations"}) =>{
    return(
        <div className="rec flex items-center font-inter">
            <h1 className="font-semibold">{heading}</h1>
            <div className="pt-1 pl-2"><FaArrowRightLong /></div>
        </div>
    )

}

export default Navigate;