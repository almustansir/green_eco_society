import FooterComp from "../Components/FooterComp";
import ImageCarousel from "../Components/ImageCarousel";
import NavComp from "../Components/NavComp";
import ShowcaseImageComp from "../Components/ShowcaseImageComp";

export default function Home() {
  return (
    <div className="font-main">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/galleryCover.png')`,
          height: "650px",
        }}
      >
        {/* Hero section */}
        <NavComp />

        <h3 className="text-center mt-[200px] text-8xl">Gallery</h3>
      </div>

      <div className="mt-[150px] mx-[200px] flex items-center justify-center">
        {/* groupImage section */}
        <ImageCarousel />
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* Works section */}
        <h3 className="text-center mb-[75px] text-5xl font-bold text-[#466042]">
          Our Work
        </h3>
        <div className=" flex justify-center gap-10">
          {/* <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 mr-10 h-[450px] hover:cursor-pointer">
            <img
              src="event1.png"
              alt="Event1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div> */}
          {/* <ShowcaseImageComp image_link="/event1.png" /> */}
          <ShowcaseImageComp />
          <ShowcaseImageComp />
        </div>
        <div className=" flex justify-center">
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 mr-10 h-[450px] hover:cursor-pointer">
            <img
              src="event1.png"
              alt="Event1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 h-[450px] hover:cursor-pointer">
            <img
              src="event2.png"
              alt="Event2"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 ml-10 h-[450px] hover:cursor-pointer">
            <img
              src="event3.png"
              alt="Event3"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 mr-10 h-[450px] hover:cursor-pointer">
            <img
              src="event1.png"
              alt="Event1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 h-[450px] hover:cursor-pointer">
            <img
              src="event2.png"
              alt="Event2"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-[5%] pb-8 mt-10 ml-10 h-[450px] hover:cursor-pointer">
            <img
              src="event3.png"
              alt="Event3"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 text-3xl font-bold text-white">Event 1</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio.
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}
