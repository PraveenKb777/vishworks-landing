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
}

const Card: FC<CardProps> = ({ index, scrollYProgress, length, item }) => {
  const [WIDTH, setWIDTH] = useState(420);
  const [CARD_GAP, setCARD_GAP] = useState(30);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        console.log("called");
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
    console.log("called Widdth", WIDTH);
    let unsub: VoidFunction = () => {};
    if (WIDTH === 420 || WIDTH === 300) {
      if (index === length - 1) {
        unsub = left.on("change", (e) => {
          if (
            parseInt(removeLastTwoCharacters(e)) <
            WIDTH + CARD_GAP * length
          ) {
            console.log("try", WIDTH);
            left.stop();
            left.set(`${WIDTH + CARD_GAP * length}px`);
          }
        });
      }
    }

    return () => unsub();
  }, [WIDTH, index, left, length]);

  return (
    <motion.div
      className="text-black  absolute "
      initial={index < 4 && "hidden"}
      whileInView={index < 4 ? "visible" : undefined}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { top: `${70 + index * 10}%`, opacity: 0 },
        visible: {
          top: "50%",
          opacity: 1,
          y: "-40%",
        },
      }}
      style={{
        left,
        top: "50%",
        opacity: 1,
        y: "-40%",
      }}
    >
      <motion.div
        className="text-primary-a border-2 rounded-md bg-primary-b flex flex-col justify-between p-5 xl:p-9 transition-all"
        style={{
          width: WIDTH,
          aspectRatio: WIDTH === 420 ? 1 : WIDTH === 300 ? "1/1" : "1/2",
          zIndex: index,
          minWidth: WIDTH,
          scale,
        }}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] font-extrabold  xl:text-heading-xsmall">
            {item.head}
          </h4>
          <div className="bg-gray-300 text-heading-xsmall h-10 w-10 flex justify-center items-center rounded-full  aspect-square">
            <h5>{index + 1}</h5>
          </div>
        </div>
        <div>
          <span className="w-[190px] bg-primary-a h-0.5 inline-block rounded-full mb-2" />
          <p className="text-[16px] xl:text-paragraph-medium">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
