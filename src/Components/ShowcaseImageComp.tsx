import React from "react";

const ShowcaseImageComp = () => {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 h-[450px] hover:cursor-pointer w-[500px]">
      <img
        src="event1.png"
        alt="Event1"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum impedit
        iusto obcaecati quos aliquid magnam repudiandae distinctio.
      </div>
    </div>
  );
};

export default ShowcaseImageComp;
