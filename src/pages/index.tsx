import FooterComp from "../Components/FooterComp";
import NavComp from "../Components/NavComp";

export default function Home() {
  return (
    <div className="font-main">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/homeHeroBg.png')`,
          height: "972px",
        }}
      >
        {/* Hero section */}
        <NavComp />

        <h3 className=" text-center mt-[300px] text-8xl">
          Green Explore Society
        </h3>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="mt-[130px] text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-xl text-sm px-7 py-2.5 text-center me-2 mb-2 dark:hover:bg-white dark:focus:ring-white"
          >
            Explore
          </button>
        </div>
      </div>

      <div className="mx-[200px] mt-[75px]">
        {/* About our Journey Section */}
        <h4 className="text-center text-[#466042] text-5xl font-bold">
          About our journey
        </h4>
        <p className="mt-[35px] text-left text-xl">
          Lorem ipsum dolor sit amet consectetur. Diam sem faucibus consequat
          amet pharetra sed. Vestibulum orci dignissim pellentesque amet. Sit
          enim mattis eu pretium blandit lectus viverra elementum. Urna varius
          porta mauris risus nec. Tempor urna consectetur sed massa aenean
          consectetur. Nulla neque lorem quam diam viverra......
        </p>
        <div className="mt-[35px] flex items-center justify-center">
          <img
            src="homeImg1.png"
            className="h-[780px] w-[1542px]"
            alt="About us Image"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="mt-[50px] text-black hover:text-white bg-[#BAE6B2] border border-[#BAE6B2] hover:bg-black font-medium rounded-xl text-sm px-10 py-2.5 text-center me-2 mb-2"
          >
            Gallery
          </button>
        </div>
      </div>

      <div className="mx-[200px] mt-[85px]">
        {/* About Us section */}
        <h4 className="text-center text-[#52734D] text-5xl font-bold">
          About Us
        </h4>
        <div className=" flex justify-between mt-[70px]">
          <img
            src="mainIcon.png"
            className="h-[500px] m-0"
            alt="Flowbite Logo"
          />
          <div className=" mt-20">
            <p className=" text-left text-[#7895CB] text-xl">
              Lorem ipsum dolor sit amet consectetur. Erat convallis vitae
              dictum iaculis feugiat nisl justo. Vitae blandit pretium mauris
              pulvinar.
            </p>
            <p className=" mt-[30px] text-left text-xl">
              Lorem ipsum dolor sit amet consectetur. Morbi interdum neque
              consequat porttitor. Egestas volutpat adipiscing et augue mauris
              augue quam. Faucibus id pulvinar morbi et viverra malesuada auctor
              vel. Est at diam diam a.
            </p>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}
