import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-[75px] md:pb-14 lg:pb-20"
      ref={ref}
    >
      <motion.div
        className="flex flex-col justify-center w-full container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pb-8">
          <motion.p
            className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.p>
        </div>

        <motion.p
          className="text-sm md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          I am a driven and ambitious student currently pursuing a Bachelor's
          degree in Computer Science and Engineering with a specialization in
          Graphics and Gaming. Throughout my academic journey, I have gained a
          strong foundation in various aspects of computer science, including
          game programming, level designing, data structures, and algorithms. 
         
          My true passion lies in software development, particularly in the realm
          of web development. I have dedicated my efforts to mastering
          industry-standard web technologies and frameworks such as HTML, CSS,
          JavaScript, Bootstrap, React.js, Redux, and Tailwind CSS. These tools
          have become my creative arsenal, empowering me to craft immersive and
          user-friendly web experiences.
        </motion.p>

        <br />

        <motion.p
          className="text-sm md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          One of my core strengths lies in coding, particularly in the context
          of implementing efficient algorithms and data structures. I have honed
          my skills through rigorous coursework and personal projects, which
          have allowed me to understand the principles of efficient coding and
          problem-solving.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
