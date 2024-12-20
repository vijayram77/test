"use client";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Project = ({ title, desc, href, src, bgColor , date}) => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef();
    const parentRef = useRef();

    const handleEnter = () => {
        gsap.to(ref.current, {
            backgroundImage: `linear-gradient(to top, #101010, ${bgColor})`,
            duration: 1,
            ease: "power1.out",
        });

    };

    const handleLeave = () => {
        gsap.to(ref.current, {
            backgroundImage: "linear-gradient(to top, #101010, #202020)", 
            duration: 1,
            ease: "power1.out",
        });
    };

    return (
        <Link href={`projects/${href}`} className="hover:scale-95 transition-all ease duration-500">
            <div
            ref={parentRef}
                className="bg-[#101010] project cursor-pointer p-2 transition-all ease duration-500 md:w-[65vw] w-[90vw] mx-auto rounded-3xl shadow-lg overflow-hidden border border-zinc-800 relative"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />
                <div
                    ref={ref}
                    className={`rounded-2xl bg-gradient-to-t overflow-hidden from-[#101010] border border-zinc-700/80 relative  lg:to-[#202020] ${bgColor == "#194A69" ?  " to-[#194A69] " : "to-[#3D2B74] "}`}
                >
                    <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />
                    <div className="absolute top-0 w-[100%] left-1/2 -translate-x-1/2 h-full bg-gradient-to-r from-[#202020b1] to-[#202020b1] via-transparent " />
                    <div className="p-6 relative flex justify-between items-start">
                        <div className="">
                            <h2 className="bg-gradient-to-b [text-shadow:_0px_0px_15px_rgb(255_255_255_/_15%)] from-zinc-300 to-zinc-300/95 text-transparent bg-clip-text text-3xl md:text-2xl leading-none py-1 font-[Nunito] tracking-tighter capitalize font-semibold mb-2">
                                {title}
                            </h2>
                            <p className="bg-gradient-to-b [text-shadow:_0px_0px_15px_rgb(255_255_255_/_15%)] from-zinc-400 to-zinc-400/95 text-transparent bg-clip-text leading-none text-base font-[Nunito] tracking-tighter capitalize">
                                <span className="text-zinc-300/90 font-semibold">{date}</span>{desc}
                            </p>
                        </div>
                        <div>
                            <IoMdArrowForward className="text-4xl icon transition-all ease-out duration-500 hover:-rotate-45 md:mr-[1vmax] text-zinc-300" />
                        </div>
                    </div>
                    <div className="px-[5vw] pt-[2vh] pb-0 rounded-b-lg flex flex-col gap-4">
                        <div className="bg-black rounded-md overflow-hidden">
                            <div className="relative">
                                <Image
                                    width={1536}
                                    height={1000}
                                    src={src}
                                    alt="Project Thumbnail"
                                    className="w-full h-fit object-cover"
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