"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./sectionHeading";

function About() {
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
      <p className="mb-3">
        Embarking on my academic journey at School of Education and Training In Mathematics 
        as a mathematics student,{" "}
        <span className="font-medium">I discovered</span> a deep passion for web development. 
        While pursuing my license in Mathematics,
        I dedicated myself to mastering the intricacies of HTML, CSS, and JavaScript,
        with a particular
        <span className="font-medium "> focus on React.js </span>.{" "}

        This focus allowed me to create visually captivating websites. 
        During a transformative internship as a Website Design intern, 
        <span className="italic"> I translated theoretical knowledge into practical skills, </span>
        implementing designs and
        ensuring their functionality through rigorous quality assurance tests
      </p>
 
      <p>
        <span className="italic">When not immersed in coding</span>, I find joy in playing video games,
        watching movies, and challenging myself as a chess player. {" "}
        The pursuit of continuous learning extends to refining my skills on the chessboard and 
        <span className="font-medium"> passionately following my favorite football team</span> , FC Barcelona.
      </p>
    </motion.section>
  )
}

export default About;
