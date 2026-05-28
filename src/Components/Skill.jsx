import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiGithub,
  SiExpress,
} from "react-icons/si";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const techs = [
    {
      id: 1,
      icon: SiHtml5,
      title: "HTML",
      color: "text-orange-500",
    },
    {
      id: 2,
      icon: SiCss3,
      title: "CSS",
      color: "text-blue-500",
    },
    {
      id: 3,
      icon: SiJavascript,
      title: "JavaScript",
      color: "text-yellow-400",
    },
    {
      id: 4,
      icon: SiTypescript,
      title: "TypeScript",
      color: "text-blue-600",
    },
    {
      id: 5,
      icon: SiReact,
      title: "React",
      color: "text-cyan-500",
    },
    {
      id: 6,
      icon: SiNextdotjs,
      title: "Next.js",
      color: "text-white",
    },
    {
      id: 7,
      icon: SiTailwindcss,
      title: "Tailwind",
      color: "text-cyan-400",
    },
    {
      id: 8,
      icon: SiNodedotjs,
      title: "Node.js",
      color: "text-green-600",
    },
    {
      id: 9,
      icon: SiExpress,
      title: "Express.js",
      color: "text-gray-400",
    },
    {
      id: 10,
      icon: SiPostgresql,
      title: "PostgreSQL",
      color: "text-blue-700",
    },
    {
      id: 11,
      icon: SiGithub,
      title: "GitHub",
      color: "text-gray-300",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-[83px] md:pb-20 lg:pb-20"
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
          className="pb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white inline pb-2 border-b-2 border-gray-400">
            Tech Stack
          </h2>
          <p className="py-6 text-gray-400">Technologies and tools I've mastered</p>
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
                staggerChildren: 0.12,
              },
            },
          }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:px-0"
        >
          {techs.map(({ id, icon: Icon, title, color }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: id * 0.08 }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col items-center justify-center">
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:blur-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30"></div>
                  <Icon
                    size={48}
                    className={`relative ${color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <p className="text-gray-300 font-semibold text-center text-sm group-hover:text-cyan-400 transition-colors duration-300">
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
