import banner from "../Banner.svg";

const Banner = () =>{
    return(
        <div className="">
            <img src={banner} className="ban w-screen h-[600px] md:h-full" alt="banner"/>
            <div className="tag relative flex flex-col justify-center mx-10 md:mx-16 gap-5 items-center">
                <h1 className="text-3xl md:text-6xl font-bold md:font-semibold text-white bottom-[480px] md:bottom-[520px] absolute">Discover Exciting Events <span className="hidden md:inline">Happening</span></h1>
                <h1 className="text-3xl md:text-6xl font-semibold absolute bottom-[420px] md:bottom-[430px] inline md:block text-white"><span className="inline md:hidden">Happening</span>Near You - <span className="hidden md:inline">Stay Tune For Updates!</span> </h1>
                <h1 className="text-3xl font-semibold absolute md:hidden bottom-[350px]">Stay Tune For Updates!</h1>
                <p className="absolute bottom-[250px] md:bottom-[350px] text-sm text-white mx-10 md:mx-40 font-bold">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
        </div>
    )

}


export default Banner;