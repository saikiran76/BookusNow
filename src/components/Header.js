import { GiHamburgerMenu } from "react-icons/gi";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return(
        <div className="parent shadow-lg flex justify-between h-16 font-inter">
            <div className="part-1 w-[50%] md:w-[25%]">
                <h1 className="logo font-semibold font-inter text-lg md:text-2xl text-center pt-2 md:pt-4 mr-8 md:mr-0">BookUsNow</h1>
                <div className="flex md:hidden ml-9">
                    <FaLocationDot/>
                    <p className="text-sm text-gray-500 ml-1">Mumbai, India</p>
                </div>
                {/* <div className="block md:hidden w-10 text-sm"><Marker/></div> */}
            </div>

            <div className="part-2 center w-[10%] md:w-[50%] hidden md:flex items-center">
                <div className="cat bg-gray-800 w-32 h-10 mx-2 rounded-md flex items-center px-2 py-3">
                    <div className="ml-2"><GiHamburgerMenu style={{color:"white"}} /></div>
                    <div><p className="text-white px-2 inline-block text-sm font-bold">Categories</p></div>
                </div>
                
                <div className="search flex relative">
                    <input placeholder="DJ Phantom" className=" px-2 py-1 w-[30em] rounded-md border-gray-400 border-l border-r border-t border-b h-9"></input>
                    <div className="my-1 absolute left-[28em] top-1"><CiSearch/></div>
                </div>
            </div>

            <div className="part-3 w-[25%] flex px-4">
                <div className="my-3 block md:hidden"><CiSearch/></div>
                <div className="mx-3 my-3 md:my-6"><FcLikePlaceholder style={{color:"blue"}} /></div>
                <div className="font-semibold my-5 text-gray-500 hidden md:block">Favourites</div>
                <button className="w-[30%] border-gray-300 my-3 mx-4 border-l border-r border-t border-b rounded-lg font-semibold hidden md:block">Signin</button>
                <div className="my-3 block md:hidden"><FaUserAlt/></div>
            </div>

        </div>
    )

}

export default Header;