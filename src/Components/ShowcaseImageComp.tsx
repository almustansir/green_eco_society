import React from "react";

const ShowcaseImageComp = ({
  title = "Empty",
  description = "Empty",
  image = "event1.png",
}) => {
  return (
    <a href="/gallery">
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 h-[450px] w-[450px]">
        {/* fix the width when making it responsive. */}
        <img
          src={image}
          alt="Event1"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 text-3xl font-bold text-white">{title}</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
          {description}
        </div>
      </div>
    </a>
  );
};

export default ShowcaseImageComp;
