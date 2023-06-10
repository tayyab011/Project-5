import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   


 



const Getintouch = () => {
    return (
      <div data-theme="light">
        <section className="w-full lg:flex flex-wrap md:flex mx-auto py-26 relative">
          <div className="w-full md:w-1/2 lg:w-1/3 p-10 py-20 sm:text-4xl">
            <h1 className="text-6xl font-extrabold">
              Frequently <font className="text-red-900">Asked</font> Questions{" "}
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-2   flex-wrap">
            <div className="collapse">
              <input type="checkbox" className="peer bg-black " />
              <div className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
               what
              </div>
              <div className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer bg-black " />
              <div className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                Click me to show/hide content
                {/* <FontAwesomeIcon icon={circle} /> */}
              </div>
              <div className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer bg-black " />
              <div className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                Click me to show/hide content
                {/* <FontAwesomeIcon icon={circle} /> */}
              </div>
              <div className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer bg-black " />
              <div className="collapse-title bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                Click me to show/hide content
                {/* <FontAwesomeIcon icon={circle} /> */}
              </div>
              <div className="collapse-content bg-black text-primary-content peer-checked:bg-black peer-checked:text-secondary-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font flex-wrap md:flex lg:flex relative">
          <div class="container w-full md:w-2/3 px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 py-8 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">
                      Interested in
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="number" class="leading-7 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none  rounded text-lg me-10">
                    Submit!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-full md:w-1/3 px-2 py-24 mx-auto">
            <div class="flex flex-col flex-wrap lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-gray-500 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9676017640377!2d90.35948681437593!3d23.819751084555264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1248b7e6013%3A0xae8d5fe51ffc48a9!2z4KaH4Kat4KeH4Kao4KeN4Ka4IOCml-CmvuCmsOCnjeCmruCnh-CmqOCnjeCmn-CmuA!5e0!3m2!1sen!2sbd!4v1680676488320!5m2!1sen!2sbd"
              width="full"
              className="w-full"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <br />
        
        
        
      </div>
    );
};

export default Getintouch;