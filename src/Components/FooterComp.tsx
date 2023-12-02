import React from "react";

function FooterComp() {
  return (
    <div className=" bg-[#C7CBB2] pt-10 mt-[100px]">
      {/* footer section */}
      <div className=" flex">
        <img
          src="footer/footerTop1.png"
          className="h-[60px] mx-10"
          alt="Flowbite Logo"
        />
        <img
          src="footer/footerTop2.png"
          className="h-[60px]"
          alt="Flowbite Logo"
        />
      </div>
      <div className=" flex px-[250px] mt-10">
        <div className=" pr-20">
          <h3 className=" text-center text-[#283825] text-xl font-bold">
            About Us
          </h3>
          <p className=" pt-5">
            Lorem ipsum dolor sit amet consectetur. Faucibus sit rutrum
            pellentesque orci tortor diam ac. Sit elit maecenas consectetur vel
            nunc viverra facilisi mattis. Lorem ipsum dolor sit amet
            consectetur. Faucibus sit rutrum pellentesque orci tortor diam ac.
            Sit elit maecenas consectetur vel nunc viverra facilisi mattis.
          </p>
        </div>
        <div className=" pl-20">
          <h3 className=" text-center text-[#283825] text-xl font-bold">
            Our Work
          </h3>
          <p className=" pt-5">
            Lorem ipsum dolor sit amet consectetur. Faucibus sit rutrum
            pellentesque orci tortor diam ac. Sit elit maecenas consectetur vel
            nunc viverra facilisi mattis. Lorem ipsum dolor sit amet
            consectetur. Faucibus sit rutrum pellentesque orci tortor diam ac.
            Sit elit maecenas consectetur vel nunc viverra facilisi mattis.
          </p>
        </div>
      </div>
      <div className=" mt-10">
        <h3 className=" text-center text-[#283825] text-xl font-bold">
          Contact Us
        </h3>
        <div className=" flex justify-center px-[250px] mt-10 pb-8">
          <img
            src="footer/fbIcon.png"
            className="h-[35px] mr-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <img
            src="footer/emailIcon.png"
            className="w-[40px] hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <img
            src="footer/instraIcon.png"
            className="h-[35px] mx-8 hover:cursor-pointer"
            alt="Flowbite Logo"
          />
          <img
            src="footer/callIcon.png"
            className="h-[30px] hover:cursor-pointer"
            alt="Flowbite Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
