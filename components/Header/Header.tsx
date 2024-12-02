"use client";
import { MenuContext } from "@/context/MenuContext";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { Logo } from "../Logo/Logo";

const HeaderTabs: FC<{ label: string; href?: string }> = ({ label, href }) => {
  const lenis = useLenis();

  return (
    <a
      onClick={() => lenis?.scrollTo(href || "")}
      className="header-buttons relative m-1 mr-5 cursor-pointer"
    >
      {label}
      <span className="w-0 absolute bottom-0 left-0 bg-core-content-primary h-[1px] inline-block transition-all ease-in" />
    </a>
  );
};
const Header: FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const { setIsOpen, darkMode, onClickDarkToggle } = useContext(MenuContext);
  const lenis = useLenis();
  const scrollPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPosition.current && currentScroll > 50) {
        setShowHeader(false);
      } else if (currentScroll < scrollPosition.current) {
        setShowHeader(true);
      }
      scrollPosition.current = currentScroll; // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky flex justify-center bg-transparent top-0 h-0 z-50">
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : "-120%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="absolute top-3 py-3   flex items-center justify-between
   bg-[#ffffff30] bg-clip-padding border-2 backdrop-filter backdrop-blur-sm bg-opacity-10 w-[calc(100%-40px)]  xl:mx-0 xl:w-[80dvw] max-w-[1120px] rounded-full"
      >
        <div
          className="rounded-full text-heading-xxsmall  ml-3 hover:cursor-pointer "
          onClick={() => lenis?.scrollTo(0)}
        >
          <Logo width={50} />
        </div>
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <HeaderTabs href="#services" label="Services" />
          <HeaderTabs label="How It Works" href="#howItWorks" />
          <HeaderTabs href="#testimonials" label="Testimonials" />
          <HeaderTabs href="#projects" label="Projects" />
          <HeaderTabs href="#contact" label="Contact" />
        </nav>
        <div
          className="hidden md:block rounded-full  p-3 mr-3 hover:cursor-pointer bg-primary-a"
          onClick={onClickDarkToggle}
        >
          {darkMode ? (
            <MdSunny color="black" size={20} />
          ) : (
            <MdDarkMode color="white" size={20} />
          )}
        </div>
        <div
          onClick={() => setIsOpen && setIsOpen(true)}
          className="md:hidden rounded-full  p-3 mr-3 hover:cursor-pointer bg-[#00000008]"
        >
          <IoMenu size={20} />
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
