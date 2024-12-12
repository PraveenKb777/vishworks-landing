"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Heading from "../Heading/Heading";
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0.95, 0.8]);
  const y = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 0]);
  const rotate = useTransform(scrollYProgress, [0.5, 0.95], ["-90deg", "0deg"]);
  const bottom = useTransform(scrollYProgress, [0.7, 0.95], ["-30%", "5%"]);
  const opacityReachUs = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);

  return (
    <section id="projects" ref={container} className="h-[400vh] bg-primary-b">
      <div className="flex flex-col items-center sticky top-0">
        <motion.div
          style={{ y, opacity }}
          className="max-w-[1200px] min-h-screen z-[1] flex flex-col  items-center relative justify-center"
        >
          <h1 className="text-[24px] font-bold xl:text-heading-large text-primary-b text-center xl:mb-0 mb-36">
            Access comprehensive diabetes information and tools to manage your
            health.
          </h1>
          <p className="text-heading-xxsmall mt-14 text-primary-b text-center">
            Diabetes Companion Application
          </p>
        </motion.div>
        <motion.div
          className="absolute  xl:w-[1120px] w-screen xl:ml-0 ml-[20px] z-10"
          style={{
            top: "5%",
            opacity: 1,
          }}
        >
          <Heading text="OUR PROJECTS" />
        </motion.div>
        <motion.div
          className="absolute xl:w-[1120px] w-screen xl:ml-0 ml-[20px] z-10"
          style={{
            bottom,
            opacity: opacityReachUs,
          }}
        >
          <h1 className="text-[18px] font-extrabold xl:text-heading-medium text-primary-a">
            Reach us
          </h1>
          <p className="text-[14px] font-extrabold xl:text-paragraph-small text-core-content-teritary">
            Where your needs meet our expertise
          </p>
        </motion.div>
        <div className="h-screen w-screen absolute max-h-screen max-w-screen flex items-center  left-0 overflow-hidden">
          <motion.div
            className="absolute left-[50%] top-[5%] h-[90vh] "
            style={{
              aspectRatio: "743 / 1547",
              scale,
              rotate,
              x: "-50%",
            }}
          >
            <Image src={"/mockup/mockup.png"} alt="iphone mockup" fill />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
