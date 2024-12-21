"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ToolTip from "@/app/components/ToolTip";

const Content = ({ setCurrent, tag, title, subtitle, img, scrollId, data_ID ,index , tools}) => {
    const ref = useRef();
    return (
        <motion.div
        viewport={{margin : "-300px"}}
            onViewportEnter={() => {setCurrent(index)}
            }
            ref={ref}
            id={scrollId}
            className="py-16 border-b border-zinc-800 px-2 last:border-none fade-in flex flex-col items-start justify-center"
        >
            <div className="relative z-[9999] py-[5vh] flex items-center ">
                <div className="w-6 h-6 flex justify-center items-center relative">
                    <div className="bg-zinc-500 absolute w-full h-full rounded-full blur-sm"></div>
                    <div className="bg-zinc-100 relative w-3 h-3 rounded-full"></div>
                </div>
                <h1 className="text-zinc-400 font-bold uppercase text-sm backdrop-blur px-2 py-1 rounded-full tracking-tighter">
                    {tag}
                </h1>
            </div> 
            <h1 className="text-4xl tracking-tighter font-semibold [text-shadow:_0px_0px_30px_rgb(255_255_255_/_50%)]">
                {title}
            </h1>
            <h1 className="text-gray-400 tracking-tighter mt-6 text-lg w-full">
                {subtitle}
            </h1>
            {img && (
                <div className="relative w-full pt-12">
                    <Image
                        width={1536}
                        height={1000}
                        src={img}
                        alt="Image Content"
                        className="rounded-lg pointer-events-none select-none"
                    />
                </div>
            )}
            <div className="flex w-full items-center flex-wrap gap-4 pt-12 px-2">
            {
                tag == "Tech Stack" &&
                tools.map((item , index) => (
                            <div key={index} style={{ backgroundColor: item.backgroundColor == "#ffffff" ? item.backgroundColor : `${item.backgroundColor}4D` }} className='md:w-[70px] tooltipParent w-[50px] h-[50px] relative rounded-2xl md:h-[70px] p-3 transition-all ease-out duration-300 hover:scale-110 cursor-pointer'>
                                <Image width={100} height={100} className='w-full h-full' src={item.imageUrl} alt="" />
                                <ToolTip value={item.title} direction="up" />
                            </div>

                ))
            }
            </div>
        </motion.div>
    );
};

export default Content;
