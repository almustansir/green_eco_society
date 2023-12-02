import FooterComp from "../Components/FooterComp";
import NavComp from "../Components/NavComp";

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
        <div className="flex justify-between mt-10">
          <div className="w-[500px]">
            <img src="/event1.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Event 1</h4>
          </div>
          <div className="w-[500px] mx-10">
            <img src="/event2.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Event 2</h4>
          </div>
          <div className="w-[500px]">
            <img src="/event3.png" className="h-[400px]" alt="event name" />
            <h4 className="text-center mt-4 text-2xl">Event 3</h4>
          </div>
        </div>
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* events section */}
        <h3 className="text-center text-5xl font-bold text-[#466042]">
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
      </div>
      <FooterComp />
    </div>
  );
}
