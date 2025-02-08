import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Burger from "../assets/portfolio/Burger.png";
import poxymon from "../assets/portfolio/poxymon.png";
import designwindow from "../assets/portfolio/designwindow.png";
import mendy from "../assets/portfolio/mendy.png";
import Handle from "../assets/portfolio/Handle.png";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  const portfolios = [
    {
      id: 1,
      src: Burger,
      href: "https://bigburgerwebsite.netlify.app/",
    },
    {
      id: 2,
      src: poxymon,
      href: "https://sandbox.clservicesny.com/poxymon/",
    },
    {
      id: 3,
      src: designwindow,
      href: "https://sandbox.clservicesny.com/design_window/",
    },
    {
      id: 4,
      src: mendy,
      href: "https://sandbox.clservicesny.com/mendy/",
    },
    {
      id: 5,
      src: Handle,
      href: "https://sandbox.clservicesny.com/handle/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[83px] md:pb-14 lg:pb-14"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container flex flex-col justify-center w-full"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0"
        >
          {portfolios.map(({ id, src, href }) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="group shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110 hover:shadow-[0px_0px_100px_20px_rgba(75,85,99,0.9)] cursor-pointer"
            >
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-t-md group-hover:opacity-80 duration-300"
              />
              <div>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-2 text-white">
                    Demo
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
