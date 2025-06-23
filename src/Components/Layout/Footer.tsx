import { ChevronRight, Instagram, Linkedin, Youtube,  } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative text-amber-50 scrollbar-hidden'>
       <Image src="/hero.png" alt="Profile" className="object-cover rounded-lg  w-full h-fit  " height={500} width={500} />

          <div className='absolute top-10    w-full'>
              <div className='text-white  font-thin  flex flex-col  justify-center items-center'>
                  <h2>Need more clarity?</h2>
                  <h2>Get in touch!</h2>
              <button className=' bg-primary p-2 mt-5 text-black px-4 rounded-b-4xl rounded-t-4xl flex justify-center items-center gap-2'>
                  Book a demo <ChevronRight size={18} className='text-black' />
              </button>
              </div>

              <div className='text-white/70 w-full relative bge-amber-50 mt-20 '>
                 <div className='mx-3auto flex justify-between  items-center mx-40 '>
                      <p >© 2024 All Rights Reserved</p>
                      <ul className='flex gap-6 '>
                        <li className='border rounded-full p-2 '><Linkedin size={16}/></li>
                        <li className='border rounded-full p-2 '><Instagram size={16}/></li>
                        <li className='border rounded-full p-2 '> <Youtube size={16} /></li>
                      </ul>
                 </div>
              </div>

          </div>



    </div>
  )
}

export default Footer