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
        {/* 3. add hero content */}
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

        <h3 className="">Green Explore Society</h3>
        <button>Explore</button>
      </div>
    </div>
  );
}
