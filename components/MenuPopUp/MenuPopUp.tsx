import { MenuContext } from "@/context/MenuContext";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
const MenuPopUp = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const lenis = useLenis();

  const onClickItem = (href: string) => {
    lenis?.scrollTo(href);

    if (setIsOpen) setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="fixed top-0 h-screen w-screen !bg-opacity-35 bg-black  dark:bg-white z-[999] flex flex-col items-center justify-end"
        >
          <motion.div
            className="flex flex-col"
            initial={{ y: "100%" }}
            transition={{ type: "tween" }}
            animate={{ y: isOpen ? 0 : "100%" }}
          >
            <button
              className=" rounded-full bg-primary-b p-2 mb-4 self-center xl:self-end"
              onClick={(e) => {
                e.preventDefault();
                if (setIsOpen) setIsOpen(false);
              }}
            >
              <IoClose size={30} className="text-primary-a" />
            </button>
            <div className="bg-primary-b flex flex-col xl:flex-row xl:justify-between  max-h-[95vh] w-screen max-w-[768px]  relative rounded-tl-md rounded-tr-md p-10">
              <div>
                <a
                  onClick={() => onClickItem("#services")}
                  className="block text-primary-a text-[32px] font-extrabold"
                >
                  Services
                </a>
                <a
                  onClick={() => onClickItem("#howItWorks")}
                  className="block text-primary-a text-[32px] font-extrabold"
                >
                  How It Works
                </a>
                <a
                  onClick={() => onClickItem("#testimonials")}
                  className="block text-primary-a text-[32px] font-extrabold"
                >
                  Testimonials
                </a>
                <a
                  onClick={() => onClickItem("#projects")}
                  className="block text-primary-a text-[32px] font-extrabold"
                >
                  Projects
                </a>
                <a
                  onClick={() => onClickItem("#contact")}
                  className="block text-primary-a text-[32px] font-extrabold"
                >
                  Contact
                </a>
              </div>
              <div>
                <div className="h-px w-full bg-primary-a rounded-full mt-20 xl:mt-0" />
                {/* <div className="py-2 flex justify-between items-center">
                  <h2 className="text-primary-a text-[32px] font-extrabold">
                    Mode
                  </h2>
                  <div className="text-primary-a ">
                    <DarkModeSwitch
                      isDarkMode={darkMode}
                      toggleDarkMode={onClickDarkToggle}
                    />
                  </div>
                </div> */}
                {/* <div className="h-px w-full bg-primary-a rounded-full " /> */}
                <h1 className="py-2">Twitter</h1>
                <div className="h-px w-full bg-primary-a rounded-full mb-3" />
                <a>vishworks.ap@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MenuPopUp;
