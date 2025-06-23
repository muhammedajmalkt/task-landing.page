import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" mt-26 scrollbar-hidden" id="">

      <div className="flex flex-col items-center justify-center text-center">
        {/* Render 5 stars */}
        <div className=" border border-gray-500 text-gray-400  text-xs w-fit px-4 py-2 rounded flex items-center justify-center gap-2 rounded-b-4xl rounded-t-4xl">
          <span>5.0</span>

          <div className="space-x-0.5 flex ">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star size={16} className="text-primary fill-current " key={i} />
            ))}
          </div>
          <span>11 reviews</span>
        </div>

        <div className="font-medium flex flex-col items-center   bg-awmber-300">
          <h1> Partner with a Full-Service </h1>
          <h1> Design Team for All Your </h1>
          <h1> Creative Needs</h1>
          <p>
            Skip the hassle of finding the perfect full-time designer or studio
          </p>
          <button className=" bg-primary p-2  text-black mt-10  px-4 rounded-b-4xl rounded-t-4xl flex justifye-center items-center gap-2">
            Connect -us <ChevronRight size={18} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
