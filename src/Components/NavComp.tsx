import React from "react";

function NavComp() {
  return (
    <nav className="bg-[#000] bg-opacity-40">
      <div className="w-[100%] flex justify-between p-3">
        <a href="/" className="">
          <img src="nav/navIcon.png" className="h-[60px]" alt="Flowbite Logo" />
        </a>
        <div className="" id="navbar-sticky">
          <ul className="flex justify-between">
            <a href="/" className="" aria-current="page">
              <li className="p-4 hover:bg-[#0f172a] rounded-lg">Home</li>
            </a>
            <a href="/aboutUs" className="">
              <li className="p-4 hover:bg-[#0f172a] rounded-lg">About Us</li>
            </a>
            <a href="/gallery" className="">
              <li className="p-4 hover:bg-[#0f172a] rounded-lg">Gallery</li>
            </a>
            <a href="/excicutives" className="">
              <li className="p-4 hover:bg-[#0f172a] rounded-lg">Executives</li>
            </a>
            <a href="/contact" className="">
              <li className="p-4 hover:bg-[#0f172a] rounded-lg">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavComp;
