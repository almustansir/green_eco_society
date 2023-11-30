export default function Home() {
  return (
    <div className="">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/homeHeroBg.png')`,
          height: "772px",
        }}
      >
        {/* Hero section */}
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
                  <a href="/" className="" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="/aboutUs" className="">
                    About Us
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="/gallery" className="">
                    Gallery
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="/excicutives" className="">
                    Executives
                  </a>
                </li>
                <li className="p-4 hover:bg-slate-900 rounded-lg">
                  <a href="/contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h3 className="text-center mt-[300px] text-8xl">
          Green Explore Society || Excucutives
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
    </div>
  );
}
