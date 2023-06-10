import React, { useEffect } from "react";
import abtus from "../image/abtus.jpg";
import abtus1 from "../image/abtus1.jpg";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/p3.jpg";
/* import p4 from '../image/p4.jpg' */
import p5 from "../image/p5.jpg";
import p6 from "../image/p6.jpg";
import { Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div data-theme="light">
      <section id="sec1">
        <img src={abtus} alt="" id="abtus" />
        <div
          className="px-4 text-white justify-center text-center"
          id="textabtus"
        >
          <h1 className="md:text-6xl  text-4xl font-extrabold pb-7">
            About us
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minima esse ex eveniet nemo rerum veritatis consequuntur modi
            corrupti corporis suscipit perferendis natus illum quia, sapiente
            laboriosam quod alias <br /> <br /> architecto blanditiis doloribus
            ratione officiis tenetur atque. Laborum beatae corrupti reiciendis.{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At odio ea
            ex nisi eum perferendis quis rem totam quaerat harum?
          </p>
        </div>
      </section>

      <section className="text-center  py-36 justify-center">
        <h1 className="text-center text-4xl text-orange-400 font-semibold   py-16">
          STORY
        </h1>
        <div className="flex-wrap lg:grid lg:grid-cols-2 mx-auto w-2/3 justify-center text-center lg:gap-14   lg:gap-y-16">
          <p className="text-left w-full p-5 " data-aos="fade-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            quidem optio vero doloribus aspernatur neque itaque nostrum delectus
            eos velit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis libero fuga aperiam ab minima totam ullam enim ad assumenda
            harum velit est voluptates consequatur non, veritatis illum
            expedita, unde tempora itaque ut sunt. In, eos voluptate ex unde
            nemo provident id dolore itaque iste velit veniam illo mollitia?
            Provident consequuntur eos quasi enim repudiandae sed eaque ex odio
            voluptatem cum.
          </p>
          <p>
            <img src={p5} alt="" className="w-full p-5" data-aos="fade-left" />
          </p>
          <p>
            <img src={p6} alt="" className="w-full p-5" data-aos="fade-right" />
          </p>
          <p className="text-right w-full " data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            sapiente magnam molestias totam ipsa fugiat eaque neque enim
            obcaecati dicta! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ratione cupiditate minima eos itaque quaerat, in odit iste at
            reiciendis, quam saepe facilis illo, excepturi velit vel aspernatur
            fugiat amet! Optio nesciunt provident nemo voluptates odio accusamus
            fugit recusandae, laborum possimus maiores numquam, dolore corporis
            magni dolores cum quia autem est ea labore natus molestiae
            laudantium suscipit sed sint. Nulla totam at laborum tempore eveniet
            corporis nihil vero quam dignissimos repudiandae aliquid, illum qui
            earum recusandae odit a enim pariatur temporibus!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;



  <section class="text-white body-font">
  <div class="container px-3  py-16 mx-auto">
    <div class="flex flex-col text-center w-full  mb-20">
      <h1 class="text-4xl font-medium title-font md:py-32 lg:py-0 mt-28 text-white">
        OUR TEAM
      </h1>
    </div>
    <div class="flex overflow-auto  justify-center lg:mx-auto" id="abtcard">
      <div class="p-2 lg:w-1/2 lg:p-2 md:py-32 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={p1}
          />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">
              Alper Kamu
            </h2>
            <h3 class="text-gray-200 mb-3">UI Developer</h3>
            <p class="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            <span class="inline-flex">
              <a class="text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/2 lg:p-2 md:py-32 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-full h-56  object-center mb-4"
            src={p2}
          />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">
              Alex Gender
            </h2>
            <h3 class="text-gray-200 mb-3">UI Developer</h3>
            <p class="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            <span class="inline-flex">
              <a class="text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/2 lg:p-2 md:py-32 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img
            alt="team"
            class="flex-shrink-0 rounded-lg w-full h-56  object-center mb-4"
            src={p3}
          />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-white">
              Mariya Saikh
            </h2>
            <h3 class="text-gray-200 mb-3">UI Developer</h3>
            <p class="mb-4">
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p>
            <span class="inline-flex">
              <a class="text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 