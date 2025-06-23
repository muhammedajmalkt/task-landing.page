
import { ChevronRight, Star } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-26 scrollbar-hidden" id="">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Rating badge */}
        <div className="border border-gray-500 text-gray-400 text-xs w-fit px-4 py-2 rounded-full flex items-center justify-center gap-2 mb-8">
          <span>5.0</span>
          <div className="space-x-0.5 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star size={16} className="text-primary fill-current" key={i} />
            ))}
          </div>
          <span>11 reviews</span>
        </div>

        {/* Main content */}
        <div className=" mx-auto">
          <h1 className=" sm:text-5xl md:text-6xl leading-tight mb-6">
            <span className="">Partner with a Full-Service</span>
            <span className="block">Design Team for All Your</span>
            <span className="block">Creative Needs</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Skip the hassle of finding the perfect full-time designer or studio
          </p>
          
          <button className="bg-primary hover:bg-primary/90 transition-colors text-black font-medium py-3 px-6 rounded-full flex items-center gap-2 mx-auto">
            Connect with us <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;