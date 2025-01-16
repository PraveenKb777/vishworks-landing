import { motion } from "motion/react";
import React from "react";

const Concept = () => {
  const className =
    "xl:text-display-medium italic text-[40px] font-bold text-primary-a absolute ";
  return (
    <section id="concept" className="relative min-h-[100dvh]  bg-primary-b ">
      <div className="-translate-x-[50%] relative left-[50%] max-w-[1120px] min-h-[100dvh] ">
        <motion.h1
          whileInView={"visible"}
          initial="hidden"
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: "some" }}
          variants={{
            visible: { left: "20px", opacity: 1 },
            hidden: { left: "-10vw", opacity: 0 },
          }}
          style={{ color: "#4D4C4D" }}
          className={className + " top-[20%] "}
        >
          Research.
        </motion.h1>
        <motion.h1
          whileInView={"visible"}
          transition={{ duration: 0.4 }}
          initial="hidden"
          viewport={{ once: true, amount: "some" }}
          variants={{
            visible: { top: "50%", opacity: 1 },
            hidden: { top: "80%", opacity: 0 },
          }}
          className={
            className + "left-[50%] translate-x-[-50%] -translate-y-[50%]"
          }
        >
          Build.
        </motion.h1>
        <motion.h1
          transition={{ duration: 0.4 }}
          whileInView={"visible"}
          initial="hidden"
          viewport={{ once: true, amount: "some" }}
          variants={{
            visible: { right: "20px", opacity: 1 },
            hidden: { right: "-100px", opacity: 0 },
          }}
          style={{ color: "#4D4C4D" }}
          className={className + "right-[-10vw] bottom-[20%] "}
        >
          Grow.
        </motion.h1>
      </div>
      <p
        className={"max-w-[1120px] text-paragraph-xsmall italic mx-auto w-max "}
      >
        Research to uncover insights, build innovative solutions, and grow
        sustainably. Empower your journey from ideas to impactful results.
      </p>
    </section>
  );
};

export default Concept;
