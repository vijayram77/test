"use client"
import { useEffect, useRef, useState } from 'react';
import roadmaps from '../assets/roadmaps.png'
import extracker from '../assets/extracker.png'
import domains from './[id]/assets/domains.png'
import home from './[id]/assets/home.png'
import eyes from './[id]/assets/eyes.png'
import resume from './[id]/assets/resume.png'
import budgetingImage from './[id]/assets/budgets.png'
import expenseTrackingImage from './[id]/assets/expenses.png'
import dashboardImage from './[id]/assets/dashboard.png'
import graphsImage from './[id]/assets/graph.png'
import { IoMdArrowBack } from "react-icons/io";
import Content from './[id]/Content';
import Image from 'next/image';
import Link from 'next/link';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import nextjs from './assets/nextjs.svg'
import express from './assets/express.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import mongo from './assets/mongodb.svg'
import { useRouter } from 'next/navigation';

export default function Main({ id }) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  const lenisRef = useRef(null);
  const data_id = id == "CareerPath" ? 0 : 1
  const Data = [
    {
      Title: "Career Path",
      date: "October 2024",
      mainImg: home,
      bg_from: "#1c5274",
      bg_via: "#11344a",
      textBg_to: "#8cbddb",
      categories: [
        {
          tag: "Overview",
          title: "Empowering Careers Through Innovation.",
          subtitle:
            "An interactive platform offering visually stunning and engaging career roadmaps, curated learning resources from industry leaders, and AI-powered tools to guide job seekers at every stage of their career journey.",
          image: roadmaps, // Replace with your image path
        },
        {
          tag: "Highlights",
          title: "Engaging. Interactive. Powerful.",
          subtitle:
            "Experience a platform like no other with fully animated interfaces, AI-integrated chat support for instant query resolution, and a resume generator that crafts tailored, professional content for your dream job.",
          image: domains, // Replace with your image path
        },
        {
          tag: "Features",
          title: "Interactive Tools for Every Job Seeker.",
          subtitle:
            "Discover tools tailored for modern job seekers, including career roadmaps packed with actionable insights, curated resources for skill-building, and AI-driven features to streamline your career planning process.",
          image: resume,
        },
        {
          tag: "UI & Interactivity",
          title: "Where Design Meets Interactivity.",
          subtitle:
            "Our platform redefines user experience with dynamic transitions, visually engaging animations, and smooth interactions that captivate and immerse users in their journey to success.",
          image: eyes,
        },
        {
          tag: "Tech Stack",
          title: "Modern, Robust, Scalable.",
          subtitle:
            "Built with cutting-edge technologies like Next.js for a fast and responsive frontend, GSAP for seamless animations, Tailwind CSS for sleek styling, and Node.js integrated with AI-powered APIs to deliver a robust and scalable backend.",
          image: undefined,

        },
        {
          tag: "Future Enhancements",
          title: "Continuously Evolving.",
          subtitle:
            "We aim to expand our offerings with new job roles, an ever-growing library of curated resources, and innovative interactive features to enhance user engagement and ensure scalability for the future.",
          image: undefined,
          live : "https://vjscareerpath.vercel.app/"
        },
      ]
    },
    {
      Title: "Expense Tracker",
      date: "January 2024",
      mainImg: extracker,
      bg_from: "#2C2443",
      bg_via: "#382869",
      textBg_to: "#868193",
      categories: [
        {
          tag: "Overview",
          title: "Simplify Expense Management.",
          subtitle:
            "A practical and user-friendly platform that helps users manage their finances by setting budgets, tracking expenses, and visualizing data through interactive dashboards and graphs.",
          image: extracker, // Replace with your image path
        },
        {
          tag: "Budgeting",
          title: "Set Limits. Stay on Track.",
          subtitle:
            "Organize your finances by creating budgets for categories like shopping, entertainment, and more. Keep your spending under control with a simple yet effective approach.",
          image: budgetingImage, // Replace with your image path
        },
        {
          tag: "Expense Tracking",
          title: "Monitor Every Penny.",
          subtitle:
            "Easily log and track expenses in real-time. Gain insights into where your money goes with detailed breakdowns for smarter financial decisions.",
          image: expenseTrackingImage, // Replace with your image path
        },
        {
          tag: "Dashboard",
          title: "Visualize Your Finances.",
          subtitle:
            "Access a clean, intuitive dashboard to review your budgets and expenses at a glance. Stay informed and in control of your financial health.",
          image: dashboardImage, // Replace with your image path
        },
        {
          tag: "Graphs & Analysis",
          title: "Understand Your Spending Habits.",
          subtitle:
            "Visualize your expenses with dynamic graphs and charts. Identify trends, optimize spending, and plan for a financially secure future.",
          image: graphsImage, // Replace with your image path
        },
        {
          tag: "Tech Stack",
          title: "Local Storage",
          subtitle:
            "Built with React.js for a dynamic frontend, Tailwind CSS for a visually appealing design, and utilizing Local Storage for efficient data management.",
          image: undefined,

        }
        ,

        {
          tag: "Future Enhancements",
          title: "Adapting to Your Needs.",
          subtitle:
            "Plans to introduce advanced features like predictive analysis, savings goals, and personalized financial advice to enhance user experience.",
          image: undefined, 
          live : "https://expense-tracker-vj.web.app/"
        },
      ]

    }
  ]

  const tools = data_id == 0 ? [
    {
      title: "React JS",
      imageUrl: react,
      backgroundColor: "#61DAFB",
    },
    {
      title: "Next JS",
      imageUrl: nextjs,
      backgroundColor: "#ffffff",
    },
    {
      title: "Express",
      imageUrl: express,
      backgroundColor: "#ffffff",
    },
    {
      title: "MongoDB",
      imageUrl: mongo,
      backgroundColor: "#47A248",
    },
    {
      title: "Tailwind CSS",
      imageUrl: tailwind,
      backgroundColor: "#38B2AC",
    },
  ] :
    [
      {
        title: "React JS",
        imageUrl: react,
        backgroundColor: "#61DAFB",
      },
      {
        title: "Tailwind CSS",
        imageUrl: tailwind,
        backgroundColor: "#38B2AC",
      },
    ]



  const handleViewport = (index) => {
    gsap.to(".li", {
      color: "#a1a1aa"
    })
    gsap.to(`#li${index}`, {
      color: "white"
    })

  }

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);
  const handleScroll = (scrollId) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${scrollId}`, { duration: 2 })
    }
  }
  return (
    <div>

      <div className="relative font-[Gilroy] overflow-hidden bg-black min-h-screen text-white  py-[15vh]">
        <div style={{ background: `linear-gradient(to bottom, ${Data[data_id].bg_from}, ${Data[data_id].bg_via} , black)` }} className='absolute w-[120vw] h-[110vh] rounded-b-3xl left-1/2 -translate-x-1/2 top-0'></div>
        <div className='absolute w-[120vw] h-[85vh] rounded-b-3xl left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-[#202020] via-transparent to-[#202020] blur-3xl'></div>
        {/* Left Section */}
        <div className="fixed z-[99999] top-6 left-6">
          <button onClick={handleBackClick} className="flex items-center gap-2 px-4 py-2 overflow-hidden hover:gap-4 bg-zinc-900/70 border border-zinc-700/80 rounded-full transition-all ease-out duration-500">
            <IoMdArrowBack className='text-xl text-zinc-300' />
            <span>Back</span>
          </button>
        </div>

        {/* Center Section */}
        <div className="relative flex flex-col items-center justify-start mx-auto lg:w-[65vw] px-4">
          <h1 className="text-5xl mb-1  text-transparent font-semibold [text-shadow:_0px_0px_40px_rgb(255_255_255_/_50%)] text-zinc-300">{Data[data_id].Title}</h1>
          <p className="text-zinc-400 text-lg mb-6">{Data[data_id].date}</p>
          <div className="relative w-full">
            <Image
              width={1536}
              height={1000}
              src={Data[data_id].mainImg}
              alt="Stadia Bluetooth Interface"
              className="rounded-lg pointer-events-none select-none"
            />
          </div>
          {
            Data[data_id].categories
              .map((section, index) => (
                <Content setCurrent={handleViewport} key={index} index={index} data_ID={data_id} scrollId={`content${index}`} tag={section.tag} live={section.live} title={section.title} subtitle={section.subtitle} img={section.image} tools={tools} />
              ))
          }
        </div>

        {/* Right Section */}
        <div className="fixed lg:block hidden right-0 py-[15vh] px-[5vw] top-0 ">
          <div className="">
            <h2 className="text-xl font-semibold mb-4 font-[Nunito]">Contents</h2>
            <ul className="">
              {Data[data_id].categories.map((item, index) => (
                <li id={`li${index}`} onClick={() => { handleScroll(`content${index}`) }} key={index} className={`${index == 0 ? "text-white" : "text-[#a1a1aa]"}  li text-sm font-[Nunito] cursor-pointer tracking-tighter py-1`}>
                  {item.tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
