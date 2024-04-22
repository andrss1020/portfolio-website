"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb+3">
      I bring a dynamic blend of skills and experiences to the table, marked by a relentless dedication to 
      excellence. With a solid foundation in <span className="italic">Java, JavaScript, and SQL</span>, I've traversed diverse roles including 
      <span className="underline"> version integration, development, testing, and internal training</span>. My journey has immersed me in every 
      facet of the development lifecycle, spanning front-end, middleware, and back-end. Collaborating within 
      agile <span className="font-medium"> SCRUM </span> teams, I've honed my ability to deliver results seamlessly.
      </p>
      <p className="mb+3">
        I've gained knowledge in the areas of <span className="underline"> machine learning and data analytics </span>, leveraging tools like R, Hive, and Python alongside prominent libraries such as Matplotlib, Pandas, Seaborn, and NumPy.
      </p>
      <p>
        <span className="italic"> Away from the screen, I'm an avid sports enthusiast, finding solace in the intensity of CrossFit and the camaraderie of soccer. My ethos revolves around responsibility, respect, and unwavering commitment, traits that underpin every facet of my professional and personal endeavors.
        </span>
      </p>
    </motion.section>
  );
}
