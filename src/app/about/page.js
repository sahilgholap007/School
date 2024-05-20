"use client";
import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Image from "next/image";
import four from "../assets/handsone.png";
import hands from "../assets/handsthree.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import logo from "../assets/logo.png";
import test from "../assets/test.png";


const AboutUs = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <ParallaxProvider>
      <main className="About-us-con flex justify-center items-center bubblegum-sans-regular flex-col">
        <Image src={logo} className="mt-[3px]" unoptimized />
        <div className="About-us flex justify-center mt-5 flex-col items-center">
          <motion.h1 className=" xxxl-txt tertiary-txt">
            <motion.span
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                delay: 0.1,
              }}
            >
              About
            </motion.span>{" "}
            <motion.span
              className="secondary-txt"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
                delay: 0.2,
              }}
            >
              Us
            </motion.span>
          </motion.h1>
          <motion.div className="about-content flex flex-col gap-5 justify-center ">
            <motion.h1 className="xxl-txt text-center">
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.3,
                }}
                className="primary-txt txt"
              >
                Welcome to
              </motion.span>{" "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.4,
                }}
                className="tertiary-txt txt"
              >
                Smart
              </motion.span>{" "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.5,
                }}
                className="text-[#3f8ee7] txt"
              >
                Kids
              </motion.span>{" "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.6,
                }}
                className="tertiary-txt txt"
              >
                Super
              </motion.span>{" "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.7,
                }}
                className="text-[#3f8ee7] txt"
              >
                Kids
              </motion.span>{" "}
              <motion.span
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 0.8,
                }}
                className="secondary-txt txt"
              >
                Pre-School
              </motion.span>
            </motion.h1>
            <motion.p
              className="primary-txt sec-md-txt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At Smart Kids Super Kids Pre School&lsquo; we believe in the
              transformative power of early education. Nestled in the heart of
              Nala Sopara&lsquo; Maharashtra&lsquo; our preschool is more than
              just a place for children to play; it&apos;s a nurturing
              environment where young minds blossom and friendships flourish.
            </motion.p>
            <Parallax y={[-20, 20]}>
              <motion.h2
                className="text-[#3f8ee7] xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Our Team
              </motion.h2>
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Behind every great preschool is a team of dedicated
                educators&lsquo; and at Smart Kids Super Kids Pre School&lsquo;
                we&apos;re proud to have some of the best. Our teachers are not
                only highly qualified professionals but also compassionate
                individuals who are passionate about early childhood education.
                With their guidance and encouragement&lsquo; children at our
                preschool feel safe&lsquo; valued&lsquo; and inspired to explore
                the world around them.
              </motion.p>
            </Parallax>
            <div className="flex gap-5 items-center mt-2 mb-2 max-md:flex-col">
              <Image
                src={test}
                alt="d"
                className="team-img"
                unoptimized={true}
              />
              <p className="text-center sec-md-txt blue-txt">
                Our team of educators is dedicated to providing a warm and
                nurturing environment where children can learn&lsquo;
                grow&lsquo; and thrive. We believe that every child is unique
                and deserving of love and respect&lsquo; and we strive to create
                a community where every child feels valued and supported.
              </p>
            </div>
            <div className="flex gap-5 items-center mt-2 mb-2 max-md:flex-col">
              <Image
                src={test}
                alt="d"
                className="team-img"
                unoptimized={true}
              />
              <p className="text-center sec-md-txt blue-txt">
                Our team of educators is dedicated to providing a warm and
                nurturing environment where children can learn&lsquo;
                grow&lsquo; and thrive. We believe that every child is unique
                and deserving of love and respect&lsquo; and we strive to create
                a community where every child feels valued and supported.
              </p>
            </div>
            <div className="flex gap-5 items-center mt-2 mb-2 max-md:flex-col">
              <Image
                src={test}
                alt="d"
                className="team-img"
                unoptimized={true}
              />
              <p className="text-center sec-md-txt blue-txt">
                Our team of educators is dedicated to providing a warm and
                nurturing environment where children can learn&lsquo;
                grow&lsquo; and thrive. We believe that every child is unique
                and deserving of love and respect&lsquo; and we strive to create
                a community where every child feels valued and supported.
              </p>
            </div>
            <Parallax y={[-20, 20]}>
              <motion.h2
                className="tertiary-txt xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Our Philosophy
              </motion.h2>
              <video
              src={require("../../../public/video.mp4")}
              className="div1video"
              autoPlay
              muted
              loop
            />
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Our philosophy is simple: every child is unique&lsquo;
                capable&lsquo; and deserving of love and respect. We embrace
                diversity and celebrate the individuality of each child who
                walks through our doors. Through a blend of play-based
                learning&lsquo; hands-on activities&lsquo; and a supportive
                community&lsquo; we strive to lay the foundation for a lifetime
                of curiosity&lsquo; creativity&lsquo; and joy in learning.
              </motion.p>
            </Parallax>

            <Parallax y={[-20, 20]}>
              <motion.h2
                className="secondary-txt xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                Our Curriculum
              </motion.h2>
              <video
              src={require("../../../public/video.mp4")}
              className="div1video"
              autoPlay
              muted
              loop
            />
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.1 }}
              >
                Our curriculum is thoughtfully designed to meet the
                developmental needs of young children while sparking their
                natural curiosity and love for learning. From sensory
                exploration to early literacy and numeracy skills&lsquo; every
                activity is carefully crafted to engage and excite young
                learners. We believe that learning should be fun&lsquo;
                hands-on&lsquo; and meaningful&lsquo; and our curriculum
                reflects that philosophy.
              </motion.p>
            </Parallax>

            <Parallax y={[-20, 20]}>
              <motion.h2
                className="tertiary-txt xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
              >
                Our Facilities
              </motion.h2>
              <video
              src={require("../../../public/video.mp4")}
              className="div1video"
              autoPlay
              muted
              loop
            />
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.6 }}
              >
                Our preschool boasts state-of-the-art facilities that provide a
                safe&lsquo; stimulating&lsquo; and welcoming environment for
                children to learn and grow. From bright and spacious classrooms
                to inviting outdoor play areas&lsquo; every aspect of our
                facility is designed with the needs of young children in mind.
                We prioritize safety and cleanliness&lsquo; ensuring that
                parents can feel confident entrusting their children to our
                care.
              </motion.p>
            </Parallax>

            <Parallax y={[-20, 20]}>
              <motion.h2
                className="text-[#3f8ee7] xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.9 }}
              >
                Our Community
              </motion.h2>
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
              >
                At Smart Kids Super Kids Pre School&lsquo; we believe in the
                power of community. We foster strong partnerships with
                parents&lsquo; recognizing them as essential partners in their
                child&apos;s education journey. Through regular
                communication&lsquo; parent workshops&lsquo; and family
                events&lsquo; we strive to create a supportive and inclusive
                community where everyone feels valued and heard.
              </motion.p>
            </Parallax>
            <Parallax y={[-20, 20]}>
              <motion.h2
                className="text-[#3f8ee7] xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.9 }}
              >
                Fee Structure
              </motion.h2>
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
              >
                At Smart Kids Super Kids Pre School&lsquo; we believe in the
                power of community. We foster strong partnerships with
                parents&lsquo; recognizing them as essential partners in their
                child&apos;s education journey. Through regular
                communication&lsquo; parent workshops&lsquo; and family
                events&lsquo; we strive to create a supportive and inclusive
                community where everyone feels valued and heard.
              </motion.p>
            </Parallax>
            <Parallax y={[-20, 20]}>
              <motion.h2
                className="text-[#3f8ee7] xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.9 }}
              >
                Our Awards
              </motion.h2>
              <div className="flex gap-2 w-[50%] mt-4 mb-4">
              <Image
                src={test}
                alt="d"
                className="awards-img"
                unoptimized={true}
              />
              <Image
                src={test}
                alt="d"
                className="awards-img"
                unoptimized={true}
              />
              <Image
                src={test}
                alt="d"
                className="awards-img"
                unoptimized={true}
              />
            </div>
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
              >
                At Smart Kids Super Kids Pre School&lsquo; we believe in the
                power of community. We foster strong partnerships with
                parents&lsquo; recognizing them as essential partners in their
                child&apos;s education journey. Through regular
                communication&lsquo; parent workshops&lsquo; and family
                events&lsquo; we strive to create a supportive and inclusive
                community where everyone feels valued and heard.
              </motion.p>
            </Parallax>
          
            <Parallax y={[-20, 20]}>
              <motion.h2
                className="secondary-txt xl-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                Schedule a Visit
              </motion.h2>
              <motion.p
                className="blue-txt sec-md-txt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.8 }}
              >
                We invite you to experience the magic of Smart Kids Super Kids
                Pre School firsthand. Schedule a visit today and see why
                families in Nala Sopara&lsquo; Maharashtra trust us to provide
                the highest quality early childhood education.
              </motion.p>
            </Parallax>

            <motion.p
              className="tertiary-txt sec-md-txt mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 4.1 }}
            >
              Thank you for considering Smart Kids Super Kids Pre School for
              your child&apos;s preschool experience. We look forward to
              welcoming you into our community!{" "}
              <a href="/contact" className="text-[#3f8ee7]">
                Contact us
              </a>{" "}
              today to learn more or schedule a visit.
            </motion.p>
          </motion.div>
        </div>
        <Image src={four} alt="d" className="programs-img" unoptimized={true} />

      </main>
    </ParallaxProvider>
  );
};

export default AboutUs;
