import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    image: "/Portfolio/portfolio1.png",
    head: "Slipery moneys - e- commerce platform for high risk industries",
  },
  {
    image: "/Portfolio/portfolio2.png",
    head: "Hybrid capital - digital currency",
  },
  {
    image: "/Portfolio/portfolio3.png",
    head: "Betero - sports betting platform",
  },
  {
    image: "/Portfolio/portfolio4.png",
    head: "Exec - employees financial wellness saas",
  },
  {
    image: "/Portfolio/portfolio5.png",
    head: "Voltoge - accessible clean energy startup",
  },
  {
    image: "/Portfolio/portfolio6.png",
    head: "Hyperbolic - a decentralized data transmission startup",
  },
];
const Portfolio = () => {
  return (
    <div className="mt-20 w-3/4 mx-auto scrollbar-hidden   " id="portfolio">
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2">
        {" "}
        Portfolio{" "}
      </button>

      <div className=" flex  justify-between mb-14">
        <h2 className="flex  flex-col leading-16">
          {" "}
          Exceptional work<span> you deserve</span>{" "}
        </h2>
        <p className="w-96 content-end">
          From tech startups to healthcare giants, e- commerce pioneers to
          edtech, we've left our mark on diverse domains
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {data.map((item,_) => (
          <div  key={_} className="group relative w-fit overflow-hidden rounded-3xl">
            <Image
              src={item.image}
              alt="/portfolio"
              className="w-[400px] h-[400px] rounded-3xl transition-transform duration-500 group-hover:scale-110"
              width={500}
              height={500}
            />
            <h4 className="relative bottom-22 w-[400px] px-8 ">{item.head}</h4>
          </div>
        ))}
      </div>

      <button className=" bg-primary p-2  text-black mt-10  px-4 rounded-b-4xl rounded-t-4xl flex justifye-center items-center gap-2 w-fit mx-auto">
        See all works <ChevronRight size={18} className="" />
      </button>
    </div>
  );
};

export default Portfolio;
