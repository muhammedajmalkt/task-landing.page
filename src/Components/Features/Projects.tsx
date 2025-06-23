import Image from "next/image";
import React from "react";
import Video from "../Buttons/VideoPlay";

const Projects = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scrollbar-hidden">
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-3xl border border-neutral-700 relative overflow-hidden">
          <Image
            src="/project.jpeg"
            alt="project"
            width={800}
            height={600}
            className="object-cover w-full h-full rounded-3xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Video />
          </div>
        </div>

        {/* Right testimonial */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-3xl border border-neutral-700 bg-neutral flex items-center">
          <div className="flex  sm:p-6 items-center">
            <Image
              src="/flower.png"
              alt="flower decoration"
              width={24}
              height={24}
              className="h-20 w-9 hidden sm:block"
            />
            
            <div className="px- sm:px-5">
              <div className="text-sm sm:text-base text-center ">
                <p className="mb-3">
                  An absolute professional who consistently delivers exceptional work, even under the most demanding deadlines. I appreciated the insightful feedback and innovative ideas introduced throughout the design process, which greatly enhanced the final product.
                </p>
                <footer className="text-neutral-500 flex gap-3 justify-center items-center mt-5 ">
                  <p>Murshid Pulkkada</p>
                  <p>Founder @Progbiz</p>
                </footer>
              </div>
            </div>
            
            <Image
              src="/flower.png"
              alt="flower decoration"
              width={24}
              height={24}
              className="h-20 w-9 hidden sm:block rotate-y-180"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral w-full h-auto sm:h-80 rounded-3xl border border-neutral-700 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex">
           <h5 className="p-y-10 text-4xl  flex flex-col " style={{fontWeight:"200"}}>
           <span> Your dedicated </span>
           <span>in-house design</span>
          <span>team</span>
           </h5>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <p className="text-sm sm:text-base mb-6 md:mb-0">
            We are a global collective of diverse designers and developers,
            partnering with brands of all scales. What distinguishes us is our
            dedication to crafting memorable, user-friendly, and captivating
            experiences — it's what we excel at. The projects we deliver
            combine creative vision with practical execution, resulting in
            solutions that are both distinctive and impactful.
          </p>

          <div className="flex justify-between items-center">
            <div className="border-l border-neutral-700 pl-4 py-2">
              <p className="font-medium">Murshid</p>
              <p className="text-neutral-500 text-sm">Founder and CEO</p>
            </div>
            
            <div className="transform rotate-12">
              <Image
                src="/flower.png"
                alt="flower decoration"
                width={24}
                height={24}
                  className=" h-20 w-9 rotate-y-180  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;