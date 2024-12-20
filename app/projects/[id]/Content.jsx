"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Content = ({ setCurrent, tag, title, subtitle, img, scrollId, data_ID , index }) => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ref.current,
            start: "top 100%",
            end: "-10% top",
            scrub: 1,
            id : index,
            // markers : true ,
            onEnter: () => setCurrent(index),
            onEnterBack: () => setCurrent(index),
        });

    });

    return (
        <div
            ref={ref}
            id={scrollId}
            className="py-16 border-b border-zinc-800 last:border-none fade-in flex flex-col items-start justify-center"
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
            {
                tag == "Tech Stack" ?
                    data_ID == 0 ?
                    <div className="pt-8 flex justify-start gap-4 items-center flex-wrap">
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <RiReactjsFill className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <TbBrandNextjs className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <SiMongodb className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <SiExpress className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <RiTailwindCssFill className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                    </div> :
                    <div className="pt-8 flex justify-start gap-4 items-center flex-wrap">
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <RiReactjsFill className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                        <div className="p-3 bg-gradient-to-b from-zinc-950 to-zinc-700 via-zinc-900 rounded-3xl">
                            <RiTailwindCssFill className="text-zinc-300 md:text-5xl text-4xl" />
                        </div>
                    </div>
                    :null

            }
        </div>
    );
};

export default Content;
