import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useLayoutEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Heading from "../Heading/Heading";
import { QuotesSVG } from "./SVGS";

interface ITestimonials {
  name: string;
  job?: string;
  desc: string;
  img: string;
}

const TESTIMONIALS: ITestimonials[] = [
  {
    name: "Jade",
    desc: "I couldn’t be happier with my experience working with Vishworks! They took my vision and brought it to life with a beautifully designed, user-friendly website that truly reflects my brand. The team was professional, attentive, and really understood what my business needed.",
    img: "/testimonials/test1.png",
  },
  {
    name: "Jade",
    job: "Head - Customer experience and sales / EarlySalary",
    desc: "I couldn’t be happier with my experience working with Vishworks! They took my vision and brought it to life I couldn’t be happier with my experience working with Vishworks! They took my vision and brought it to life  with a beautifully designed, user-friendly website that truly reflects my brand. The team was professional, attentive, and really understood what my business needed.",
    img: "/testimonials/test2.png",
  },
  {
    name: "Jade",
    job: "Head - Customer experience and sales / EarlySalary",
    desc: "The team was professional, attentive, and really understood what my business needed.",
    img: "/testimonials/test3.png",
  },
];

const TestimonialCard: FC<{
  name: string;
  job?: string;
  desc: string;
  img: string;
}> = ({ desc, name, job, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full min-w-[100%] h-[400px]  text-[13px] md:h-auto md:min-w-[33%] md:w-[33%] md:max-w-[33%] md:mr-3 border border-[#b3b2b3] flex flex-col justify-between rounded-md p-6 md:max-h-[500px] relative"
    >
      <div className="w-full flex justify-between  items-center">
        <div className="h-[90px] w-[90px] aspect-square relative rounded-full bg-red-50 overflow-hidden">
          <Image src={img} alt="testimonial dp" fill />
        </div>
        <div className="flex flex-col max-w-[60%]">
          <h3 className="text-[16px] font-bold md:text-label-large text-primary-a mb-2">
            {name}
          </h3>
          {job && <p className="text-heading-xxxsmall text-[#808080]">{job}</p>}
        </div>
      </div>
      <p className="text-primary-a mt-10 md:text-[12px] xl:text-paragraph-xsmall">
        {desc}
      </p>
      <QuotesSVG
        height={80}
        width={80}
        className="absolute -top-[50px] left-[10px] fill-accent"
      />
    </motion.div>
  );
};

const Testimonials = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [curr, setCurr] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onClickNext = () => {
    setCurr((e) => (e < TESTIMONIALS.length - 1 ? e + 1 : 0));
  };

  const onClickPrev = () => {
    setCurr((e) => (e !== 0 ? e - 1 : TESTIMONIALS.length - 1));
  };

  return (
    <section
      id="testimonials"
      className="min-h-[100vh] xl:min-h-screen bg-primary-b w-screen relative flex flex-col py-2 shadow-2xl justify-center items-center"
    >
      <div className=" max-w-full w-full md:w-auto px-[20px] xl:px-0 flex flex-col justify-center bg-primary-b xl:max-w-[1120px]">
        <div className="max-w-[1120px] self-center w-full mb-20">
          <Heading text="TESTIMONIALS" />
          <p className="text-[20px] font-extrabold xl:text-heading-medium text-primary-a mt-4 xl:max-w-[80%] ">
            Let’s see what our valuable clients say about our work.
          </p>
        </div>
        <div className="flex justify-center items-stretch w-[95%] self-center md:w-full xl:max-w-[1200px]">
          {isSmall ? (
            <AnimatePresence mode="wait">
              <TestimonialCard key={curr} {...TESTIMONIALS[curr]} />
            </AnimatePresence>
          ) : (
            TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))
          )}
        </div>
        {isSmall && (
          <>
            <div className="relative flex mt-4" key={"pops"}>
              <motion.span
                className="inline-block absolute w-[40px] h-1 bg-accent rounded-full "
                animate={{ left: curr * 44 }}
                transition={{ type: "tween", duration: 0.5 }}
              />
              {TESTIMONIALS.map((_, i) => {
                return (
                  <span
                    key={i}
                    className="h-1 w-[40px] bg-core-content-teritary inline-block rounded-full mr-[4px]"
                  />
                );
              })}
            </div>
            <div className="w-full flex justify-between mt-10">
              <div
                onClick={onClickPrev}
                className="bg-primary-a rounded-full p-2 hover:cursor-pointer"
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
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
