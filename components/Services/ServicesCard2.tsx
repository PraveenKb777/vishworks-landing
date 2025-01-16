import { FC } from "react";
import { IServiceItems } from "../ServicesCard/ServicesCard";

const ServicesCard2: FC<{ item: IServiceItems; index?: number }> = ({
  item,
}) => {
  return (
    <div
      className="min-w-full min-h-full bg-gray-400 relative  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl pb-12 flex flex-col justify-end p-4 mr-[1%]"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(105,118,121,0) 94%)",
        }}
      />
      <div className="z-[1]">
        <h4 className="text-primary-b text-[20px] md:text-heading-small ">
          {item.head}
        </h4>
        <hr className="w-[50%] my-3" />
        <p className="text-[#ccc] text-[16px] md:text-paragraph-large">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard2;
