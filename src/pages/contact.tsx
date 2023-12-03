import ContactsForm from "../Components/ContactsForm";
import ContactUsLinkComp from "../Components/ContactsLinkComp";
import FooterComp from "../Components/FooterComp";
import NavComp from "../Components/NavComp";

export default function Home() {
  return (
    <div className="font-main">
      <div
        className="hero bg-scroll text-white"
        style={{
          backgroundImage: `url('/contactsCover.png')`,
          height: "650px",
        }}
      >
        {/* Hero section */}
        <NavComp />
        <h3 className="text-center mt-[200px] text-8xl">Contact Us</h3>
      </div>

      <div className="mt-[100px] text-center mx-[200px]">
        <h3 className="text-center text-5xl font-bold text-[#466042]">
          Contacts
        </h3>
        <div className=" w-[100%] flex justify-between">
          <ContactUsLinkComp />
          <ContactsForm />
        </div>
      </div>

      <FooterComp />
    </div>
  );
}
