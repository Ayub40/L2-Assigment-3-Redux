
// react icons
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {

    return (
        // <div className="w-full h-full rounded-md" style={{
        //     backgroundImage: "url("https://i.ibb.co/N1n4Pd0/michael-frattaroli-207280-unsplash.png")",
        //         backgroundSize: "cover"
        // }}>
        <div>
            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
                <div className="p-8 pb-[100px] w-full lg:w-[50%]">
                    <h1 className="text-[40px] lg:text-[60px] dark:text-[#abc2d3] leading-[45px] lg:leading-[65px] font-[500]">Be
                        fashionable this summer</h1>
                    <p className="text-[16px] dark:text-[#abc2d3] mt-2">We arranged a liquidation before the start of the season. Buy summer
                        clothes now with a 50% discount</p>

                    <div className="flex items-center flex-wrap gap-[20px] mt-6">
                        <button
                            className="py-2 px-6 min-w-fit dark:border-slate-700 bg-[#64BCAE] text-white rounded-full hover:bg-transparent hover:border-[#64BCAE] hover:text-[#64BCAE] transition-all duration-200 border">Catalog
                        </button>

                        <button
                            className="bg-gray-200 min-w-fit dark:bg-slate-800 dark:text-[#abc2d3] rounded-full py-1.5 px-2 flex items-center gap-[10px] ">
                            <FaPlay className="text-white bg-[#64BCAE] rounded-full py-2 text-[2rem]" />
                            See video about collection
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeroSection;
