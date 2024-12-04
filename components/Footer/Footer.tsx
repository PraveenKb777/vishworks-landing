"use client";
import React from "react";
import Button from "../Button/Button";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";

import constant from "../../constants";
const Footer = () => {
  const lenis = useLenis();
  return (
    <section
      id="contact"
      className="min-h-screen   w-screen   bg-primary-a flex flex-col justify-center items-center"
    >
      <div className="p-[20px] xl:max-w-[1120px] xl:w-[80dvw] flex-grow flex flex-col  justify-center">
        <h3 className="text-[12px] xl:text-heading-xxsmall text-primary-b">
          CONTACT
        </h3>
        <div className="relative my-10 xl:my-32">
          <h1 className="text-core-content-teritary text-[40px] font-extrabold xl:text-display-large absolute -top-[30px]  xl:top-[-40px] pointer-events-none">
            {"Vishworks".split("").map((e, i) => (
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: i + 1 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ type: "tween", delay: 0.15 * i }}
                viewport={{ amount: "some", once: true }}
                style={{ display: "inline-block" }}
                initial="hidden"
                whileInView={"visible"}
                key={e + i}
              >
                {e}
              </motion.span>
            ))}
          </h1>
          <h4 className="text-[19px] font-bold xl:text-heading-xsmall text-primary-b z-[1] relative">
            We are a digital solutions agency dedicated to helping businesses
            grow through innovative web and app development, user-centered
            design, and powerful management solutions.
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h6 className="text-core-content-teritary text-[18px] font-extrabold xl:text-heading-xsmall">
              Contact us
            </h6>
            <a
              className="text-[12px] font-semibold xl:text-links-large text-primary-b"
              href={`mailto:${constant.email}`}
            >
              {constant.email}
            </a>
          </div>
          {/* <div>
            <h6 className="text-core-content-teritary  text-[18px] font-extrabold xl:text-heading-xsmall">
              Follow Us
            </h6>

            <a
              className="text-[12px] font-semibold xl:text-links-large text-primary-b "
              href="mailto:vishworks.ap@gmail.com"
            >
              vishworks.ap@gmail.com
            </a>
          </div> */}
        </div>
      </div>
      <div className="w-[calc(100%-40px)] max-w-[1120px]  xl:w-[80%] border-t border-primary-b text-primary-b px-2 py-4 xl:px-10 flex justify-between items-center">
        <p className="text-[8px] xl:text-label-small">
          &#169; Copyright 2024 VishWorks Private Limited. all Rights Reserved.
        </p>
        <Button
          label="GO UP"
          variant="white"
          style={{ borderRadius: 9999 }}
          onClick={() => lenis?.scrollTo(0)}
        />
      </div>
    </section>
  );
};

export default Footer;
