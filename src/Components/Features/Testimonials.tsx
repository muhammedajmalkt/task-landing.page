import React from "react";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Milos Vidic",
      profile: "/testimonials/image1.png",
      position: "CEO @goatmarketing",
      writing:
        "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate...",
    },
    {
      id: 2,
      name: "Rasesh Seth",
      position: "CEO @nextyn",
      profile: "/testimonials/image2.png",

      writing:
        "Vas was extremely easy to work with. He's a pro at Webflow and always open to hearing you out and executing exactly how you want. I'd definitely work with him again.",
    },
    {
      id: 3,
      name: "Goran Markovic",
      profile: "/testimonials/image1.png",
      position: "Founder @viziya",
      writing:
        "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that showcased our projects beautifully and reflected our unique design philosophy...",
    },
    {
      id: 4,
      name: "Chris Hjort",
      profile: "/testimonials/image3.png",
      position: "PM @host",
      writing:
        "I highly recommend Vasilije. He is hardworking, creative, flexible, and fast. I'm happy I found his profile and will definitely hire him again!",
    },
    {
      id: 5,
      name: "Borgar Erlendsson",
      profile: "/testimonials/image4.png",
      position: "CEO @kozmoz",
      writing:
        "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas during the design phase...",
    },
  ];
  return (
    <div className="my-28 lg:w-3/4 w-full mx-auto text-center scrollbar-hidden">
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2 w-fit mx-auto">
        {" "}
        Testimonials{" "}
      </button>
      <h2 className="flex  flex-col leading-16 mb-18 mt-4 px-2 ">
        {" "}
        Read what our clients are
        <span> saying about us</span>{" "}
      </h2>

      <div className=" relative lg:flex h-[550px] space-x-4 justify-center hidden ">
        {/* {shadow} */}
       <div className="absolute bottom-0 left-0 w-full h-[180px] z-50 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        <InfiniteSlider direction="vertical" speed={40} reverse >
          {reviews.slice(0, 4).map((item,i) => (
            <div key={i} className="bg-neutral  p-5 border border-neutral-700 rounded-3xl">
              <div className="flex flex-row gap-5 mb-8">
                <Image
                  src={item.profile}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start ">
                  <span>{item.name}</span>
                  <span>{item.position}</span>
                </div>
              </div>
              <p className="w-[300px] text-start">{item.writing}</p>
              <div className="space-x-0.5 flex items-center mt-12 ">
                <span>5.0</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    size={16}
                    className="text-primary fill-current "
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </InfiniteSlider>

        {/* {slide2} */}
        <InfiniteSlider direction="vertical" speed={40} >
          {reviews.slice(0, 4).map((item,i) => (
            <div key={i}  className="bg-neutral  p-5 border border-neutral-700 rounded-3xl ">
              <div className="flex flex-row gap-5 mb-8 ">
                <Image
                  src={item.profile}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start ">
                  <span>{item.name}</span>
                  <span>{item.position}</span>
                </div>
              </div>
              <p className="w-[300px] text-start">{item.writing}</p>
              <div className="space-x-0.5 flex items-center mt-12 ">
                <span>5.0</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    size={16}
                    className="text-primary fill-current "
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </InfiniteSlider>

        {/* {slide3} */}
        <InfiniteSlider direction="vertical" speed={40} reverse>
          {reviews.slice(0, 4).map((item,i) => (
            <div key={i}  className="bg-neutral  p-5 border border-neutral-700 rounded-3xl">
              <div className="flex flex-row gap-5 mb-8">
                <Image
                  src={item.profile}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start ">
                  <span>{item.name}</span>
                  <span>{item.position}</span>
                </div>
              </div>
              <p className="w-[300px] text-start">{item.writing}</p>
              <div className="space-x-0.5 flex items-center mt-12 ">
                <span>5.0</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    size={16}
                    className="text-primary fill-current "
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>


{/* {mobile view} */}
     <div className=" relative flex h-[550px] space-x-4 justify-center lg:hidden ">
        {/* {shadow} */}
       <div className="absolute bottom-0 left-0 w-full h-[180px] z-50 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
       <div className="absolute top-0 left-0 w-full h-[100px] z-50 bg-gradient-to-b from-black via-black/80 to-transparent"></div>

        <InfiniteSlider direction="vertical" speed={40} reverse >
          {reviews.slice(0, 4).map((item,i) => (
            <div key={i} className="bg-neutral  p-5 border border-neutral-700 rounded-3xl">
              <div className="flex flex-row gap-5 mb-8">
                <Image
                  src={item.profile}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start ">
                  <span>{item.name}</span>
                  <span>{item.position}</span>
                </div>
              </div>
              <p className="w-[300px] text-start">{item.writing}</p>
              <div className="space-x-0.5 flex items-center mt-12 ">
                <span>5.0</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    size={16}
                    className="text-primary fill-current "
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </InfiniteSlider>
        </div>

    </div>
  );
};

export default Testimonials;
