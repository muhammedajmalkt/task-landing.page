import Image from 'next/image'
import React from 'react'

let data = [
  { image: "/benefits/benefits1.png", title: "Fast turnaround", disc: "Expect the first draft within 48-72 hours, from Monday to Saturday." },
  { image: "/benefits/benefits2.png", title: "Unlimited requests", disc: "Enjoy the freedom of unlimited designs, tailored to meet your every need." },
  { image: "/benefits/benefits3.png", title: "Always in sync", disc: "Stay in sync with real-time updates and seamless communication, all via Slack." },
  { image: "/benefits/benefits4.png", title: "Pause or cancel anytime", disc: "Flexibility at your fingertips—pause or cancel your subscription anytime." },
  { image: "/benefits/benefits5.png", title: "Trello task management", disc: "Expertise in crafting designs that not only captivate but also drive results." },
  { image: "/benefits/benefits6.png", title: "Worry free pricing", disc: "Get all your design needs covered for just 2,150/month." }]
const Benefits = () => {
  return (
    <div className='my-28 w-3/4 mx-auto text-center scrollbar-hidden' id='benefits'>
      <button className="   border border-yellow-500/10 bg-yellow-500/10 text-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex  justify-center items-center gap-2 w-fit mx-auto"> {" "} Benefits{" "} </button>
      <h2 className="flex  flex-col leading-16 mb-18 mt-4 "> {" "}Unlock a world of design <span> potential with us</span>{" "} </h2>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
          {data.map((item,_)=>(
            <div  key ={_} className='bg-yeellow-200 '>
              <Image
              src={item.image}
              alt='image'
              width={400}
              height={400}
              className='w-[400px] h-auto'
              />
              <div className='text-start mt-6' >
                <h4>{item.title}</h4>
                <p className='text-neutral-400'>{item.disc}</p>
                </div >
              </div>
          ))}

      </div>
    </div>
  )
}

export default Benefits