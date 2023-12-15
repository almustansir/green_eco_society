import Image from "next/image";
import FooterComp from "../Components/FooterComp";
import NavComp from "../Components/NavComp";
import ShowcaseImageComp from "../Components/ShowcaseImageComp";

export default function Home() {
  return (
    <div className="font-main">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/aboutusHero.png')`,
          height: "650px",
        }}
      >
        {/* Hero section */}
        <NavComp />

        <h3 className="text-center mt-[200px] text-8xl">About Us</h3>
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* Our journy */}
        <h3 className="text-center text-5xl font-bold text-[#466042]">
          Our Journey
        </h3>
        <p className="mt-10 text-2xl">
          Lorem ipsum dolor sit amet consectetur. Senectus sodales viverra
          placerat lacinia enim.
        </p>
        <p className="mt-10 text-2xl">
          Lorem ipsum dolor sit amet consectetur. Enim laoreet est nisl a. Ipsum
          ornare congue tristique volutpat pulvinar quam sapien vel. Pretium
          arcu ultrices condimentum elementum libero tempus diam morbi. Amet
          viverra egestas fusce cras. Tempus et netus malesuada viverra a lectus
          quisque. Faucibus ac vel in vitae tristique orci at mattis fames.
          Vitae semper commodo consequat pellentesque purus quis praesent
          malesuada gravida. Morbi blandit pulvinar enim accumsan massa integer
          cursus eget. Quis sed amet velit facilisi morbi mattis vel eu ut.
          Interdum vestibulum tellus velit lobortis ultrices euismod vel quisque
          dictum. Sed cursus orci elementum varius non massa proin neque.
          Hendrerit ut quam nisi mi. Massa Sed tristique volutpat tempor dui
          orci at praesent est dis. Egestas eu rhoncus interdum sit imperdiet.
        </p>
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* events section */}
        <h3 className="text-center text-5xl font-bold text-[#466042]">
          Our Events
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
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* Works section */}
        <h3 className="text-center text-5xl font-bold text-[#466042]">
          Our Work
        </h3>
        <div className=" flex justify-center gap-10">
          <ShowcaseImageComp
            title="First Work"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              impedit iusto obcaecati quos aliquid magnam repudiandae
              distinctio."
            image="event1.png"
          />
          <ShowcaseImageComp
            title="Second Work"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event2.png"
          />
          <ShowcaseImageComp
            title="Third Work"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            impedit iusto obcaecati quos aliquid magnam repudiandae
            distinctio."
            image="event3.png"
          />
        </div>
      </div>
      <FooterComp />
    </div>
  );
}
