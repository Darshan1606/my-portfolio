import React from "react";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.reset();
  };
  return (
    <div className="h-auto p-4" id="contactme">
      <div className="text-violet-700 text-4xl font-semibold text-center uppercase pb-8">
        Contact Me
      </div>
      <div className="flex justify-center items-center p-8 rounded-3xl h-auto">
        <form onSubmit={handleOnSubmit} class="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="First Name"
                name="fname"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
                name="lname"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                id="grid-email"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none h-40 block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                id="grid-message"
                type="textarea  "
                placeholder="Write your message here....."
                name="message"
              />
            </div>
          </div>
          <div className="p-4 flex justify-center items-center">
            <button className="p-3 px-8 rounded-lg text-lg text-white bg-violet-700 hover:bg-violet-500 no-underline outline-0">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
