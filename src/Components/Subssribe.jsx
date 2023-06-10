import React from 'react';

const Subssribe = () => {
    return (
      <div className="text-gray-600 body-font" data-theme="light">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
           Subscribe to Newslatter
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perferendis fuga nisi, doloremque quasi ipsam nemo soluta? Delectus esse, quis modi odit expedita totam aliquid repellendus magni veniam officiis reiciendis minima ad dignissimos quod error nobis quam, magnam at earum dicta!  maxime voluptatum reiciendis quibusdam. In voluptas rerum dolores sapiente molestiae!
           
            </p>
          </div>
          <div className="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                placeholder="alexa@gmail.com"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="btn btn-square bg-orange-500  px-16">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default Subssribe;