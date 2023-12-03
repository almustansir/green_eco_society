import FooterComp from "../components/FooterComp";
import NavComp from "../components/NavComp";

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

      <div className="mt-[150px] flex items-center justify-center">
        {/* groupImage section */}
        <img
          src="homeImg1.png"
          className="h-[780px] w-[1542px]"
          alt="About us Image"
        />
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* Works section */}
        <h3 className="text-center mb-[75px] text-5xl font-bold text-[#466042]">
          Our Work
        </h3>
        <div className="flex justify-between mt-10">
          <div className="w-[500px]">
            <img src="/event1.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 1</h4>
          </div>
          <div className="w-[500px] mx-10">
            <img src="/event2.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 2</h4>
          </div>
          <div className="w-[500px]">
            <img src="/event3.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 3</h4>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-[500px]">
            <img src="/event1.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 1</h4>
          </div>
          <div className="w-[500px] mx-10">
            <img src="/event2.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 2</h4>
          </div>
          <div className="w-[500px]">
            <img src="/event3.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 3</h4>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-[500px]">
            <img src="/event1.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 1</h4>
          </div>
          <div className="w-[500px] mx-10">
            <img src="/event2.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 2</h4>
          </div>
          <div className="w-[500px]">
            <img src="/event3.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Work 3</h4>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}
