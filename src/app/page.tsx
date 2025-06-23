import Footer from "@/Components/Layout/Footer";
import Hero from "@/Components/Features/Hero";
import NavBar from "@/Components/Layout/NavBar";
import Projects from "@/Components/Features/Projects";
import Image from "next/image";
import Customer from "@/Components/Features/Customer";
import Working from "@/Components/Features/Working";
import Portfolio from "@/Components/Features/Portfolio";
import Benefits from "@/Components/Features/Benefits";
import Services from "@/Components/Features/Services";
import Pricing from "@/Components/Features/Pricing";
import Insight from "@/Components/Features/Insight";
import Testimonials from "@/Components/Features/Testimonials";

export default function Home() {
  return (
    <div className="scrollbar-hidden">
      <Image
        src="/hero.png"
        alt="Profile"
        className="object-cover rounded-lg rotate-180 w-full h-fit -mt-3 "
        height={500}
        width={500}
      />
      <div className=" absolute top-0 w-full scrollbar-hidden"> 
        <NavBar />
           <Hero/>
           <Projects/>
           <Customer/>
            <Working/>
            <Portfolio/>
            <Benefits/>
            <Services/>
            <Pricing/>
            <Insight/>
            <Testimonials/>
        <Footer/>
      </div>

    </div>
  );
}
