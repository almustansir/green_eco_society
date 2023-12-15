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
          <ShowcaseImageComp
            title="First event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio."
            image="event1.png"
          />
          <ShowcaseImageComp
            title="Second event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event2.png"
          />
          <ShowcaseImageComp
            title="Third event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event3.png"
          />
        </div>
        <div className=" flex justify-center gap-10">
          <ShowcaseImageComp
            title="4th event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event2.png"
          />
          <ShowcaseImageComp
            title="5th event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event3.png"
          />
          <ShowcaseImageComp
            title="5th event"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event1.png"
          />
        </div>
      </div>

      <FooterComp />
    </div>
  );
}
