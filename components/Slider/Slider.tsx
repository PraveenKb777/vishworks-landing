"use client";
import { useInView, useScroll } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import Card from "../Cards";

export interface ISliderItems {
  head: string;
  desc: string;
  img?: string;
}

const SLIDER_CONTENT: ISliderItems[] = [
  {
    desc: "We make sure we understand your vision and business needs, aligning every detail for a smooth journey.",
    head: "Requirement Gathering",
    img: "/images/how-1.png",
  },
  {
    desc: "Our design team brings your concept to life with wireframes and mockups that focus on a user-friendly, engaging experience.",
    head: "Design & Wireframing",
    img: "/images/how-2.png",
  },
  {
    desc: "We create a prototype so you can experience the product. Your feedback at this stage helps us perfect the design.",
    head: "Prototyping & Feedback",
    img: "/images/how-3.png",
  },
  {
    desc: "Once the design is set, we develop a high-performing, scalable product that meets your business goals.",
    head: "Development",
    img: "/images/how-4.png",
  },
  {
    desc: "We rigorously test your product to ensure it meets quality standards across devices, then deploy it ready for use.",
    head: "Testing & Deployment",
    img: "/images/how-5.png",
  },
  {
    desc: "Post-launch, we provide continuous support, maintenance, and SEO optimization to ensure your product evolves with your business.",
    head: "Support, Growth & SEO",
    img: "/images/how-6.png",
  },
];

const Slider = () => {
  const targetRef = useRef(null);
  const [WIDTH, setWIDTH] = useState(420);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        //console.log("called");
        setWIDTH(260);
      } else if (window.innerWidth < 1024) {
        setWIDTH(300);
      } else {
        setWIDTH(420);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end center"],
  });
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true });

  return (
    <section
      id="howItWorks"
      ref={targetRef}
      className="h-[500vh]  sticky top-0 bottom-0 left-0 right-0 flex justify-center   bg-primary-b px-[20px] xl:pl-10 xl:pr-10"
    >
      <div className="flex flex-col p-0 xl:w-[1120px]  justify-center xl:max-w-[1120px] w-screen  sticky top-0 bottom-0 left-0 right-0   h-screen  items-center pt-6  xl:pt-10 ">
        <h1 className=" text-[12px] xl:text-heading-xxsmall  inline-block text-[#4d4c4d] self-start">
          HOW IT WORKS
        </h1>
        <p className="text-[20px] font-extrabold xl:text-heading-medium text-primary-a mt-4 xl:max-w-[80%] self-start">
          A simple and effective journey from concept to launch.
        </p>
        <div
          className=" relative  w-full "
          ref={inViewRef}
          style={{
            height: WIDTH === 420 ? WIDTH : WIDTH === 300 ? WIDTH : WIDTH * 2,
            top: -50,
          }}
        >
          {SLIDER_CONTENT.map((e, i) => (
            <Card
              key={i}
              index={i}
              scrollYProgress={scrollYProgress}
              length={SLIDER_CONTENT.length}
              item={e}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
