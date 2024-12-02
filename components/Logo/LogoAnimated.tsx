import { motion } from "motion/react";
import { FC, SVGProps, useState } from "react";

export const LogoAnimated: FC<SVGProps<SVGSVGElement>> = ({
  style,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <svg
      width={40}
      style={{ aspectRatio: "531/397", position: "relative", ...style }}
      viewBox="0 0 531 397"
      fill="none"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHover ? 1 : 0,
          transition: {
            opacity: {
              type: "tween",
              delay: 1,
              repeat: isHover ? Infinity : 0,
              repeatType: "reverse",
              duration: 0.5,
              repeatDelay: 1,
            },
          },
        }}
        style={{ zIndex: 10 }}
        d="M64.12 58.56C25.037 41.863 11.132 71.446 9.56 90.06l177.001 306.572c19.485-11.25 33.809-67.44 23.059-86.059z"
        fill="url(#a)"
      />
      <g>
        {/* 3rd line in w */}
        <motion.path
          initial={{ x: "-50%" }}
          animate={{
            opacity: isHover ? 1 : 0,
            x: isHover ? "0%" : "-50%",
            transition: {
              opacity: {
                type: "tween",
                delay: 1,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              x: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
            },
          }}
          d="M343.896 82.615c-36.13-8.979-51.427 17.259-54.56 31.5l96.298 166.794c23.383-13.5 38.006-60.173 29.325-75.209z"
          fill="url(#b)"
        />
        {/* 2nd line in w */}
        <motion.g
          initial={{ rotate: "-59deg", x: "-33%", y: "10%" }}
          animate={{
            opacity: isHover ? 1 : 0,
            x: isHover ? "0%" : "-33%",
            y: isHover ? "0%" : "10%",
            rotate: isHover ? "0" : "-59deg",
            transition: {
              opacity: {
                type: "tween",
                delay: 1,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              x: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              y: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              rotate: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
            },
          }}
          filter="url(#c)"
        >
          <path
            d="m323.25 50-88 152.42c-20.2 34.988 3.824 74.377 23.31 85.627l87.75-151.987c18.6-32.217-7.905-77.31-23.06-86.06"
            fill="url(#d)"
          />
        </motion.g>
        {/* 1st line in w */}
        <motion.g
          initial={{ x: "-23.6%" }}
          animate={{
            opacity: isHover ? 1 : 0,
            x: isHover ? "0" : "-23.6%",
            transition: {
              opacity: {
                type: "tween",
                delay: 1,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              x: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
            },
          }}
          filter="url(#e)"
        >
          <path
            d="M189.394 57.302c-39.209-14.313-52.71 15.036-54.56 31.5l119.25 206.547c23.383-13.5 34.06-67.007 23.31-85.627z"
            fill="url(#f)"
          />
        </motion.g>
        {/* 4th line in w */}
        <motion.g
          animate={{
            opacity: isHover ? 1 : 0,
            x: isHover ? "0%" : "-58%",
            y: isHover ? "0%" : "10%",
            rotate: isHover ? "0" : "-59deg",
            transition: {
              opacity: {
                type: "tween",
                delay: 1,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              x: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              y: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
              rotate: {
                type: "tween",
                delay: 1.3,
                repeat: isHover ? Infinity : 0,
                repeatType: "reverse",
                duration: 0.5,
                repeatDelay: 1,
              },
            },
          }}
          initial={{ rotate: "-59deg", x: "-58%", y: "10%" }}
          filter="url(#g)"
        >
          <path
            d="m458.73 44.045-93.52 161.98c-21.467 37.182 1.864 77.772 21.35 89.022l93.254-161.521c19.766-34.237-5.929-80.732-21.084-89.482"
            fill="url(#h)"
          />
        </motion.g>
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={27.28}
          y1={57.75}
          x2={213.84}
          y2={380.882}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#C800D9" />
          <stop offset={0.64} stopColor="#4948FD" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={309.482}
          y1={86.009}
          x2={412.914}
          y2={265.159}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#C800D9" />
          <stop offset={0.64} stopColor="#4948FD" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={350.53}
          y1={65.75}
          x2={231.28}
          y2={272.297}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#C800D9" />
          <stop offset={0.64} stopColor="#4948FD" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={153.28}
          y1={57.75}
          x2={281.364}
          y2={279.599}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#C800D9" />
          <stop offset={0.64} stopColor="#4948FD" />
        </linearGradient>
        <linearGradient
          id="h"
          x1={486.01}
          y1={59.794}
          x2={359.28}
          y2={279.297}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.255} stopColor="#C800D9" />
          <stop offset={0.64} stopColor="#4948FD" />
        </linearGradient>
        <filter
          id="c"
          x={193.6}
          y={10}
          width={213.089}
          height={326.047}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={10} dy={4} />
          <feGaussianBlur stdDeviation={22} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_732_689"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_732_689"
            result="shape"
          />
        </filter>
        <filter
          id="e"
          x={100.834}
          y={13.483}
          width={234.754}
          height={329.866}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={10} dy={4} />
          <feGaussianBlur stdDeviation={22} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_732_689"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_732_689"
            result="shape"
          />
        </filter>
        <filter
          id="g"
          x={312.646}
          y={0.044}
          width={218.351}
          height={339.003}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={22} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_732_689"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_732_689"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
