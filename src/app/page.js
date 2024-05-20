"use client";
import React from "react";
import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "./home.css";
import imgs from "./assets/school.png";
import school from "./assets/school.png";
import programs from "./assets/programs.png";
import blobone from "./assets/blobone.png";
import blobtwo from "./assets/blobtwo.png";
import blobthree from "./assets/blobthree.png";
import blobfour from "./assets/blobfour.jpg";
import handstwo from "./assets/handstwo.png";
import SlideShow from "./Components/SlideShow";
import logo from "./assets/logo.png";
import star1 from "./assets/star1.png";
import star2 from "./assets/star2.png";

const variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const variants3 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    }, // delay can be adjusted
  },
};
const variants2 = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut", // Change this to &apos;easeInOut&apos; for a smoother transition
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 0.9,
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const popUpFromDown = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Add this line
      stiffness: 100, // Adjust this value to change the spring effect
      damping: 20, // Adjust this value to change the spring effect
      delay: 0.2,
    },
  },
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
  });

  return (
    <main>
      <motion.div className="bubblegum-sans-regular">
      <Image alt="logo" src={logo} className="mt-[3px]" unoptimized />
        <div className="flex justify-center gap-24 items-center max-lg:flex-col py-5">
          <Image src={star2} alt="ada" className="hero-img sm:h-12" unoptimized={true} />
          <motion.div
            className="home-main"
            variants={variants}
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
          >
            <div className="flex justify-center items-center max-2xl:flex-col pt-6 ">
              <motion.h2
                className="max-lg:[text-5xl] max-md:text-4xl max-sm:text-3xl max-xs:text-2xl mr-4 text-[#f00] xl-txt"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                Welcome to
              </motion.h2>
              <motion.h1
                className="xl-txt mr-4 tertiary-txt max-lg:[text-5xl] max-md:text-4xl max-sm:text-3xl max-xs:text-2xl"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.9,
                }}
              >
                Smart <span className="text-[#0077ff] ">Kids</span> Super{" "}
                <span className="text-[#0077ff]">Kids</span>
              </motion.h1>
              <motion.h2
                className="max-lg:[text-5xl] max-md:text-4xl max-sm:text-3xl max-xs:text-2xl secondary-txt  xl-txt"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 1.3,
                }}
              >
                Pre-School
              </motion.h2>
            </div>

            <motion.p
              className="lg-txt mt-8 text-[#341c77] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.5 }}
            >
              We provide high quality education in low fees.
            </motion.p>
            {/* <Image src={hero} alt="hero" className="hero-img py-10" /> */}

          </motion.div>
          <Image src={star1} alt="ada" className="hero-img" unoptimized={true} />
        </div>
        <SlideShow />
        <motion.div
          className="about-main flex justify-center p-5 flex-col items-center bg-[yellow]"
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.h1
            variants={variants}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            <span className="text-[red] xxl-txt max-lg:text-[70px]">About</span>
            <span className="text-[red] xxl-txt max-lg:text-[70px]"> Us</span>
          </motion.h1>
          <motion.div
            className="flex items-center gap-24 w-full justify-center max-lg:flex-col mt-24"
            variants={variants2}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            <Image
              src={school}
              className="school-img w-1/2 rounded-[50%] max-lg:w-full"
              alt="school-img"
              unoptimized={true}
            />
            <motion.p className="lg-txt text-[#341c77] w-1/2 max-md:w-full">
              &quot;Smart Kids Pre-School is a place where children can be
              children. We provide a safe&ldquo;nurturing and stimulating
              environment where children are encouraged to learn&ldquo;grow and
              explore. Our goal is to provide a high-quality early childhood
              education that will help children develop a love of learning that
              will last a lifetime.&quot;
              <br />
              <br />
              <a href="/about" className="primary-btn">
                Read more
              </a>
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="services-main flex justify-center p-5 flex-col items-center bg-[yellow]">
          <motion.h1 className="xxl-txt">
            <span className="text-[red]">Our </span>
            <span className="text-[red]">Programmes</span>
          </motion.h1>
          <motion.div className="grid grid-cols-2 grid-rows-2 gap-4 w-full justify-center blob-grp max-lg:flex max-lg:flex-col">
            <motion.div
              className="blobs flex max-xl:flex-col"
              variants={variants3}
              initial="hidden"
              ref={ref2}
              animate={inView2 ? "visible" : "hidden"}
            >
              <Image
                src={blobthree}
                className="w-[750px] blob max-sm:w-[300px] max-sm:h-[300px]"
                alt="blob"
                unoptimized={true}
              />
              <motion.div className="blob-content max-lg:flex-col">
                <h2 className="xl-txt text-[red]">PLAY GROUP</h2>
                <p className="md-txt">
                  In our playgroup&ldquo;children explore and learn In a
                  nurturing environment guided by experienced educators. Through
                  stimulating activities&ldquo;we foster creativity and social
                  skills&ldquo;Creating a foundation for their educational
                  journey.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="blobs flex max-xl:flex-col"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants3}
              initial="hidden"
            >
              <Image
                src={blobone}
                className="w-[750px] blob max-sm:w-[300px] max-sm:h-[300px]"
                alt="blob"
                unoptimized={true}
              />
              <motion.div className="blob-content">
                <h2 className="xl-txt text-[red]">NURSERY</h2>
                <p className="md-txt">
                  In our nursery&ldquo;toddlers embark on their educational
                  journey In a warm and inviting space tailored for their
                  developmental needs. Caring educators guide them through
                  activities that support language&ldquo;motor&ldquo;And social
                  skill development, nurturing their growth.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="blobs flex max-xl:flex-col"
              variants={variants3}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <Image
                src={blobfour}
                className="w-[750px] blob max-sm:w-[300px] max-sm:h-[300px]"
                alt="blob"
                unoptimized={true}
              />
              <motion.div className="blob-content">
                <h2 className="xl-txt text-[red]">JR. KG</h2>
                <p className="md-txt">
                  Junior KG marks a transition into structured learning
                  experiences Guided by dedicated educators who encourage
                  exploration and discovery. Here&ldquo;children develop
                  foundational skills in literacy&ldquo;numeracy&ldquo;And
                  social interaction&ldquo;setting the stage for future academic
                  success.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="blobs flex max-xl:flex-col"
              variants={variants3}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <Image
                src={blobtwo}
                className="w-[750px] h-full blob max-sm:w-[300px] max-sm:h-[300px]"
                alt="blob"
                unoptimized={true}
              />
              <motion.div className="blob-content">
                <h2 className="xl-txt text-[red]">SR. KG</h2>
                <p className="md-txt">
                  In Senior KG&ldquo;children continue their educational journey
                  With excitement and readiness for more structured learning.
                  Experienced teachers provide a supportive environment Where
                  critical thinking and independence are fostered and
                  celebrated.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <Image
            src={programs}
            className="programs-img"
            alt="programs"
            unoptimized={true}
          />
        </motion.div>
        <motion.div className="Features-perks-section flex justify-center flex-col items-center bg-[yellow]">
          <motion.h1
            className="xxl-txt"
            ref={h1Ref}
            variants={popUpFromDown}
            initial="hidden"
            animate={h1InView ? "visible" : "hidden"}
          >
            <span className="text-[red]">Facilities</span>
            <span className="text-[red]"> & </span>
            <span className="text-[red]">Perk&apos;s</span>
          </motion.h1>
          <motion.div className="flex gap-10 max-md:flex-col">
            <motion.div className="facilities flex flex-col gap-5">
              <motion.h2
                className="xl-txt text-[red]"
                variants={slideInFromLeft}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                Facilities
              </motion.h2>
              <motion.ul
                className="list-disc text-[#341c77]"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  AWARD WINNING SCHOOL
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  Qualified teachers & Staff
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  2 Dedicated Teachers with 1 Care Taker for Each class
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  FESTIVAL CELEBRATION
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  A/C classrooms
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  FUN Activities{" "}
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  Well Maintained & Clean Area
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  CCTV surveillance
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  Dedicated innovative portfolio for each student (Report Card)
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  GOVERNMENT & ISO CERTIFIED
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div className="Preks flex flex-col gap-5">
              <motion.h2
                className="xl-txt text-[red]"
                variants={slideInFromRight}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                Perk&apos;s
              </motion.h2>
              <motion.ul
                className="list-disc text-[#341c77] "
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  FREE Smart Speaking Book
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  FREE BOOKS
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  E-Learning{" "}
                </motion.li>
                <motion.li
                  className="facilities-li md-txt"
                  variants={listItemVariants}
                >
                  Brain Activity Toys
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <h1 className="xxl-txt mt-5 text-[red]">Gallery</h1>
          <div className="parent max-lg:flex max-lg:flex-col ">
            <Image src={school} alt="ada" className="div1" unoptimized={true} />
            <Image src={school} alt="ada" className="div2" unoptimized={true} />
            <Image src={school} alt="ada" className="div3" unoptimized={true} />
            <Image src={school} alt="ada" className="div4" unoptimized={true} />
            <Image src={school} alt="ada" className="div5" unoptimized={true} />
            <Image src={school} alt="ada" className="div6" unoptimized={true} />
          </div>
          <div className="parent-video-container">
            <video
              src={require("../../public/video.mp4")}
              className="div1video"
              autoPlay
              muted
              loop
            />
            <video
              src={require("../../public/video.mp4")}
              className="div2video"
              autoPlay
              muted
              loop
            />
          </div>
          <Image
            src={handstwo}
            alt="han"
            className="programs-img"
            unoptimized={true}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
