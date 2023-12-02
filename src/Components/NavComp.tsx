import React from "react";

function NavComp() {
  return (
    <nav className="bg-neutral-950 bg-opacity-40">
      <div className="w-[100%] flex justify-between p-3">
        <a href="/" className="">
          <img src="nav/navIcon.png" className="h-[60px]" alt="Flowbite Logo" />
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
  );
}

export default NavComp;
