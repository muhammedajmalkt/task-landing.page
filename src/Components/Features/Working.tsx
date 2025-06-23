import { ChevronRight } from "lucide-react";
import React from "react";

let data = [
  {
    no: 1,
    head: "Subscribe to a plan",
    disc: "Select a plan that fits your needs and jump on a onboarding call",
  },
  {
    no: 2,
    head: "Add a task",
    disc: "List your first task on our shared Trello board by specifying the requirements.",
  },
  {
    no: 3,
    head: "Enjoy results",
    disc: "Receive your completed tasks in 2-4 business days.",
  },
];

const Working = () => {
  return (
    <div className="mt-20 w-3/4 flex justify-center flex-col items-center mx-auto scrollbar-hidden">
      <button className=" border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex justify-center items-center gap-2">
        {" "}
        How it works?{" "}
      </button>
      <h2 className="flex  flex-col items-center  leading-16 my-3">
        <span>Pay and get started </span>
        <span>the same day </span>
      </h2>
      <p className="w-1/2 content-center text-center">
        No unnecessary bureaucracy. We focus on getting your ideas and problems
        solved.
      </p>
      {/* {card} */}
      <div className=" grid lg:grid-cols-3 gap-4 bge-amber-200  my-10 grid-cols-1">
        {data.map((item,index) => (
          <div  key ={index} className="border border-neutral-600  h-[210px] w-full  bg-neutral rounded-3xl p-4">
            <div className="border border-yellow-500/10 bg-yellow-500/10 text-primary  content-center w-12 h-12  rounded-full  text-center ">
              {item.no}
            </div>

            <h4 className="mt-6">{item.head}</h4>
            <p className="text-neutral-400">{item.disc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
