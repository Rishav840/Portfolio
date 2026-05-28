import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-[83px] md:pb-14 lg:pb-14"
      ref={ref}
    >
      <motion.div
        className="flex flex-col justify-center w-full container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white inline pb-2 border-b-2 border-gray-400"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.h2>
        </div>

        <motion.p
          className="text-sm md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          I am a driven and ambitious Web Developer with 2+ years of experience
          in building modern, responsive, and user-friendly web applications. I
          am passionate about creating real-world digital products and
          AI-powered applications that solve practical problems and deliver
          seamless user experiences. I enjoy turning ideas into reality by
          building scalable projects using technologies such as HTML, CSS,
          JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Bootstrap,
          and modern web development tools. I also have experience working with
          databases like PostgreSQL, and MongoDB, along with API integration,
          dashboards, and real-time applications.
        </motion.p>

        <br />

        <motion.p
          className="text-sm md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          One of my key interests is working on AI-related projects, automation
          systems, and product-based applications where I can combine creativity
          with technology to build impactful solutions. I am passionate about
          clean UI design, performance optimization, problem-solving, and
          continuously learning new technologies to stay updated with modern
          development trends.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
