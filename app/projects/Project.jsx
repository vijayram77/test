"use client";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Project = ({ title, desc, href, src, bgColor, date, tools }) => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef();
    const gradientRef = useRef();
    const parentRef = useRef();
    return (
        <Link href={`projects/${href}`} className="hover:scale-95 transition-all ease duration-500 ">
            <div
                onMouseEnter={() => { window.matchMedia("(min-width: 769px)").matches && gsap.to(gradientRef.current,{opacity : 1, duration : 1})}}
                onMouseLeave={() => { window.matchMedia("(min-width: 769px)").matches && gsap.to(gradientRef.current,{opacity : 0, duration : 1})}}
                ref={parentRef}
                className="bg-[#101010] project cursor-pointer p-2 transition-all ease duration-500 lg:w-[600px] w-[90vw] mx-auto rounded-3xl shadow-lg overflow-hidden border border-zinc-800 relative"

            >
                <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />
                <div
                    ref={ref}
                    className={`rounded-2xl bg-gradient-to-t overflow-hidden from-[#101010] to-[#202020] border border-zinc-700/80 relative `}
                >
                    <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />
                    <div ref={gradientRef} className={`absolute md:opacity-0 top-0 w-[100%] left-1/2 -translate-x-1/2 h-full bg-gradient-to-t from-[#101010] ${bgColor == "#194A69" ? " to-[#194A69] " : "to-[#3D2B74] "} `} />
                    <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-full bg-gradient-to-r from-[#202020ad] to-[#202020ad] via-[#20202057] " />
                    <div className="p-6 relative flex justify-between items-start">
                        <div className="w-[85%]">
                            <h2 className="bg-gradient-to-b [text-shadow:_0px_0px_15px_rgb(255_255_255_/_15%)] from-zinc-300 to-zinc-300/95 text-transparent bg-clip-text text-3xl md:text-2xl leading-none py-1 font-[Nunito] tracking-tighter capitalize font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="bg-gradient-to-b w-[95%] [text-shadow:_0px_0px_15px_rgb(255_255_255_/_15%)] from-zinc-400 to-zinc-400/95 text-transparent bg-clip-text leading-none text-base font-[Nunito] tracking-tighter capitalize">
                                <span className="text-zinc-300/90 font-semibold">{date}</span>{desc}
                            </p>
                            
                        </div>
                        <div className="w-[15%] pr-[1vmax] flex justify-end icon  transition-all ease-out duration-500 ">
                            <IoMdArrowForward className="text-4xl hover:-rotate-45  text-zinc-300  transition-all ease-out duration-500 " />
                        </div>
                    </div>
                    <div className="w-full flex gap-4 flex-wrap items-center px-6 pb-4">
                        {
                            tools.map((item, index) => (
                                <div key={index} style={{ backgroundColor: item.backgroundColor == "#ffffff" ? "#ffffffcc" : `${item.backgroundColor}4D` }} className='min-w-[40px] relative rounded-2xl h-[40px] p-2'>
                                    <Image width={100} height={100} className='w-full h-full' src={item.imageUrl} alt="" />
                                </div>
                            ))

                        }
                    </div>
                    <div className="px-[3.5vw] pt-[4vh] pb-0 rounded-b-lg flex flex-col gap-4 relative bottom-[-20px] image transition-all ease-out duration-500">
                        <div className="bg-black rounded-md overflow-hidden">
                            <div className="relative">
                                <Image
                                    width={1536}
                                    height={1000}
                                    src={src}
                                    alt="Project Thumbnail"
                                    className="w-full h-fit object-cover "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Project;
