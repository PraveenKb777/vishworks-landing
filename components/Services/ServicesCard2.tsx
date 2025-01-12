import { FC } from "react";
import { IServiceItems } from "../ServicesCard/ServicesCard";

const ServicesCard2: FC<{ item: IServiceItems; index?: number }> = ({
  item,
}) => {
  return (
    <div
      className="min-w-full min-h-full bg-red-600 rounded-2xl pb-12 flex flex-col justify-end p-4 mr-[1%]"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h4 className="text-primary-b text-[20px] md:text-heading-small">
        {item.head}
      </h4>
      <hr className="w-[50%] my-3" />
      <p className="text-[#ccc] text-[16px] md:text-paragraph-large">
        {item.desc}
      </p>
    </div>
  );
};

export default ServicesCard2;
