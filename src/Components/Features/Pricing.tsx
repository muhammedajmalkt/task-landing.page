import { Check, ChevronRight } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center mt-50 text-[#f3f3f3] my-28 w-3/4 mx-auto " id="pricing">
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2 w-fit mx-auto">
        {" "}
        Pricing{" "}
      </button>
      <h2 className="flex  flex-col leading-16 mb-18 mt-4 text-center ">
        {" "}
        Choose the relevant plan to build,{" "}
        <span> grow and fasten your team </span>{" "}
      </h2>


      <div className="w-11/12 flex justify-between mt-10  gap-4">
        <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8 w-1/3">
          <div>
            <p className="text-[#696767]">STANDARD</p>
            <h2 className="text-3xl py-4 flex items-end ">
              $2,150 <span className="text-sm">/month</span>
            </h2>
            <p className="underline-offset-1 py-5 text-sm">
              One request at a time
            </p>
          </div>
          <div>
            <p className="text-[#696767] text-sm py-4">What's included:</p>
            <ul className="list-none space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Unlimited requests
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                ~48 hour delivery
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Unlimited brands
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Weakly meetings
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Pause ir cancel any time
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Managed via Stack and Trello
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                All services except Webflow
              </li>
            </ul>
          </div>
          <div>
            <button className="mt-10 flex gap-2 rounded-4xl bg-primary text-black p-3 text-sm items-center font-medium w-11/12 text-center justify-center">
              Subscribe <ChevronRight width={20} />
            </button>
            <button className="mt-6 flex gap-2 rounded-4xl bg-[#141414] items-center text-white p-3 text-sm font-medium w-11/12 text-center border border-[#3c3c3c] justify-center">
              Book a demo <ChevronRight width={20} />
            </button>
          </div>
        </div>
        <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8 w-1/3">
          <div>
            <p className="text-[#696767]">PRO</p>
            <h2 className="text-3xl py-4 flex items-end ">
              $3,150 <span className="text-sm">/month</span>
            </h2>
            <p className="underline-offset-1 py-5 text-sm">
Double the requests            </p>
          </div>
          <div>
            <p className="text-[#696767] text-sm py-4">What's included:</p>
            <ul className="list-none space-y-2 text-sm">
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Unlimited requests
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                ~48 hour delivery
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Unlimited brands
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Weakly meetings
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Pause ir cancel any time
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                Managed via Stack and Trello
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">
                  <Check size={15} />
                </span>
                All services except Webflow
              </li>
            </ul>
          </div>
          <div>
            <button className="mt-10 flex gap-2 rounded-4xl bg-primary text-black p-3 text-sm items-center font-medium w-11/12 text-center justify-center">
              Subscribe <ChevronRight width={20} />
            </button>
            <button className="mt-6 flex gap-2 rounded-4xl bg-neutral items-center text-white p-3 text-sm font-medium w-11/12 text-center border border-neutral-600 justify-center">
              Book a demo <ChevronRight width={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/3">

          <div className="bg-neutral rounded-4xl border border-neutral-600 h-3/5 p-8">
            <div className="flex flex-col gap-3 pb-4">
              <p className="text-[#696767]">PROJECT-BASED</p>
              <p className="text-[#ffffff] w-9/12 text-sm">
                For a custome fee delivered in milestones. Ideal for specific
                goals Custom project scope
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#696767] text-sm py-4">What's included:</p>
              <ul className="list-none space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-primary mr-2">
                    <Check size={15} />
                  </span>
                  Fixed scope of work
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">
                    <Check size={15} />
                  </span>
                  Delivered in milestones
                </li>
              </ul>
            </div>

          <button className="mt-6 flex gap-2 rounded-4xl bg-neutral items-center text-white p-3 text-sm font-medium w-11/12 text-center border border-[#3c3c3c] justify-center">
              Book a demo  
            </button>
          </div>

          <div className="bg-neutral rounded-4xl border border-[#414141] h-2/5 pt-12  p-8">
            <h6 className="text-4xl ">Refer & earn</h6>
            <p className="text-white  text-sm">
              Recieve $150 for each refferal!
            </p>

                      <button className="mt-6 flex gap-2 rounded-4xl bg-neutral items-center text-white p-3 text-sm font-medium w-11/12 text-center border border-[#3c3c3c] justify-center">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
