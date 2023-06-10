  import React , {useEffect}from 'react';
import p1 from '../image/sasha-kaunas-sjwYplJhOAk-unsplash.jpg';
import p2 from '../image/miguel-carraca-Yfbg-D-9kjo-unsplash(1).jpg';
import p3 from '../image/kajetan-sumila-bPYg2hFBHbY-unsplash.jpg';
import p4 from '../image/hans-isaacson-uPVe7cueMe8-unsplash.jpg';
import p5 from '../image/subhadip-kanjilal-aESUdemkAfc-unsplash.jpg';


import AOS from "aos";
import "aos/dist/aos.css";

const Room = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    return (
      <div
        className="flex-wrap justify-center gap-10 w-full md:flex  p-20"
        data-theme="light"
      >
        <div className="w-full md:w-1/3 p-5">
          <p className="text-4xl font-bold">Room And Suites</p>
          <font className="text-xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </font>

          <img
            src={p1}
            /* data-aos="zoom-in"  */ className="hover:scale-90 duration-300 opacity-50 hover:opacity-100 "
          />
        </div>
        <div className="  w-full   grid grid-flow-row-2 grid-cols-2 gap-5 lg:w-1/3 md:1/3">
          <img src={p2} data-aos="fade-right" />
          <img src={p3} data-aos="fade-left" />
          <img src={p4} data-aos="fade-up" />
          <img src={p5} data-aos="fade-down" />
        </div>
      </div>
    );
};

export default Room;
/* className = "grid grid-flow-row-2 grid-cols-2 gap-0"; */