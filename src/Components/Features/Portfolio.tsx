import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    image: "/Portfolio/portfolio1.png",
    head: "Slipery moneys - e-commerce platform for high risk industries",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="portfolio">
      <div className="flex justify-center">
        <button className="border border-yellow-500/10 bg-yellow-500/10 text-primary py-2 px-4 rounded-full text-sm font-medium mb-8">
          Portfolio
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          Exceptional work <span className="block">you deserve</span>
        </h2>
        <p className="text-gray-300  text-lg max-w-md md:text-start">
          From tech startups to healthcare giants, e-commerce pioneers to edtech,
          we've left our mark on diverse domains
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-3xl">
            <div className="aspect-square overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.head}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="relative bottom-22 w-[400px] px-8  ">{item.head}</h4>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-primary hover:bg-primary/90 transition-colors text-black font-medium py-3 px-6 rounded-full flex items-center gap-2">
          See all works <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;