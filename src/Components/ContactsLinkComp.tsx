import React from "react";

function ContactUsLinkComp() {
  return (
    <div className=" mt-20 flex flex-col space-y-12">
      {/* contactss link */}
      <div className=" flex items-center">
        <img
          src="footer/fbIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <a href="#">Facebook Page</a>
      </div>

      <div className=" flex items-center">
        <img
          src="footer/fbIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <a href="#">Facebook Page</a>
      </div>

      <div className=" flex items-center">
        <img
          src="footer/emailIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <h3>example@gmail.com</h3>
      </div>

      <div className=" flex items-center">
        <img
          src="footer/callIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <h3>example@gmail.com</h3>
      </div>

      <div className=" flex items-center">
        <img
          src="footer/callIcon.png"
          className="h-[35px] mr-8 hover:cursor-pointer"
          alt="Flowbite Logo"
        />
        <h3>example@gmail.com</h3>
      </div>
    </div>
  );
}

export default ContactUsLinkComp;
