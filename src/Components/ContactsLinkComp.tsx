import React from "react";

function ContactUsLinkComp() {
  return (
    <div className=" mt-20 flex flex-col space-y-12">
      {/* contactss link */}
      <div className="flex flex-col space-y-4">
        <div className=" flex items-center">
          <img
            src="footer/fbIcon.png"
            className="h-[35px] mr-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <a href="#" className=" hover:text-[#91C788]">
            Facebook Page
          </a>
        </div>

        <div className=" flex items-center">
          <img
            src="footer/fbIcon.png"
            className="h-[35px] mr-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <a href="#" className=" hover:text-[#91C788]">
            Facebook Page
          </a>
        </div>
      </div>

      <div className=" flex items-center">
        <img
          src="footer/emailIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <h3>example@gmail.com</h3>
      </div>

      <div className="flex flex-col space-y-4">
        <div className=" flex items-center">
          <img
            src="footer/callIcon.png"
            className="h-[35px] mr-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <h3>+880 17687-65678</h3>
        </div>

        <div className=" flex items-center">
          <img
            src="footer/callIcon.png"
            className="h-[35px] mr-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <h3>+880 17687-65678</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactUsLinkComp;
