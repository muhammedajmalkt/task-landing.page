import { ChevronRight, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative text-amber-50 scrollbar-hidden">
      <Image
        src="/hero.png"
        alt="Profile"
        className="hidden lg:block object-cover w-full h-auto "
        height={500}
        width={500}
      />

      <div className="absolute top-10 w-full px-4">
        <div className="text-white font-thin flex flex-col justify-center items-center text-center">
          <h2>Need more clarity?</h2>
          <h2>Get in touch!</h2>
          <button className="bg-primary p-2 mt-5 text-black px-4 rounded-b-4xl rounded-t-4xl flex justify-center items-center gap-2">
            Book a demo <ChevronRight size={18} className="text-black" />
          </button>
        </div>

        <div className="text-white/70 w-full mt-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4 text-sm">
            <p>© 2024 All Rights Reserved</p>
            <ul className="flex gap-4">
              <li className="border rounded-full p-2 hover:bg-white/10 transition">
                <Linkedin size={16} />
              </li>
              <li className="border rounded-full p-2 hover:bg-white/10 transition">
                <Instagram size={16} />
              </li>
              <li className="border rounded-full p-2 hover:bg-white/10 transition">
                <Youtube size={16} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
