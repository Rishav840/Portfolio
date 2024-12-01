import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 pt-[75px] text-white"
      ref={ref}
    >
      <div className="flex flex-col justify-center container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between"
        >
          <div className="w-full">
            <p className="text-[50px] font-semibold pb-10 leading-[1]">Let's work together</p>
          </div>
          <form
            action="https://getform.io/f/bollkgwa"
            method="POST"
            className="flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex justify-center w-full items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
