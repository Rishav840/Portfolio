import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroImage from "../assets/profile3.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[72px]  md:pb-14 md:pt-[80px] "
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
          <motion.p
            className="text-gray-400 text-lg md:text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            👋 Hey, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Rishav Shah
          </motion.h1>

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-lg md:text-xl text-white\">I am a</span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "Web Designer",
                1500,
                "UI/UX Enthusiast",
                1500,
              ]}
              className="text-lg md:text-xl font-bold text-gray-300"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <p className="text-gray-500 py-4 max-w-[600px]">
            I have 2+ years of experience in web development and design.
            Currently, I enjoy building scalable and responsive web applications
            using technologies like HTML, CSS, JavaScript, TypeScript, React.js,
            Next.js, and Tailwind CSS. I also have experience working with
            databases such as PostgreSQL, and MongoDB, and I am
            continuously enhancing my Development skills.
          </p>

          <div>
            <Link
              to="projects"
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
