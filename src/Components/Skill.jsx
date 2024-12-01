import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import reactImage from "../assets/images/react.png";
import github from "../assets/images/github.png";
import tailwind from "../assets/images/tailwind.png";
import cpp from "../assets/images/cpp.png";
import node from "../assets/images/node.png";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-[#00d8ff]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-[#44a8b3]",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: node,
      title: "Nodejs",
      style: "shadow-[#8cc84b]",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-[#659bd3]",
      shado: "shadow-red-700",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-[83px] md:pb-14 lg:pb-14"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center w-full container text-white"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="pb-8"
        >
          <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:px-0"
        >
          {techs.map(({ id, src, title, style, shado }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} hover:${
                shado ? shado : ""
              }`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
