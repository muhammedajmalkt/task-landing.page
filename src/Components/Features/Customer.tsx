"use claint";
import React from "react";
import { InfiniteSlider } from "@/Components/motion-primitives/infinite-slider";
import Image from "next/image";

const Customer = () => {
  return (
    <div className="mt-20 scrollbar-hidden">
      <div className=" w-1/2 mx-auto  ">
        <p className=" mx-auto w-fit mb-14 text-neutral-500">
          As seen and loved on:
        </p>
        <InfiniteSlider gap={100} speed={40}>
          <Image
            width={80}
            height={10}
            src="/customer/custm1.png"
            alt="Apple Music logo"
            className="h-[40px] w-auto"
          />
          <Image
            width={80}
            height={20}
            src="/customer/custm2.png"
            alt="Chrome logo"
            className="h-[40px] w-auto"
          />
          <Image
            width={80}
            height={20}
            src="/customer/custm3.png"
            alt="Strava logo"
            className="h-[40px] w-auto"
          />
          <Image
            width={80}
            height={20}
            src="/customer/custm4.png"
            alt="Strava logo"
            className="h-[40px] w-auto"
          />
        </InfiniteSlider>
        {/* <div className=" relative top-20  h-[50px] bg-gradient-to-t from-gray-500 via-white/40 to-transparent w-32  "></div> */}
        <div className='border-t border-neutral-800 mt-14 h-10  z-30' > </div>

      </div>
    </div>
  );
};
export default Customer
