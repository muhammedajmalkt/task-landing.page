import Image from "next/image";
import React from "react";
import Video from "../Buttons/VideoPlay";

const Projects = () => {
  return (
    <div className="mt-32 scrollbar-hidden">
      <div className=" w-3/4 mx-auto">
        <div className="flex gap-4  mx-auto  mb-4  ">
          <div className=" w-2/4 h-80 rounded-4xl  border border-neutral-700">
            {/* { left} */}
            <Image
              src="/project.jpeg"
              alt="project"
              width={600}
              height={400}
              className="object-fill  w-full h-full rounded-4xl"
            />
            <div className=" relative flex justify-center bottom-44 ">
              <Video />
            </div>
          </div>
          <div className=" w-2/3 h-80 rounded-4xl  border border-neutral-700 bg-neutral content-center">
            {/* {right} */}
            <div className=" flex p-5 justify-center items-center">
              <Image
                src="/flower.png"
                alt="flower"
                width={30}
                height={30}
                className="  h-20 w-9"
              />
              <div className="p-3 ">
                <p className="flex flex-col  justify-center items-center">
                  <span>
                    An absolute professional who consistently delivers
                    exceptional work,{" "}
                  </span>
                  <span>
                    even under the most demanding deadlines. I appreciated the
                    insightful{" "}
                  </span>
                  <span>
                    feedback and innovative ideas introduced throughout the
                    design{" "}
                  </span>
                  <span>
                    {" "}
                    process, which greatly enhanced the final product..{" "}
                  </span>
                </p>
                <p className="text-neutral-500 flex gap-3 justify-center items-center mt-5">
                  <span>Murshid Pulkkada </span> Founder @Progbiz
                </p>
              </div>
              <Image
                src="/flower.png"
                alt="flower"
                width={30}
                height={40}
                className=" h-20 w-9 rotate-y-180 "
              />
            </div>
          </div>
        </div>
        {/* {center} */}
        <div className="bg-neutral w-full h-80 rounded-4xl border border-neutral flex">
          <h5 className="w-1/2 p-10 text-4xl font-normal flex flex-col ">
          <span> Your dedicated </span>
          <span>in-house design</span>
           <span>team</span>
          </h5>
          <div className="w-1/2 p-6 h-full flex flex-col justify-between -pb-10">
            <p>
              We are a global collective of diverse designers and developers,
              partnering with brands of all scales. What distinguishes us is our
              dedication to crafting memorable, user-friendly, and captivating
              experiences — it's what we excel at. The projects we deliver
              combine creative vision with practical execution, resulting in
              solutions that are both distinctive and impactful.
            </p>

            <div className="flex  justify-between items-center">
              <p className="flex flex-col border-l border-neutral-700  p-4 w-fit ">
                Murshid<span>Founder and CEO</span>
              </p>
              <div className="rotate-20">
                <Image
                  src="/flower.png"
                  alt="flower"
                  width={30}
                  height={40}
                  className=" rounded-4xl h-20 w-9 rotate-y-180  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
