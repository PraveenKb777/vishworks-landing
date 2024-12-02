"use client";
import { useScroll } from "motion/react";
import { useRef } from "react";
import Card from "../Cards";

export interface ISliderItems {
  head: string;
  desc: string;
}

const SLIDER_CONTENT: ISliderItems[] = [
  {
    desc: "We begin by understanding your vision and business needs, documenting every detail to ensure both sides are aligned from the start.",
    head: "Requirement Gathering",
  },
  {
    desc: "Our design team creates interactive wireframes and mockups that bring your concept to life, focusing on a user-friendly and captivating experience.",
    head: "Design & Wireframing",
  },
  {
    desc: "After finalizing designs, we build a prototype to give you a real feel of the product. Your feedback at this stage is crucial to perfecting the vision.",
    head: "Prototyping & Feedback",
  },
  {
    desc: "Once the prototype is approved, we move into development, building a robust, high-performing product that meets your business goals.",
    head: "Development",
  },
  {
    desc: "We rigorously test for quality and functionality before deploying the final product, ensuring it meets high standards across devices and platforms.",
    head: "Testing & Deployment",
  },
  {
    desc: "After launch, we provide ongoing support, maintenance, and SEO optimization to help your product stay up-to-date, rank higher, and reach your audience effectively as your business grows.",
    head: "Support, Growth & SEO",
  },
];

const Slider = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end center"],
  });

  return (
    <section
      id="howItWorks"
      ref={targetRef}
      className="h-[500vh]  sticky top-0 bottom-0 left-0 right-0 flex justify-center overflow-x-clip   bg-primary-b px-[20px] xl:pl-10 xl:pr-10"
    >
      <div className="flex flex-col p-0 xl:w-[1120px]  xl:max-w-[1120px] w-screen  sticky top-0 bottom-0 left-0 right-0   h-screen  items-center pt-6  xl:pt-10 ">
        <h1 className=" text-[12px] xl:text-heading-xxsmall  inline-block text-[#4d4c4d] self-start">
          HOW IT WORKS
        </h1>
        <p className="text-[20px] font-extrabold xl:text-heading-medium text-primary-a mt-4 xl:max-w-[80%] self-start">
          From ideation to launch, we ensure every step delivers value and
          innovation.
        </p>
        {SLIDER_CONTENT.map((e, i) => (
          <Card
            key={i}
            index={i}
            scrollYProgress={scrollYProgress}
            length={SLIDER_CONTENT.length}
            item={e}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
