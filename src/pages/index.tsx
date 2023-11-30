export default function Home() {
  return (
    <div className="">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/homeHeroBg.png')`,
          height: "972px",
        }}
      >
        {/* Hero section */}
        {/* 4. design hero section */}
        <nav className="bg-neutral-950 bg-opacity-40">
          <div className="w-[100%] flex justify-between p-3">
            <a href="#" className="">
              <img
                src="nav/navIcon.png"
                className="h-[60px]"
                alt="Flowbite Logo"
              />
            </a>
            <div className="" id="navbar-sticky">
              <ul className="flex justify-between">
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="#" className="" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="#" className="">
                    About Us
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="#" className="">
                    Gallery
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="#" className="">
                    Executives
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h3 className="text-center mt-[300px] text-8xl">
          Green Explore Society
        </h3>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="mt-[130px] text-white hover:text-white border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-xl text-sm px-7 py-2.5 text-center me-2 mb-2 dark:border-border-yellow-50 dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-white"
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
    </div>
  );
}
