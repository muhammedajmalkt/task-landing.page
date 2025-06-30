import { Plus } from "lucide-react";
import React from "react";

const data = [
  "Is it really unlimited?",
  "Why wouldn't I just hire a freelancer?",
  "Why wouldn't I just hire a full-time designer?",
  "Can I pause, renew or cancel at any time?",
  "Are there any contracts?",
  "How do we communicate?",
  "What if I only have one design task?",
  "What is an active task?",
  "Who are the designers?",
  "How many designs can be done in a single month?",
  "Are there any refunds if I don't like the designs?",
];
const Insight = () => {
  return (
    <div className="my-28 lg:w-3/4  w-11/12 mx-auto text-center scrollbar-hidden" id="faq">
      
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2 w-fit mx-auto">
        Insight
      </button>
      <h2 className="flex  flex-col leading-16 mb-18 mt-4 ">        
        Frequently asked <span> questions</span>{" "}
      </h2>

      {data.map((item,i) => (
        <p  key={i} className="lg:w-2/3 w-full  mx-auto flex  justify-between  mb-2 p-5 bg-neutral rounded-2xl border hover:text-primary border-neutral-700 hover:shadow hover:shadow-amber-400/60  ">
          {item} <Plus />{" "}
        </p>
      ))}
    </div>
  );
};

export default Insight;
