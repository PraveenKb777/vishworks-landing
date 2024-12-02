"use client";
import Concept from "@/components/Concept/Concept";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import MenuPopUp from "@/components/MenuPopUp/MenuPopUp";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Slider from "@/components/Slider/Slider";
import Testimonials from "@/components/Testimonials/Testimonials";
import { FormContext } from "@/context/FormContext";
import { MenuContext } from "@/context/MenuContext";
import { useDarkMode } from "@/hooks/useDarkMode";
import ReactLenis from "lenis/react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { darkMode, onClickDarkToggle } = useDarkMode();
  return (
    <>
      <ReactLenis root>
        <MenuContext.Provider
          value={{
            isOpen: menuIsOpen,
            setIsOpen: setMenuIsOpen,
            darkMode,
            onClickDarkToggle,
          }}
        >
          <FormContext.Provider value={{ isOpen, setIsOpen }}>
            <Header />

            <HeroSection />
            <Concept />
            <Services />
            <div className="min-h-[600vh]  xl:h-[600vh] relative ">
              <Slider />
              <Testimonials />
            </div>
            <Projects />
            <Footer />
            <Form />
            <MenuPopUp />
          </FormContext.Provider>
        </MenuContext.Provider>
      </ReactLenis>
    </>
  );
}
