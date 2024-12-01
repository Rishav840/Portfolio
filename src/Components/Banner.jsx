import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[72px]  md:py-14 lg:py-20"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-center gap-5 justify-between h-full p-5 md:flex-row container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-white">👋 My name is Rishav</h2>
          </div>
          <div className="flex font-semibold items-center">
            <span className="text-white text-[2rem] lg:text-[3rem]">
              I am
            </span>
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Designer",
                1000,
                "Freelancer",
                1000,
              ]}
              className="text-gray-500 text-[2rem] lg:text-[3rem] ml-2.5"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-500 py-4 max-w-[600px]">
            I have 1 year of experience in web development and design.
            Currently, I love working on web applications using technologies
            like Html, Css, Js, React and Tailwind. I am also enhancing my
            skills in backend technologies to become a full-stack developer.
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

       
        <motion.div
          className="flex justify-center md:justify-end w-full max-w-[400px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
