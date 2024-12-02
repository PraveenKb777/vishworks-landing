import React, { FC } from "react";

export interface IServiceItems {
  id: string;
  head: string;
  desc: string;
}

const ServicesCard: FC<{ item: IServiceItems }> = ({ item }) => {
  const { desc, head } = item;

  return (
    <div className="h-[340px] xl:h-[450px] w-[240px] min-w-[240px]  xl:w-[320px] p-2 xl:p-8 mr-4   backdrop-filter text-primary-b  dark:text-white bg-gray-300 backdrop-blur-lg bg-opacity-10 flex flex-col justify-between rounded-lg">
      <h4 className="text-[18px] font-bold xl:text-heading-xsmall">{head}</h4>
      <p className="text-[16px] font-paragraph xl:text-paragraph-medium">
        {desc}
      </p>
    </div>
  );
};

export default ServicesCard;
