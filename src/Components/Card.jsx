import React,{useEffect} from 'react';
import Carosol from '../Components/Carosol';
import p1 from '../image/pro1.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
   return (
     <section
       class="text-orange-600 body-font overflow-hidden "
       data-theme="light"
     >
       <div class="container px-5 py-36 mx-auto">
         <div class="flex flex-wrap -m-12">
           <div
             class="p-12 md:w-1/2 flex flex-col items-start"
             data-aos="fade-up"
           >
             <h2 class="sm:text-3xl text-2xl title-font font-medium text-red-900 mt-4 mb-4">
               Roof party normcore{" "}
               <font className="text-yellow-500"> before they sold out</font> ,
               cornhole vape
             </h2>
             <p class="leading-relaxed mb-8">
               Live-edge letterpress cliche, salvia fanny pack humblebrag
               narwhal portland. VHS man braid palo santo hoodie brunch trust
               fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
               fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
               probably haven't heard of them hexagon kickstarter craft beer
               pork chic.
             </p>
            
             <a class="inline-flex items-center">
               <img
                 alt="blog"
                 src={p1}
                 class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
               />
               <span class="flex-grow flex flex-col pl-4">
                 <span class="title-font font-medium text-red-900">
                   Holden Caulfield
                 </span>
                 <span class="text-orange-400 text-xs tracking-widest mt-0">
                   CEO
                 </span>
               </span>
             </a>
           </div>
           <div
             className="p-12 sm:w-1/3 md:w-1/2 flex flex-col items-start overflow-auto sm:overflow-auto"
             id="caro"
           >
             <Carosol />
           </div>
         </div>
       </div>
     </section>
   );
};

export default Card;