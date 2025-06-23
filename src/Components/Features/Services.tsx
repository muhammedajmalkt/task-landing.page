import React from "react";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";

const Services = () => {
  return (
    <div className="my-28 w-3/4 mx-auto text-center scrollbar-hidden" id="services">
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2 w-fit mx-auto">
        {" "}
        Services{" "}
      </button>
      <h2 className="flex  flex-col leading-16 mb-18 mt-4 ">
        {" "}
        All you want, <span> delivered on time</span>{" "}
      </h2>

      <div className="relative w-2/3 mx-auto">
        {/* {shadow} */}
        <div className="absolute right-0 top-0 h-full z-50 w-[180px] bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        <div className="absolute left-0 top-0 h-full z-50 w-[180px] bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <InfiniteSlider gap={20} speed={30} className="mb-5">
          {[
            "UI/UX Design",
            "Graphic design",
            "Logo design",
            "Branding",
            "Animation",
          ].map((service, index) => (
            <div
              key={index}
              className="w-[150px] flex items-center justify-center bg-[#141414] rounded-lg border border-[#414141] p-3 text-sm"
            >
              {service}
            </div>
          ))}
        </InfiniteSlider>
        <InfiniteSlider gap={20} speed={30} reverse>
          {[
            "UI/UX Design",
            "Graphic design",
            "Logo design",
            "Branding",
            "Animation",
          ].map((service, index) => (
            <div
              key={index}
              className="w-[150px] flex items-center justify-center bg-[#141414] rounded-lg border border-[#414141] p-3 text-sm"
            >
              {service}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default Services;
