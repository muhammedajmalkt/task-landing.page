'use client';

import { ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full z-50 mt-10  beg-white shadow-sm">
            <nav className="flex justify-between items-center w-11/12 md:w-3/4 mx-auto py-4">
                <a href="/">
                    <Image src="/LOGO.png" alt="logo" width={100} height={100} />
                </a>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li className='hover:text-amber-400'><a href="">Home</a></li>
                    <li className='hover:text-amber-400'><a href="#portfolio">Portfolio</a></li>
                    <li className='hover:text-amber-400'><a href="#benefits">Benefits</a></li>
                    <li className='hover:text-amber-400'><a href="#services">Services</a></li>
                    <li className='hover:text-amber-400'><a href="#pricing">Pricing</a></li>
                    <li className='hover:text-amber-400'><a href="#faq">FAQ</a></li>
                </ul>

                <div className="hidden md:flex">
                    <button className="border border-primary p-2 px-4 rounded-b-4xl rounded-t-4xl flex items-center gap-2 text-sm font-semibold">
                        Book a demo <ChevronRight size={18} className="text-amber-400" />
                    </button>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-primary"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden px-6 py-4 bg-primary shadow-md">
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Portfolio</a></li>
                        <li><a href="/contact">Benefits</a></li>
                        <li><a href="/contact">Services</a></li>
                        <li><a href="/contact">Pricing</a></li>
                        <li><a href="/contact">FAQ</a></li>
                    </ul>

                    <button className=' border border-primary p-2  px-4 rounded-b-4xl rounded-t-4xl flex justify-center items-center gap-2'>
                        Book a demo <ChevronRight size={18} className='text-amber-400' />
                    </button>
                </div>
            )}
        </header>
    );
};

export default NavBar;
