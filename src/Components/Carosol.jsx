import React from "react";
import p4 from "../image/13.jpg";
import p5 from "../image/14.jpg";
import p6 from "../image/15.jpg";
import p7 from "../image/16.jpg";


const Carosol = () => {
  return (
    <div>
      <div id="carosol">
        <div id="inner-carosol">
          <img src={p4} className="px-5 md:px-7" alt="" />
          <img src={p5} className="px-5 md:px-7" alt="" />
          <img src={p6} className="px-5 md:px-7" alt="" />
          <img src={p7} className="px-5 md:px-8" alt="" />
    
        </div>
      </div>
    </div>
  );
};

export default Carosol;
