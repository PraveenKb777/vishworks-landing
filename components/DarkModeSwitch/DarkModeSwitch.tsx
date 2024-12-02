import { motion, Variants } from "motion/react";
import React, { FC } from "react";

const DarkModeSwitch: FC<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ isDarkMode, toggleDarkMode }) => {
  const size = 30;

  const containerVariants: Variants = {
    dark: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
      backgroundColor: "#1A202C",
    },
    light: {
      backgroundColor: "#76A5FF",
    },
  };

  const childVariants: Variants = {
    dark: {
      y: 0,
      transition: {
        type: "tween",
      },
    },
    light: {
      y: "-100px",
    },
  };

  return (
    <div
      onClick={toggleDarkMode}
      className={`cursor-pointer relative flex items-center  ${
        isDarkMode ? "justify-end" : "justify-start"
      }`}
      style={{
        width: `${size * 2.1}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,

        overflow: "hidden",
        backgroundColor: isDarkMode ? "#1A202C" : "#76A5FF",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      {/* Sun/Moon decorations */}
      <div
        className="absolute"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`,
          borderRadius: "50%",
          backgroundColor: "white",
          right: "15%",
          top: "20%",
          transform: isDarkMode ? "translateY(100px)" : "translateY(0)",
          transition: "transform 0.3s linear",
        }}
      ></div>
      <div
        className="absolute"
        style={{
          width: `${size * 0.2}px`,
          height: `${size * 0.2}px`,
          borderRadius: "50%",
          backgroundColor: "white",
          right: "30%",
          top: "45%",
          transform: isDarkMode ? "translateY(100px)" : "translateY(0)",
          transition: "transform 0.3s linear 0.1s",
        }}
      ></div>

      {/* Motion Container */}
      <motion.div
        className="relative flex"
        variants={containerVariants}
        initial={isDarkMode ? "light" : "dark"}
        animate={isDarkMode ? "dark" : "light"}
      >
        {/* Decorative Motion Items */}
        <motion.div
          className="absolute"
          style={{
            top: "70%",
            left: "25%",
            width: `${size * 0.08}px`,
            height: `${size * 0.06}px`,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="absolute"
          style={{
            top: "25%",
            left: "15%",
            width: `${size * 0.3}px`,
            height: `${size * 0.3}px`,
            backgroundColor: "white",
            clipPath:
              "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
          }}
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="absolute"
          style={{
            top: "60%",
            left: "45%",
            width: `${size * 0.2}px`,
            height: `${size * 0.2}px`,
            borderRadius: "58%",
            clipPath:
              "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
            backgroundColor: "white",
          }}
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="absolute"
          style={{
            top: "40%",
            left: "35%",
            width: `${size * 0.1}px`,
            height: `${size * 0.1}px`,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="absolute"
          style={{
            top: "25%",
            left: "55%",
            width: `${size * 0.08}px`,
            height: `${size * 0.08}px`,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          variants={childVariants}
        ></motion.div>

        {/* Switch Knob */}
        <motion.div
          layout
          animate={isDarkMode ? "dark" : "light"}
          variants={{
            dark: {
              boxShadow: "inset 0px 13px white, inset 0px 13px 1px 1px white",
              rotate: 90,
              background: "transparent",
            },
            light: {
              boxShadow: "inset 0px 0px white, inset 0px 0px 0px 0px white",
              rotate: 90,
              background: "#fff",
            },
          }}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${size}px`,
            zIndex: 9999,
            transition: "box-shadow 0.3s linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;
