"use client";
import { FormContext } from "@/context/FormContext";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { FC, useContext, useRef } from "react";
import { IconType } from "react-icons";
import { FaLocationArrow } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoMdArrowForward, IoMdPerson } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { TbAppsFilled } from "react-icons/tb";
import Button from "../Button/Button";
import { VectorGradiant } from "./HeroSvgs";

const HeroStyleCards: FC<{ Logo: IconType; label: string }> = ({
  Logo,
  label,
}) => {
  return (
    <div className="h-[80px] md:h-[130px] aspect-square bg-white rounded-md p-1 md:p-4 flex flex-col justify-between shadow-2xl">
      <Logo size={20} />
      <p className="text-[10px] md:text-heading-xxsmall font-bold">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  const { setIsOpen } = useContext(FormContext);
  const sectionRef = useRef(null);
  const headingInview = useInView(sectionRef, { once: true, amount: "some" });
  return (
    <section
      id="hero-section"
      className="min-h-[100dvh] w-dvw flex flex-col md:flex-row justify-center items-center bg-primary-b transition p-3 xl:p-32"
      ref={sectionRef}
    >
      <div className="flex  justify-center w-full md:max-w-[817px] flex-col">
        {headingInview && (
          <motion.h1 className="text-[40px] font-bold leading-[40px] lg:text-display-large text-left home-title text-primary-a">
            <span>Unlock Tech Products</span>
            <br />
            <span> Designed for Your</span>
            <br />
            <span> Business Growth</span>
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
          className="max-w-[60%] text-left text-[16px] lg:text-paragraph-large text-[#4d4c4d] xl:mt-10"
        >
          We build Software solutions that accelerate your success. From ideas
          to execution, we’re here to create the tools your business needs to
          thrive.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: "some" }}
          className="mt-4 xl:mt-10"
        >
          {/* <Button
            label="Contact Us"
            onClick={() => setIsOpen && setIsOpen(true)}
          />
          <span className="w-2 inline-block" /> */}
          <Button
            variant="black"
            label="Let's Build"
            className="hover:cursor-pointer"
            // onClick={() => lenis?.scrollTo("#services")}
            onClick={() => setIsOpen && setIsOpen(true)}
            Logo={IoMdArrowForward}
          />
        </motion.div>
      </div>
      <motion.div className="bg-white relative  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-2 w-[80%] mt-20 md:mt-0 md:w-[50%]  aspect-[2/1.5]">
        <div className="relative h-full w-full">
          <Image
            src={"/images/heroSection.png"}
            fill
            alt="heroimage"
            className="drop-shadow-2xl bg-gray-400 bg-opacity-15 rounded-2xl"
          />
          <VectorGradiant className="absolute right-0 -top-3 z-[0] h-[500px]" />
        </div>
        <div className="absolute top-[80%] md:top-[90%] left-[0]  md:-left-[10%]">
          <HeroStyleCards Logo={SiPagespeedinsights} label="Web development" />
          <FaCode
            size={20}
            color="#E1E1E1"
            className="absolute left-[110%]  top-[70%]"
          />
        </div>
        <div className="absolute top-[50%] -right-[10%]">
          <HeroStyleCards Logo={TbAppsFilled} label="App development" />
          <FaLocationArrow
            size={20}
            color="#E1E1E1"
            className="absolute left-[110%] rotate-[270deg] top-[70%]"
          />
        </div>
        <div className="absolute bottom-[90%] md:bottom-[95%]  left-[30%]">
          <HeroStyleCards Logo={IoMdPerson} label="UX/UI design" />
          <FaLocationArrow
            size={20}
            color="#E1E1E1"
            className="absolute right-[110%]  top-[60%]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
