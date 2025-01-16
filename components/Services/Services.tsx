"use client";

import { FormContext } from "@/context/FormContext";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { FC, useContext, useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Button from "../Button/Button";
import GardiantText from "../GradiantText/GardiantText";
import Heading from "../Heading/Heading";
import { IServiceItems } from "../ServicesCard/ServicesCard";
import ServicesCard2 from "./ServicesCard2";
const SERVICES_CONTENT: IServiceItems[] = [
  {
    id: "services-90-head-1",
    head: "Landing Page Optimization",
    desc: "Transform your landing pages into high-converting powerhouses. Whether you need a fresh start or improvements, we optimize speed, design, SEO, and performance to turn visitors into loyal customers.",
    img: "/images/service-1.png",
  },
  {
    id: "services-90-head-2",
    desc: "Boost your website’s performance, user engagement, and SEO rankings. From building dynamic websites from scratch to optimizing existing ones, we ensure faster load times, smoother experiences, and higher conversions.",
    head: "Website Optimization",
    img: "/images/service-2.png",
  },
  {
    id: "services-90-head-3",
    desc: "From concept to launch, we design and develop intuitive mobile and web apps that empower users and drive business outcomes.",
    head: "App Development",
    img: "/images/service-3.png",
  },
  {
    id: "services-90-head-4",
    desc: "We create scalable, robust SaaS products tailored for your business. Whether it’s CRM, CMS, or ERP, we deliver custom solutions that streamline your operations and enhance growth.",
    head: "Saas Solution Development",
    img: "/images/service-4.png",
  },
];

const AnimatedDot: FC<{ index: number; current: number }> = ({
  current,
  index,
}) => {
  return (
    <motion.div
      animate={current === index ? "current" : "initial"}
      variants={{
        initial: { width: "0.5rem", background: "#858585" },
        current: { width: "3rem", background: "#fff" },
      }}
      className="h-2 w-6 mr-2 rounded-full"
    />
  );
};

function Services() {
  const [sliderVal, setSliderVal] = useState(0);
  const { setIsOpen } = useContext(FormContext);

  const x = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => onClickNext(), 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(isMobile);

  const transform = useTransform(
    x,
    [0, SERVICES_CONTENT.length - 1],
    ["0%", `-${(SERVICES_CONTENT.length - 1) * 101}%`]
  );
  const onClickNext = () => {
    setSliderVal((e) => {
      animate(x, e + 1 >= SERVICES_CONTENT.length ? 0 : e + 1, {
        type: "tween",
        stiffness: 300,
        damping: 30,
      });

      return e < SERVICES_CONTENT.length - 1 ? e + 1 : 0;
    });
  };

  const onClickPrev = () => {
    animate(
      x,
      sliderVal - 1 < 0 ? SERVICES_CONTENT.length - 1 : sliderVal - 1,
      {
        type: "tween",
        stiffness: 300,
        damping: 30,
      }
    );
    setSliderVal((e) => (e !== 0 ? e - 1 : SERVICES_CONTENT.length - 1));
  };

  return (
    <section
      id="services"
      className="min-h-[100dvh]  bg-primary-b flex flex-col pt-10 justify-center"
    >
      <div className="ml-[20px] xl:ml-0 xl:w-[1120px] self-auto  xl:self-center  xl:max-w-[1120px] mb-4">
        <Heading text="OUR SERVICES" />

        <h2 className="text-[20px] font-extrabold xl:text-heading-medium text-primary-a mt-4 max-w-[95%] xl:max-w-[80%]">
          End-to-end digital solutions designed to elevate
          <GardiantText> your business.</GardiantText>
        </h2>
      </div>
      <div className="flex flex-col self-center xl:w-[1120px]  xl:max-w-[1120px]">
        <div className=" h-[70vh] max-w-[90vw] lg:max-w-[none] md:h-[60vh] relative self-center  overflow-hidden">
          <motion.div
            transition={{ type: "tween" }}
            className="h-full w-full flex items-center "
            style={{ x: transform }}
          >
            {SERVICES_CONTENT.map((e) => (
              <ServicesCard2 item={e} index={0} key={e.id} />
            ))}
          </motion.div>
          <div className="flex p-4 absolute bottom-1">
            {SERVICES_CONTENT.map((e, i) => (
              <AnimatedDot key={i} index={i} current={sliderVal} />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center  justify-between  mt-10 ">
          <div className="flex  ">
            <div
              onClick={onClickPrev}
              className="bg-primary-a rounded-full p-2 hover:cursor-pointer mr-5"
            >
              <MdOutlineNavigateNext
                size={25}
                className="text-primary-b rotate-180"
              />
            </div>
            <div
              onClick={onClickNext}
              className="bg-primary-a rounded-full p-2 hover:cursor-pointer"
            >
              <MdOutlineNavigateNext size={25} className="text-primary-b" />
            </div>
          </div>
          <Button
            onClick={() => setIsOpen && setIsOpen(true)}
            label="Contact Us"
            variant="default"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
