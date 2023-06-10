import React,{useEffect} from 'react';
import p1 from '../image/bOvf94dPRxWu0u3QsPjF_tree.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    return (
      <div
        data-theme="light"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${p1})`,
        }}
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos="zoom-out">
            <h1 className="mb-5 text-xl py-5 text-white font-bold">
              Mritikkas Brand House
            </h1>
            <p className="mb-5 text-4xl py-5 text-white font-bold">
              Dare to Live the life.
              <br />
              You,ve Always Wanted.
            </p>
            <p className="mb-5 text-xl py-5  text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              quibusdam pariatur alias vitae quidem optio maxime facere
              blanditiis at amet?
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero;