"use client";
import React, { useContext, useRef } from "react";
import GardiantText from "../GradiantText/GardiantText";
import Button from "../Button/Button";
import { useLenis } from "lenis/react";
import { FormContext } from "@/context/FormContext";
import { motion, useInView } from "motion/react";
const HeroSection = () => {
  const lenis = useLenis();
  const { setIsOpen } = useContext(FormContext);
  const sectionRef = useRef(null);
  const headingInview = useInView(sectionRef, { once: true, amount: "some" });
  return (
    <section
      id="hero-section"
      className="min-h-[100dvh] w-dvw flex justify-center items-center bg-primary-b transition"
      ref={sectionRef}
    >
      <div className="flex items-center justify-center max-w-[817px] flex-col">
        {headingInview && (
          <motion.h1 className="text-[24px] font-bold leading-[30px] lg:text-display-large text-center home-title text-primary-a">
            <span>
              Let&apos;s Elevate Your <GardiantText>Growth</GardiantText>
            </span>
            <br />
            <span> with Custom Digital Solutions.</span>
          </motion.h1>
        )}
        <motion.p
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: "some" }}
          variants={{
            hidden: { opacity: 0, y: "30%" },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "tween", duration: 1 }}
          className="max-w-[60%] text-center text-[16px] lg:text-paragraph-large text-[#4d4c4d] xl:mt-10"
        >
          We believe in building products that elevate your business and engage
          your users at every touchpoint.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "some" }}
          className="mt-4 xl:mt-10"
        >
          <Button
            label="Contact Us"
            onClick={() => setIsOpen && setIsOpen(true)}
          />
          <span className="w-2 inline-block" />
          <Button
            variant="black"
            label="See our services"
            onClick={() => lenis?.scrollTo("#services")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
