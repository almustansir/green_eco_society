import React from "react";

const ContactsForm = () => {
  return (
    <div>
      {/* Use 'NODEMAILER' to send email from contact component */}
      {/* contact forms */}
      <section className="">
        <div className="py-16 px-4 w-[500px]">
          <h2 className="mb-4 text-3xl tracking-tight text-left text-gray-900">
            Send us a message
          </h2>
          <form action="#" className="space-y-8">
            <div>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="float-right text-black border border-[#BAE6B2] hover:bg-[#BAE6B2] font-medium rounded-xl text-sm px-7 py-3 text-center"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactsForm;
