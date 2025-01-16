"use client";
import { motion, MotionValue, useTransform } from "motion/react";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { ISliderItems } from "../Slider/Slider";
function removeLastTwoCharacters(str: string): string {
  return str.slice(0, -2);
}
interface CardProps {
  index: number;
  scrollYProgress: MotionValue<number>;
  length: number;
  item: ISliderItems;
  inView: boolean;
}

const Card: FC<CardProps> = ({
  index,
  scrollYProgress,
  length,
  item,
  inView,
}) => {
  const [WIDTH, setWIDTH] = useState(420);
  const [CARD_GAP, setCARD_GAP] = useState(30);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        //console.log("called");
        setWIDTH(260);
        setCARD_GAP(10);
      } else if (window.innerWidth < 1024) {
        setWIDTH(300);
        setCARD_GAP(10);
      } else {
        setWIDTH(420);
        setCARD_GAP(30);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const fromLast = length - index;
  const left = useTransform(
    scrollYProgress,
    [0, ((100 / length) * index) / 150],
    [
      `${length * (WIDTH + CARD_GAP) - fromLast * (WIDTH + CARD_GAP)}px`,
      `${index * CARD_GAP}px`,
    ]
  );
  const targetScale = 1 - fromLast * 0.02;
  const range = [index * (length / 100), 1];

  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  useEffect(() => {
    //console.log("called Widdth", WIDTH);
    let unsub: VoidFunction = () => {};
    if (WIDTH === 420 || WIDTH === 300) {
      if (index === length - 1) {
        unsub = left.on("change", (e) => {
          if (
            parseInt(removeLastTwoCharacters(e)) <
            WIDTH + CARD_GAP * length
          ) {
            //console.log("try", WIDTH);
            left.stop();
            left.set(`${WIDTH + CARD_GAP * length}px`);
          }
        });
      }
    }

    return () => unsub();
  }, [WIDTH, index, left, length, CARD_GAP]);
  //console.log(item.img);

  return (
    <motion.div
      className="text-black  absolute "
      initial={"hidden"}
      animate={inView ? "visible" : undefined}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { top: `${70 + index * 10}%`, opacity: 0 },
        visible: {
          top: "55%",
          opacity: 1,
          y: "-40%",
        },
      }}
      style={{
        left,
        top: "55%",
        opacity: 1,
        y: "-40%",
      }}
    >
      <motion.div
        className="text-primary-b  rounded-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky flex flex-col justify-end p-2 xl:p-3 transition-all"
        style={{
          width: WIDTH,
          aspectRatio: WIDTH === 420 ? "1" : WIDTH === 300 ? "1/1" : "1/2",
          zIndex: index,
          minWidth: WIDTH,
          scale,
          backgroundImage: `url(${item.img})`,
          backgroundPosition: "center",
        }}
        initial={{ backgroundSize: "100%" }}
        whileHover={{
          backgroundSize: "110%",
          transition: { ease: "linear", duration: 0.1 },
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full rounded-2xl z-[-1]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(105,118,121,0) 94%)",
          }}
        />
        <div className="bg-primary-a text-heading-xsmall absolute h-10 w-10 flex justify-center items-center rounded-full top-3 right-3  aspect-square">
          <h5>{index + 1}</h5>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] font-extrabold  xl:text-heading-xsmall">
            {item.head}
          </h4>
        </div>
        <div>
          <span className="w-[190px] bg-primary-b h-0.5 inline-block rounded-full mb-2" />
          <p className="text-[16px] text-[#ccc] xl:text-paragraph-medium">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
