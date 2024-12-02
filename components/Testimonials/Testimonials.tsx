"use client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import Heading from "../Heading/Heading";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-[100vh] xl:min-h-screen bg-primary-b w-screen relative py-[10vw] px-[20px] xl:px-0 flex flex-col"
    >
      <div className="max-w-[1120px] self-center w-full">
        <Heading text="TESTIMONIALS" />
      </div>
      <div className="flex-grow flex justify-center items-center max-w-[1200px] self-center">
        <div className="text-[22px] font-extrabold lg:text-heading-large text-center text-primary-a ">
          Smart solutions to simplify {"  "}
          <span className="relative inline-block">
            <Tooltip
              anchorSelect=".test1"
              border={0}
              noArrow
              style={{ padding: 0, background: "transparent" }}
            >
              <span className="testimonial-cards">
                I couldn’t be happier with my experience working with Vishworks!
                They took my vision and brought it to life with a beautifully
                designed, user-friendly website that truly reflects my brand.
                The team was professional, attentive, and really understood what
                my business needed. Since launching the site, I’ve seen a
                significant increase in traffic and customer engagement, and
                it’s had a noticeable positive impact on my business. Vishworks
                made the entire process smooth and stress-free. Highly recommend
                them to anyone looking for expert web development that actually
                drives results!
                <br />
                <br />
                Rich Head - Customer experience and sales, EarlySalary
              </span>
            </Tooltip>
            <div className="p-[2px] xl:p-1 bg-gradient-1 rounded-full flex justify-center items-center animate-gradient">
              <Image
                src={"/testimonials/test1.png"}
                alt="testimonial 1"
                height={28}
                width={77}
                className="inline cursor-pointer test1 lg:w-[270px] lg:h-[70px]"
              />
            </div>
          </span>
          {"  "} tasks, boost{" "}
          <span className="relative inline-block">
            <Tooltip
              anchorSelect=".test2"
              place="top"
              border={0}
              noArrow
              style={{ padding: 0, background: "transparent" }}
            >
              <span className="testimonial-cards">
                I couldn’t be happier with my experience working with Vishworks!
                They took my vision and brought it to life with a beautifully
                designed, user-friendly website that truly reflects my brand.
                The team was professional, attentive, and really understood what
                my business needed. Since launching the site, I’ve seen a
                significant increase in traffic and customer engagement, and
                it’s had a noticeable positive impact on my business. Vishworks
                made the entire process smooth and stress-free. Highly recommend
                them to anyone looking for expert web development that actually
                drives results!
                <br />
                <br />
                Rich Head - Customer experience and sales, EarlySalary
              </span>
            </Tooltip>

            <div className="p-[2px] xl:p-1  bg-gradient-2 rounded-full flex justify-center items-center animated-infinite">
              <Image
                src={"/testimonials/test2.png"}
                alt="testimonial 2"
                width={75}
                height={28}
                className="inline cursor-pointer test2 lg:w-[180px] lg:h-[70px]"
              />
            </div>
          </span>{" "}
          productivity, and drive better business{" "}
          <span className="relative inline-block ">
            <Tooltip
              anchorSelect=".test3"
              place="top"
              border={0}
              noArrow
              style={{ padding: 0, background: "transparent" }}
            >
              <span className="testimonial-cards">
                I couldn’t be happier with my experience working with Vishworks!
                They took my vision and brought it to life with a beautifully
                designed, user-friendly website that truly reflects my brand.
                The team was professional, attentive, and really understood what
                my business needed. Since launching the site, I’ve seen a
                significant increase in traffic and customer engagement, and
                it’s had a noticeable positive impact on my business. Vishworks
                made the entire process smooth and stress-free. Highly recommend
                them to anyone looking for expert web development that actually
                drives results!
                <br />
                <br />
                Rich Head - Customer experience and sales, EarlySalary
              </span>
            </Tooltip>
            <div className="p-[2px] xl:p-1  bg-gradient-3 rounded-full flex justify-center items-center animate-gradient">
              <Image
                src={"/testimonials/test3.png"}
                alt="testimonial 3"
                width={59}
                height={28}
                className="inline cursor-pointer test3 lg:w-[250px] lg:h-[70px]"
              />{" "}
            </div>
          </span>{" "}
          outcomes.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
