"use client";

import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import GardiantText from "../GradiantText/GardiantText";
import ServicesCard, { IServiceItems } from "../ServicesCard/ServicesCard";
import { motion, useMotionValue, useTransform } from "motion/react";
import Button from "../Button/Button";
import { FormContext } from "@/context/FormContext";
import Heading from "../Heading/Heading";
const SERVICES_CONTENT: IServiceItems[] = [
  {
    id: "services-90-head-1",
    head: "Web Development",
    desc: "We build responsive, customizable websites that elevate your brand and engage users across all devices.",
  },
  {
    id: "services-90-head-2",
    desc: "We create user-centric mobile applications, from MVPs to full-scale solutions, designed to drive engagement and support business growth.",
    head: "App Development",
  },
  {
    id: "services-90-head-3",
    desc: "We deliver in-depth research and design digital products that offer seamless, captivating experiences for users.",
    head: "UI/UX Design",
  },
  {
    id: "services-90-head-4",
    desc: "We develop ERP, CMS, and CRM solutions to streamline operations, enhance productivity, and support your business needs.",
    head: "Business Management Solutions",
  },
];

function Services() {
  const [sliderVal, setSliderVal] = useState(0);
  const { setIsOpen } = useContext(FormContext);
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        console.log("called");
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const x = useMotionValue(0);

  useEffect(() => {
    x.set(sliderVal);
  }, [sliderVal, x]);

  const transform = useTransform(
    x,
    [1, SERVICES_CONTENT.length],
    [isMobile ? "150%" : "60%", isMobile ? "-90%" : "0%"]
  );

  return (
    <section
      id="services"
      className="min-h-[100dvh]  bg-primary-b flex flex-col pt-10 justify-center"
    >
      <div className="ml-[20px] xl:ml-0 xl:w-[1120px] self-auto  xl:self-center  xl:max-w-[1120px] mb-4">
        <Heading text="WHAT DO WE OFFER?" />
        <h2 className="text-[20px] font-extrabold xl:text-heading-medium text-primary-a mt-4 xl:max-w-[80%]">
          We elevate brands by transforming ideas into stylish, effective, and
          <GardiantText> seamless experiences.</GardiantText>
        </h2>
      </div>
      <div className="xl:flex-grow bg-gradient-1 py-5  flex flex-col justify-center overflow-hidden">
        <motion.div
          style={{
            x: transform,
          }}
          className="flex items-center justify-center"
        >
          {SERVICES_CONTENT.map((e) => (
            <ServicesCard item={e} key={e.id} />
          ))}
        </motion.div>
        <div className="flex mt-6 flex-col xl:flex-row xl:w-[1120px] max-w-[1120px] ml-[20px] xl:ml-0 xl:self-center justify-between">
          <div className="bg-primary-b self-start px-2 xl:p-2 xl:px-4 order-2 mt-[20px] xl:mt-0 xl:order-1 rounded-full border-4 dark:border-primary-b transition-all">
            <input
              className="outline-none border-none mt-2 accent-black dark:accent-white transition-all"
              type="range"
              value={sliderVal}
              min={1}
              onChange={(e) => setSliderVal(+e.target.value)}
              max={SERVICES_CONTENT.length}
              step={0.01}
            />
          </div>
          <div className="mt-[20px] xl:mt-0 order-1">
            <Button
              label="Contact Us"
              className="bg-primary-b  dark:border-black dark:hover:bg-primary-a dark:hover:text-primary-b mr-4"
              onClick={() => setIsOpen && setIsOpen(true)}
            />

            <Button label="Download Broacher" variant="black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
